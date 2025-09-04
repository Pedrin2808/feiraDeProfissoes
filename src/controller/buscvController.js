import {Router} from 'express';
import { buscarPorCPF } from '../repository/buscvRepository.js';
const api = Router();


api.get('/buscarv/:cpf', async (req, res) => {
  try {
    const { cpf } = req.params;

    if (!cpf) throw new Error("CPF é obrigatório");
    if (cpf.length < 11) throw new Error("CPF inválido");

    const resultado = await buscarPorCPF(cpf);

    if (!resultado) {
      return res.status(404).json({ mensagem: "Visitante não encontrado" });
    }

    // devolve só nome e cpf
    res.json({ nome: resultado.nome, cpf: resultado.cpf });
  } catch (err) {
    res.status(400).json({ mensagem: err.message });
  }
});

export default api;
