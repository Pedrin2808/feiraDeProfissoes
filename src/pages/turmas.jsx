import{useState} from 'react'
import {Link} from 'react-router'
import './turmas.scss'

export default function login(){
    const [usuario, setUsuario] = useState()


    return(
        <div>
            <div className='adjus'>
             <img src = "/src/assets/images/feiradep.png"></img>
            </div>
            <div className='fundo2'>
                <h1 className='tt'>Salas</h1>
                <div className='ajust'>
                    <div className='ajust'>
                        <label className='esquerda'>Selecione</label>
                        <input value={usuario} onChange = {(e)=> setUsuario(e.target.value)}/>
                    </div>
                        <button className='b5'>Entrar</button>
                </div>
            </div>
        </div>
    )
}