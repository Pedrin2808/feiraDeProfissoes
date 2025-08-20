import{useState} from 'react'
import {Link} from 'react-router'
import './buscv.scss'

export default function buscar(){
    const [ncpf, setNcpf] = useState()

    return(
        <div className='fundo' >
            <h1 className='tt'>Buscar Visitante</h1>
            <div className='ajust'>
                <div className='ajust'>
                    <label className='esquerda'>Nome/CPF</label>
                    <input value={ncpf} onChange = {(e)=> setNcpf(e.target.value)}/>
                </div>
                <button className='b5'>Buscar</button>
            </div>
        </div>
    )
}