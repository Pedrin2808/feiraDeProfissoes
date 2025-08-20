import{useState} from 'react'
import {Link} from 'react-router'
import './login.scss'

export default function login(){
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    return(
        <div className='fundo'>
            <h1 className='tt'>Login</h1>
            <div className='ajust'>
                <div className='ajust'>
                    <label className='esquerda'>Usuário</label>
                    <input value={usuario} onChange = {(e)=> setUsuario(e.target.value)}/>
                    <label className='esquerda2'>Senha</label>
                    <input value={senha} onChange = {(e)=> setSenha(e.target.value)}/>
                </div>
                    <button className='b5'>Entrar</button>
            </div>
        </div>
    )
}