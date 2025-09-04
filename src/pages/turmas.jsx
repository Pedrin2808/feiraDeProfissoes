import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './turmas.scss';

export default function Turmas() {
  const [usuario, setUsuario] = useState('');
  const [cursoEscolhido, setCursoEscolhido] = useState('');
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
      alert("Selecione um curso antes de continuar.");
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
        alert("Curso vinculado com sucesso!");
        navigate('/qr');
      } else {
        alert("Erro ao vincular curso.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  }

  return (
    <div>
      <div className='adjus'>
        <img src="/src/assets/images/feiradep.png" alt="Logo" />
      </div>

      <div className='fundo2'>
        <h1 className='tt'>Salas</h1>
        <div className='ajust'>
          <label className='esquerda' htmlFor='input-turmas'>Selecione</label>
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

          <button className='b5' onClick={vincularCurso}>Entrar</button>
        </div>
      </div>
    </div>
  );
}
