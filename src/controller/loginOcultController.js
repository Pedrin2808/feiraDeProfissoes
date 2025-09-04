import { Router } from 'express';
import { verificarLoginn, vincularCurso } from '../repository/nossologRepository.js';

const api = Router();

api.get('/loginoculto/:usuario/:senha', async (req, resp) => {
  try {
    if (!req.params.usuario) throw new Error("Usuário é obrigatório");
    if (!req.params.senha) throw new Error("Senha é obrigatória");

    let usuario = req.params.usuario;
    let senha = req.params.senha;

    let registros = await verificarLoginn(usuario, senha);

    if (registros.length > 0 &&
        registros[0].usuario === usuario &&
        registros[0].senha === senha) {
      resp.json({ ok: true, mensagem: "Login realizado com sucesso!" });
    } else {
      resp.json({ ok: false, mensagem: "Usuário ou senha incorretos" });
    }
  } catch (err) {
    resp.json({ mensagem: err.message });
  }
});


api.post('/vincularCurso', async (req, resp) => {
    try {
      const { usuario, curso } = req.body;
  
      console.log("Requisição recebida com:", usuario, curso);
  
      if (!usuario || !curso) {
        throw new Error("Usuário e curso são obrigatórios");
      }
  
      const resultado = await vincularCurso(usuario, curso);
  
      if (resultado.affectedRows > 0) {
        resp.json({ ok: true, mensagem: "Curso vinculado com sucesso!" });
      } else {
        resp.json({ ok: false, mensagem: "Usuário não encontrado." });
      }
    } catch (err) {
      console.error("Erro ao vincular curso:", err.message);
      resp.status(500).json({ ok: false, mensagem: err.message });
    }
  });


export default api;



