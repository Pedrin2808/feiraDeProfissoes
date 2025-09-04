import { Router } from "express";
import { adicionarFormulario } from "../repository/formularioRepository.js";

const api = Router();



api.post("/formulario", async (req, resp) => {
  const {
    nome,
    telefone,
    email,
    previsao,
    cpf,
    cep,
    interesse,
    aluno,
    sabendo
  } = req.body;

   const novoVisitante = {
    nome,
    telefone,
    email,
    previsao,
    cpf: cpf.replace(/\D/g, ''), // <-- CPF limpo aqui!
    cep,
    cursoInteresse: interesse,
    exAluno: aluno,
    sabendoFeira: sabendo
  };

  const insertId = await adicionarFormulario(novoVisitante);

  resp.json({ message: "Inscrição realizada com sucesso", id: insertId });
});


export default api;