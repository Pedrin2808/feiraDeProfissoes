import { conectionFormulario } from "./conection.js";

export async function vincularVisitante(nome) {
    const comando = `
        select*from Formulario
        where nome = ?
    `
    const [registros] = await conectionFormulario.query(comando, [nome])
    return registros
}

export async function vincularQrcode(nome, qrcode) {
    const comando = `
        update Formulario
        set qrCode = ?
        where nome = ?
    `
    const [registros] = await conectionFormulario.query(comando, [qrcode,nome])
    return registros
}