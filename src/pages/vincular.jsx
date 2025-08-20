import{useState} from 'react'
import {Link} from 'react-router'
import './vincular.scss'

export default function vincular(){
    const [nome, setNome] = useState()
    const [qrcode, setQrcode] = useState()

    return(
        <div className='fundo'>
            <h1 className='tt'>Vincular</h1>
            <div className='ajust'>
                <div className='ajust'>
                    <label className='esquerda'>Nome</label>
                    <input value={nome} onChange = {(e)=> setNome(e.target.value)}/>
                    <label className='esquerda2'>N. QR Code</label>
                    <input value={qrcode} onChange = {(e)=> setQrcode(e.target.value)}/>
                </div>
                    <button className='b5'>Vincular</button>
            </div>
        </div>
    )
}