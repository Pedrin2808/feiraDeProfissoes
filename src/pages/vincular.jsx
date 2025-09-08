import { useState } from 'react'
import { Link } from 'react-router'
import './vincular.scss'
import { FaUser, FaLock, FaUber } from "react-icons/fa"; 


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
        try {
            if (!nome && !qrcode) {
                throw new Error("Por favor, Colocar o nome do visitante e o número do Qr Code.");
            }

            if (!nome) {
                throw new Error("Por favor, Colocar o nome do visitante.");
            }

            if(!qrcode) {
                throw new Error('Colocar o número do Qr Code')
            }

            let url = `http://localhost:5010/vincular/${nome}/${qrcode}`;
            let response = await fetch(url, {
                method: "POST"
            });

            let resposta = await response.json();
            setMsg2(resposta.mensagemVin);
        } catch (error) {
            setMsg2(error.message);
        }

    }

    return (
        <div className='vincular-container'>
        <div className='vincular-card'>
        <h1 className='tt'>Vincular</h1>
             <label className="input-label">
              <FaUser className="icon" />
              Nome
            </label>                    
            <input
            value={nome} 
            onChange = {(e)=> setNome(e.target.value)}/>
            <label className="input-label">
              <FaLock className="icon" />
              QrCode
            </label>                    
            <input 
             value={qrcode} 
             onChange = {(e)=> setQrcode(e.target.value)}/>
             <button className='button' onClick={vincularQRcode}>
                 <p>VINCULAR</p>
                    </button>            
                    <p className="msg">{msg2}</p>
        </div>
    </div>
    )
}