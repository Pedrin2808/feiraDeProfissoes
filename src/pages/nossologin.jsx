import{useState} from 'react'
import {Link} from 'react-router'
import './login2.scss'

export default function login(){
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    return(
        <div>
            <div className='adjus'>
             <img src = "/src/assets/images/feiradep.png"></img>
            </div>
            <div classNahme='fundo2'>
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
        </div>
    )
}