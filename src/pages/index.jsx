import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // Corrigido: 'react-router-dom' é o correto
import './index.scss';

const Temporizador = ({ dataAlvo }) => {
  const [tempoRestante, setTempoRestante] = useState({});
  const [chegou, setChegou] = useState(false);

  useEffect(() => {
    const atualizarTempo = () => {
      const agora = new Date();
      const alvo = new Date(dataAlvo);
      const diff = alvo - agora;

      if (diff <= 0) {
        setChegou(true);
        setTempoRestante({});
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      setTempoRestante({ dias, horas, minutos, segundos });
    };

    const intervalo = setInterval(atualizarTempo, 1000);
    return () => clearInterval(intervalo);
  }, [dataAlvo]);

  return (
    <div className="temporizador">
      {chegou ? (
        <h2>🎉 Chegou a data!</h2>
      ) : (
        <h2>
          ⏳ Faltam {tempoRestante.dias}d {tempoRestante.horas}h{' '}
          {tempoRestante.minutos}m {tempoRestante.segundos}s
        </h2>
      )}
    </div>
  );
};

export default function Index() {
  return (
    <body>
      <header>
        <div>
            <img src="/src/assets/images/logofrei.png" height="90px" alt="Logo" />
        </div>
        <div className='temp'>
            <Temporizador dataAlvo ="2025-09-27T00:09:00" />
        </div>
        <nav>
            <h1>Inico</h1>
            <h1>Cursos</h1>
            <h1>Informações</h1>
            <h1>Sobre</h1>
            <h1 className='botão'>Inscreva-se</h1>
        </nav>
    </header>
    <main>

    </main>
    </body>
  );
}
