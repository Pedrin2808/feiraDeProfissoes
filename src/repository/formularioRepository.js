import { conectionFormulario } from "./conection.js";

export async function adicionarFormulario(novoVisitante) {
    const comando = `
        insert into Formulario (nome,telefone,email,previsao,cpf,cep,cursoInteresse,exAluno,sabendoFeira)
        values (?,?,?,?,?,?,?,?,?)
    `
    const [registros] = await conectionFormulario.query(comando, [
        novoVisitante.nome,
        novoVisitante.telefone,
        novoVisitante.email,
        novoVisitante.previsao,
        novoVisitante.cpf,
        novoVisitante.cep,
        novoVisitante.cursoInteresse,
        novoVisitante.exAluno,
        novoVisitante.sabendoFeira
    ])

    return registros.insertId
    
}
