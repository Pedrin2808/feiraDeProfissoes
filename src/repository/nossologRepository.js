import { conectionLoginn } from "./conection.js";

export async function verificarLoginn(email, senha) {
    const comando = `
        select*from Usuarios
        where usuario = ? AND senha = ?
    `

    const [registros] = await conectionLoginn.query(comando, [email, senha])
    return registros
}


export async function vincularCurso(usuario, curso) {
    const comando = `
      UPDATE Usuarios
      SET cursoEscolhido = ?
      WHERE usuario = ?
    `;
  
    const [resposta] = await conectionLoginn.query(comando, [curso, usuario]);
    return resposta;
  }