import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
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
        <div>
          <h2>Começa Em:</h2>
          <div className="contador">
            <span>{tempoRestante.dias} Dias</span>
            <span>{tempoRestante.horas} Horas</span>
            <span>{tempoRestante.minutos} Min</span>
            <span>{tempoRestante.segundos} Sg</span>
          </div>
        </div>
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
            <button className='b2'>Inscreva-se</button>
        </nav>
    </header>
    <main>
      <section className='td'>
        <section className='ladoE'>
          <div className='futuro'>
            <h1 className='maior'>O Futuro está Abordo</h1>
            <h2 className='menor'>Feira de Profissões</h2>
          </div>

          <div className='arrumar'>
            <div className='msm'>
              <img src="/src/assets/images/data.png" height="16px" alt="Logo"/>
              <p>Dia 27/Setembro | Das 9h às 14h</p>
            </div>

            <div className='msm2'>
              <img src="/src/assets/images/localizacao.png" height="20px" alt="Logo"/>
              <p>Av. Cel. Octaviano de Freitas Costa, 463 - Veleiros</p>
            </div>
          </div>

          <div className='diminui'>
            <p>
              Vivencie na prática!
              <br></br>
              <br></br>
              Na nossa feira, alunos de diferentes áreas vão
              apresentar seus cursos de forma interativa,
              mostrando projetos, experiências reais e tudo
              que você precisa saber para escolher seu Futuro
              com mais confiança.
            </p>
          </div>
          <div>
            <button>
              Inscreva-se
            </button>
          </div>
        </section>
        <section>
          <img src="/src/assets/images/bigodeDoFrei.png" height="700px" alt="FREI" />
        </section>
      </section>
      <section className='bignumbers'>
        <div className='card'>
          <img src="/src/assets/images/bigN1.png" height="80px" alt="BIGn1"/>
          <h1>+3mil</h1>
         
        </div>
        <div className='card'>
          <img src="/src/assets/images/bigN2.png" height="80px" alt="BIGn2"/>
          <h1>+50mil</h1>
         
        </div>
        <div className='card'>
          <img src="/src/assets/images/bigN3.png" height="80px" alt="BIGn3"/>
          <h1>+9mil</h1>
         
        </div>
        <div className='card'>
          <img src="/src/assets/images/bigN4.png" height="80px" alt="BIGn4"/>
          <h1>+3mil</h1>
          
        </div>
        <div className='card'>
          <img src="/src/assets/images/bigN5.png" height="80px" alt="BIGn5"/>
          <h1>+12mil</h1>
          
        </div>
      </section>
      <div className='teste'>
        <p>Jovens Atendidos por DIA</p>
        <p>Alunos Formados</p>
        <p>Jovens Ineridos no Mercado</p>
        <p>Empresas Beneficiadas</p>
        <p>Famílias Beneficiadas</p>
      </div>
    </main>
    </body>
  );
}
