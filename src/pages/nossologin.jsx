import { useState } from "react"
import "./login2.scss"
import { useNavigate } from "react-router";
import { FaUser, FaLock } from "react-icons/fa"; 


export default function Login() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate();

  async function verificarLoginOculto() {
    try {
      // validações
      if (!usuario && !senha) {
        setMsg("Usuário e senha são obrigatórios")
        return
      }
      if (!usuario) {
        setMsg("Usuário é obrigatório")
        return
      }
      if (!senha) {
        setMsg("Senha é obrigatória")
        return
      }

      // requisição
      const response = await fetch(
        `http://localhost:5010/loginoculto/${usuario}/${senha}`
      )
      const resposta = await response.json()

      // mensagem
      setMsg(resposta.mensagem)

      if (resposta.ok) {
        navigate("/turmas")
        localStorage.setItem("usuarioLogado", usuario);
      }
    } catch (err) {
      setMsg("Erro ao conectar com o servidor: " + err.message)
    }
  }

  return (
    <div className="login2-container">
      <div className="login2-card">
        <div>
        <img src="/src/assets/images/feiradep.png" alt="Logo" />
        </div>
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
         <button className='button' onClick={verificarLoginOculto}>
                  <FaLock className="icon" /> LOGIN
                </button>            
                <p className="msg">{msg}</p>
        </div>
      </div>
  )
}