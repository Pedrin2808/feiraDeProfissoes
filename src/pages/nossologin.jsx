import { useState } from "react"
import "./login2.scss"
import { useNavigate } from "react-router";

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
    <div>
      <div className="adjus">
        <img src="/src/assets/images/feiradep.png" alt="Logo" />
      </div>

      <div className="fundo2">
        <h1 className="tt">Login</h1>

        <div className="ajust">
          <label className="esquerda">Usuário</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <label className="esquerda2">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
<br />
          <button className="b5" onClick={verificarLoginOculto}>
            Entrar
          </button>
          <br />

          <p className="mensagem">{msg}</p> 
        </div>
      </div>
    </div>
  )
}