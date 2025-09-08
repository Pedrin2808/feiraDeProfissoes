import{useState} from 'react'
import {Link} from 'react-router'
import './login.scss'
import { FaUser, FaLock } from "react-icons/fa"; 
import { useNavigate } from "react-router";

export default function login(){
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [msg, setMsg]= useState("")
    const [tipoMsg, setTipoMsg] = useState('');
    const navigate = useNavigate();

    async function verificarLogin() {
        if (usuario && senha) {
            setMsg("Curso vinculado com sucesso!");
            setTipoMsg("success");
        }

        if(!usuario && !senha) {
            setMsg("Usuário e senha são obrigatórios");
            setTipoMsg("error");
            return;
        }
        if(!usuario) {
            setMsg("Usuário é obrigatório");
            setTipoMsg("error");
            return;
        }if(!senha) {
            setMsg("Senha é obrigatória");
            setTipoMsg("error");
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
        navigate("/buscar")
    }
}

    return(
        <div className='login-container'>
            {msg && <p className={`alert ${tipoMsg}`}>{msg}</p>}
        <div className='login-card'>
            <h1 className='titulo'>Login</h1>
 <label className="input-label">
  <FaUser className="icon" />
  Usuário
</label>                    
<input id='usuario-input' 
value={usuario} 
onChange = {(e)=> setUsuario(e.target.value)}/>
<label className="input-label">
  <FaLock className="icon" />
  Senha
</label>                    
<input id='senha-input'
 value={senha} 
 onChange = {(e)=> setSenha(e.target.value)}/>
 <button className='button' onClick={verificarLogin}>
          <FaLock className="icon" /> LOGIN
        </button>            
                </div>
        </div>
    )
}