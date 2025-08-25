import { conectionLogin } from "./conection.js";

export async function verificarLogin(email, senha) {
    const comando = `
        select*from Usuarios
        where usuario = ? AND senha = ?
    `

    const [registros] = await conectionLogin.query(comando, [email, senha])
    return registros
}