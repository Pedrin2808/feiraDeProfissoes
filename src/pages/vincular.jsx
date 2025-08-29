import { useState } from 'react'
import { Link } from 'react-router'
import './vincular.scss'

export default function vincular() {
    const [nome, setNome] = useState("")
    const [qrcode, setQrcode] = useState("")
    const [msg, setMsg] = useState("")
    const [msg2, setMsg2] = useState("")

    async function buscarVisitante() {
        let url = `http://localhost:5010/vincular/${nome}`

        let response = await fetch(url);
        let resposta = await response.json();
        setMsg(resposta.mensagem)
    }

    async function vincularQRcode() {
        let url = `http://localhost:5010/vincular/${nome}/${qrcode}`;
    let response = await fetch(url, {
        method: "POST"
    });

    let resposta = await response.json();
    setMsg2(resposta.mensagemVin);
    }

    return (
        <div className='fundo'>
            <h1 className='tt'>Vincular</h1>
            <div className='ajust'>
                <div className='ajust'>
                    <label className='esquerda'>Nome</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} />
                    <br />
                    <button className='b5' onClick={buscarVisitante}>Buscar Visitante</button>
                    <p>{msg}</p>
                    <label className='esquerda2'>N. QR Code</label>
                    <input value={qrcode} onChange={(e) => setQrcode(e.target.value)} />
                </div>
                <button className='b5' onClick={vincularQRcode}>Vincular qrCode</button>
            </div>
            <p>{msg2}</p>
        </div>
    )
}