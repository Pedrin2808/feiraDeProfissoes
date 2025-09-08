import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './turmas.scss';
import { FaLock } from "react-icons/fa";

export default function Turmas() {
  const [usuario, setUsuario] = useState('');
  const [cursoEscolhido, setCursoEscolhido] = useState('');
  const [msg, setMsg] = useState('');
  const [tipoMsg, setTipoMsg] = useState('');
  const navigate = useNavigate();

  const turmas = [
    'Eletromecânica',
    'Eletrotécnica',
    'Administração',
    'Informática',
    'Comunicação Visual',
    'Inglês'
  ];

  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    console.log("Usuário logado:", user);
    setUsuario(user || '');
  }, []);

  async function vincularCurso() {
    if (!cursoEscolhido) {
      setMsg("Selecione um curso antes de continuar.");
      setTipoMsg("error");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:5010/vincularCurso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: usuario,
          curso: cursoEscolhido
        })
      });

      const dados = await resposta.json();

      if (dados.ok) {
        setMsg("Curso vinculado com sucesso!");
        setTipoMsg("success");
        navigate('/qr');
      } else {
          ("Erro ao vincular curso.");
        setTipoMsg("error");
        }
    } catch (error) {
      console.error(error);
      setMsg("Erro ao conectar com o servidor.");
      setTipoMsg("error");

    }
  }

  return (

    <div className='turma-container'>
      {msg && <p className={`alert ${tipoMsg}`}>{msg}</p>}
      <div className='turma-card'>
        <div>
          <img src="/src/assets/images/feiradep.png" alt="Logo" />
        </div>

        <h1 className='titulo'>Salas</h1>
        <label className='input-label'>Selecione</label>
        <input
          type="text"
          id="input-turmas"
          list="lista-turmas"
          value={cursoEscolhido}
          onChange={(e) => setCursoEscolhido(e.target.value)}
        />

        <datalist id="lista-turmas">
          {turmas.map((turma, index) => (
            <option key={index} value={turma} />
          ))}
        </datalist>

        <button className='button' onClick={vincularCurso}>
          <FaLock className="icon" /> LOGIN
        </button>
      </div>
    </div>
  );
}
