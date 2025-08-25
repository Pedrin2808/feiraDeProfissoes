import { Router } from "express";
import { verificarLogin } from "../repository/verificarLoginRepository.js";

const api = Router();

api.get('/login/:usuario/:senha', async (req,resp) => {
    let usuario = req.params.usuario;
    let senha = req.params.senha;

    let registros = await verificarLogin(usuario, senha)

    if(registros.length > 0 && registros[0].usuario === usuario && registros[0].senha === senha){
        resp.json({ ok: true, mensagem: "Login realizado com sucesso!" });
    }
    else {
        resp.json({ ok: false, mensagem: "Usuário ou senha incorretos" });
  }
})

export default api