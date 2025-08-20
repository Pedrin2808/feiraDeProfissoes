import{useState} from 'react'
import {Link} from 'react-router'
import './turmas.scss'

export default function login(){
    const [usuario, setUsuario] = useState()
const turmas = ['Eletromecânica', 'Eletrotécnica', 'Adminstração', 'Informatica', 'Comunicação Visual', 'Inglês']

    return(
        <div>
            <div className='adjus'>
             <img src = "/src/assets/images/feiradep.png"></img>
            </div>
            <div className='fundo2'>
                <h1 className='tt'>Salas</h1>
                <div className='ajust'>
                    <div className='ajust'>
                        <label className='esquerda'htmlFor='input-turmas'>Selecione</label>
                        <input type="text"
                id="input-turmas" 
                list="lista-turmas" value={usuario} onChange = {(e)=> setUsuario(e.target.value)}/>

      <datalist id="lista-turmas"> 
        {turmas.map((turmas, index) => (
          <option key={index} value={turmas} />
        ))}
      </datalist>                       </div>
                        <button className='b5'>Entrar</button>
                </div>
            </div>
        </div>
    )
}