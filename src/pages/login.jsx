import{useState} from 'react'
import {Link} from 'react-router'
import './login.scss'
import { useNavigate } from "react-router";

export default function login(){
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [msg, setMsg]= useState("")
    const navigate = useNavigate();

    async function verificarLogin() {
        if(!usuario && !senha) {
            setMsg("Usuário e senha são obrigatórios");
            return;
        }
        if(!usuario) {
            setMsg("Usuário é obrigatório");
            return;
        }if(!senha) {
            setMsg("Senha é obrigatória");
            return;
        }

        try{
            const url = await fetch(`http://localhost:5010/login/${usuario}/${senha}`);
            const resposta = await url.json();

            if(resposta.ok){
                setMsg(resposta.mensagem);
                navigate("/vincular");
            }
            else{
                setMsg(resposta.mensagem);
            }
        }catch(err){
            setMsg(err.message);
        }

    let url = `http://localhost:5010/login/${usuario}/${senha}`;

    let response = await fetch(url);
    let resposta = await response.json();
    setMsg(resposta.mensagem);

    if(resposta.ok){
        navigate("/vincular")
    }
}

    return(
        <div className='fundo'>
            <h1 className='tt'>Login</h1>
            <div className='ajust'>
                <div className='ajust'>
                    <label className='esquerda'>Usuário</label>
                    <input id='usuario-input' value={usuario} onChange = {(e)=> setUsuario(e.target.value)}/>
                    <label className='esquerda2'>Senha</label>
                    <input id='senha-input' value={senha} onChange = {(e)=> setSenha(e.target.value)}/>
                </div>
                    <button className='b5' onClick={verificarLogin}>Entrar</button>
            </div>
            <p>{msg}</p>
        </div>
    )
}