import { Router } from "express";
import { vincularQrcode, vincularVisitante } from "../repository/vincularRepository.js";

const api = Router();

api.get('/vincular/:nome', async (req,resp) => {
    let nome = req.params.nome;

    let registros = await vincularVisitante(nome);
    
    if(registros.length > 0 && registros[0].nome === nome){
        resp.json({ ok: true, mensagem: registros[0].nome + ', ' + registros[0].cpf});
    }
    else {
        resp.json({ ok: false, mensagem: "Usuário não encontrado" });
  }

})

api.post("/vincular/:nome/:qrcode", async (req,resp) => {
    let nome = req.params.nome;
    let qrcode = req.params.qrcode;
    let registros = await vincularQrcode(nome,qrcode);
    resp.json({mensagemVin: `O Visitante foi vinculado ao QRcode N°: ${qrcode}`})
})  

export default api