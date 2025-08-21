import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const logos = [
  { src: '/src/assets/images/serpro.png', alt: 'Serpro' },
  { src: '/src/assets/images/mwm.png', alt: 'MWM' },
  { src: '/src/assets/images/help.png', alt: 'Help Transportes' },
  { src: '/src/assets/images/clinear.png', alt: 'CM' },
  { src: '/src/assets/images/olymp.png', alt: 'Olymp' },
  { src: '/src/assets/images/pwi.png', alt: 'PWI' },
  { src: '/src/assets/images/aps.png', alt: 'APS' },
  { src: '/src/assets/images/mapfre.png', alt: 'MAPFRE' },
  { src: '/src/assets/images/unisa.png', alt: 'UNISA' },
  { src: '/src/assets/images/italo.png', alt: 'Italo' },
  { src: '/src/assets/images/casadamulher.png', alt: 'CMP' },
  { src: '/src/assets/images/vgrajau.png', alt: 'vGrajau' },
  { src: '/src/assets/images/reidopall.png', alt: 'rdoPallet' },
  { src: '/src/assets/images/maracatu.png', alt: 'Maracatu' },
  { src: '/src/assets/images/cidadesp.png', alt: 'Prefeitura' },
];




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

let images = [
  "/src/assets/images/adm2.png",
  "/src/assets/images/info2.png",
  "/src/assets/images/cv2.png"
];


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'A entrada é gratuita ou paga?',
      answer:'Gratuitaaaaaa',
    },
    {
      question: 'Preciso ser aluno para participar?',
      answer: 'Nãoooo.',
    },
    {
      question: 'Meus pais podem vir junto?',
      answer: 'Claroooo que sim',
    },
    {
      question: 'Preciso fazer inscrição antes ou possso chegar na hora?',
      answer: 'Essa nem eu sei',
    },
    {
      question: 'Qual é o horário e o local exato do evento?',
      answer: 'A atualizar...',
    },
    {
      question: 'Vai ter certificado de participação?',
      answer: 'Veremos...',
    },
  ];

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggle(index)}
        >
          <div className="faq-question">{item.question}</div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Index() {
  const formSectionRef = useRef(null);
  const scrollToForm = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const curso = ['ADM', 'TI', 'CV', 'Inglês', 'Eletrotecnica']; 
  const alunoo = ['Sim', 'Não']; 
  const sabendoo = ['Amigos', 'Familiares', 'Redes Sociais']; 

  const cursos = [
    {
      titulo: 'Administração',
      texto: 'Administração: o curso que abre portas. Se você gosta de liderar, planejar e resolver problemas, Administração é pra você!',
      imagem: '/src/assets/images/adm.png',
      alt: 'ImgADM',
    },
    {
      titulo: 'Informática',
      texto: 'Informática: domine a tecnologia e o mundo digital!',
      imagem: '/src/assets/images/info1.png',
      alt: 'ImgInformática',
    },
    {
      titulo: 'Comunicação Visual',
      texto: 'Comunicação Visual: transforme ideias em imagens e crie impacto com criatividade.',
      imagem: '/src/assets/images/cv.png',
      alt: 'ImgComunicação Visual',
    },
    {
      titulo: 'Eletrotécnica',
      texto: 'Eletrotécnica: domine instalações elétricas e energize seu futuro profissional',
      imagem: '/src/assets/images/eletrotec.png',
      alt: 'ImgEletrotécnica',
    },
    {
      titulo: 'Eletromecânica',
      texto: 'Eletromecânica: una eletricidade e mecânica para criar e manter sistemas inteligentes.',
      imagem: '/src/assets/images/eletromecanica.png',
      alt: 'ImgEletromecânica',
    },
    {
      titulo: 'Inglês',
      texto: 'Inglês: aprenda o idioma que conecta você ao mundo e às melhores oportunidades.',
      imagem: '/src/assets/images/ingles.png',
      alt: 'ImgInglês',
    },
  ];


  const [nome , setNome] = useState ()
  const [telefone , setTelefone] = useState ()
  const [email , setEmail] = useState ()
  const [previsao , setPrevisao] = useState ()
  const [cpf , setCpf] = useState ()
  const [cep , setCep] = useState ()
  const [interesse , setInteresse] = useState ()
  const [aluno , setAluno] = useState ()
  const [sabendo , setSabendo] = useState ()

  const [currentIndex, setCurrentIndex] = useState(0); //animação infinita

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length); //botao direita
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)//botao esquerda
  }

  return (
    <div className='body'>
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
          <button className='b2' onClick={scrollToForm}>Inscreva-se</button>
        </nav>
      </header>
      
          <main>
            <section className='gradiente1'>
              <div className='aj'>
                  <h1 className='maior'>Esforço que Transforma, e o orgulho Permanece</h1>
              </div>
              <section className='td'>
                <div className='ladoE'>
                  <div className='futuro'>
                    <h2 className='menor'>Feira de Profissões 2025</h2>
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

                  <div className='arrumar'>
                    <div className='diminui'>
                    <p className='corw'>
                    Vivencie na prática!</p>
                    <br></br>
                    <br></br>
                    <p className='negativo'>
                    Na nossa feira, alunos de diferentes áreas vão
                    apresentar seus cursos de forma interativa,
                    mostrando projetos, experiências reais e tudo
                    que você precisa saber para escolher seu Futuro
                    com mais confiança.
                    </p>
                    </div>
                    <div className='meio'>
                      <button onClick={scrollToForm} className='b'>Inscreva-se</button>
                    </div>
                  </div>
                </div>
                  
                <div className='arrumar2'>
                  <img className='heig' src="/src/assets/images/feiradep.png" height="150px" alt="FREI" />
                  <img className='inverter' src="/src/assets/images/bigodeDoFrei.png" height="700px" alt="FREI" />
                </div>
              </section>
              
              <section class="bignumbers">
                <div class="card">
                  <img src="/src/assets/images/bigN1.png" height= '90px'alt="Ícone alfabetização" />
                  <span>+3mil</span>
                  <p>Educadores Capacitados</p>
                </div>

                <div class="card">
                  <img src="/src/assets/images/bigN2.png" height= '90px'alt="Ícone professor" />
                  <span>+50mil</span>
                  <p>Alunos Formados</p>
                </div>

                <div class="card">
                  <img src="/src/assets/images/bigN3.png" height= '90px' alt="Ícone parceria" />
                  <span>+9mil</span>
                  <p>Parcerias com Empresas</p>
                </div>

                <div class="card">
                  <img src="/src/assets/images/bigN4.png" height= '90px' alt="Ícone prédio" />
                  <span>+3mil</span>
                  <p>Instituições Atendidas</p>
                </div>

                <div class="card">
                  <img src="/src/assets/images/bigN5.png" height= '90px' alt="Ícone pessoas" />
                  <span>+12mil</span>
                  <p>Jovens Atendidos por DIA</p>
                </div>
              </section>

            </section>

            <h1 className='tt2'>Cursos</h1>

            <section className='cursos'>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={40} // espaçamento entre os slides
                slidesPerView={1} // apenas 1 slide por vez
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="cursos-swiper"
              >
                {cursos.map((curso, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide-content">
                      <div className="flex">
                        <img className="img" src={curso.imagem} alt={curso.alt} />
                        <div className="text">
                          <h2 className="titulo2">{curso.titulo}</h2>
                          <p className="text2">{curso.texto}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

          <section className='gradiente'>
          <h1 className='tt'>Conheça Nossa História</h1>
          <div className='conhecahist'>
            <div className='freitext'>
              <p>
                Fundado em 1971, pelo Frei Xavier (como é carinhosamente conhecido), o Instituto Social Nossa Senhora de Fátima é uma instituição sem fins lucrativos, localizado na zona sul de São Paulo, tem sido um farol para o desenvolvimento humano e profissional de jovens a partir de 13 anos. Com duas unidades de ensino, o instituto dedica-se a capacitá-los por meio da oferta de cursos técnicos, de qualificação e livres, proporcionando oportunidades valiosas para o crescimento pessoal e profissional do ser humano. Sua trajetória é marcada pelo compromisso contínuo com impacto positivo na comunidade, a educação e o crescimento sólido da juventude.
              </p>
            </div>
            <div className='column'>
              <img className='frei1' src='/src/assets/images/frei1.png' height='250px'/>
              <img className='frei2' src='/src/assets/images/frei2.png' height='250px'/>
            </div>
          </div>
          </section>

          <h1 className='tt'>Parceiros</h1>
          <section className="carrossel-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img src={logo.src} alt={logo.alt} className="logo-parceiro"/>
              </SwiperSlide>
            ))}
          </Swiper>
          </section>
          <h1 className="tt">Dúvidas Frequentes</h1>
          <section className="faq-section">
            <div>
              <FAQ />
            </div>
            <div className='aindaCdV'>
              <p className='peq'>AINDA COM DÚVIDAS?</p>
              <p>Fale com a gente agora pelo WhatsApp ou Email e tire todas as suas dúvidas.</p>
              <div className='buts'>
                <button className='email'>Atendimento via Email</button>
                <button className='zap'>Atendimento via WhatsApp</button>
              </div>
            </div>
          </section>
          <section id='map' >
          <h1 className="tt">Local do Evento</h1>
            <section className = "maps">
              <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.877780335286!2d-46.710505823997686!3d-23.68032836597489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce502d2289a843%3A0x14406b17b30d0174!2sInstituto%20Social%20Nossa%20Senhora%20de%20F%C3%A1tima!5e0!3m2!1spt-BR!2sbr!4v1755524751181!5m2!1spt-BR!2sbr" width="90%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
          </section>
          <h1 className='tt'>Formulário</h1>
            <section ref={formSectionRef} id="forms" className='forms'>
            <div className='colorir1'>
                <div className='colorir2'>
                  <div className='oi'>
                  <div className='vertical1'>
                    <label>Nome</label>
                    <input value={nome} onChange = {(e)=> setNome(e.target.value)}/>
                    <label>Telefone</label>
                    <input value={telefone} onChange = {(e)=> setTelefone(e.target.value)}/>
                    <label>Email</label>
                    <input value={email} onChange = {(e)=> setEmail(e.target.value)}/>
                    <label>Previsão de chegada à feira</label>
                    <input value={previsao} onChange = {(e)=> setPrevisao(e.target.value)}/>
                  </div>
                  <div className='vertical1'>
                    <label>CPF</label>
                    <input value={cpf} onChange = {(e)=> setCpf(e.target.value)}/>
                    <label>CEP</label>
                    <input value={cep} onChange = {(e)=> setCep(e.target.value)}/>
                    <label  htmlFor='input-curso'>Interesse em algum curso</label>
                    <input type="text"
                    id="input-curso" 
                    list="lista-curso" value={interesse} onChange = {(e)=> setInteresse(e.target.value)}/>

          <datalist id="lista-curso"> 
            {curso.map((curso, index) => (
              <option key={index} value={curso} />
            ))}
          </datalist>
                    <label htmlFor='input-aluno'>ja foi aluno?</label>
                    <input type="text"
                    id="input-aluno" 
                    list="lista-aluno" value={aluno} onChange = {(e)=> setAluno(e.target.value)}/>

          <datalist id="lista-aluno"> 
            {alunoo.map((aluno, index) => (
              <option key={index} value={aluno} />
            ))}
          </datalist>
                  </div>
                  </div>
                  <div className='horizonte'>
                    <label htmlFor='input-sabendo'>Como ficou sabendo da feira?</label>
                    <input 
                    className='input-sabendo'
                    type="text"
                    id="input-sabendo" 
                    list="lista-sabendo" value={sabendo} onChange = {(e)=> setSabendo(e.target.value)}/>

          <datalist id="lista-sabendo"> 
            {sabendoo.map((sabendo, index) => (
              <option key={index} value={sabendo} />
            ))}
          </datalist>         
              </div>
                  <div className='vai'>
                  <button className='b4'>Confirmar Inscrição</button>
                  </div>
                </div>
            </div>
            </section>
            </main>

            <footer>
              <div className='fundope'>
                <div className='f1'>
                <img className='ajuste' src="/src/assets/images/logofrei.png" height="150px"/>
                  <div className='redes'>
                    <img src="/src/assets/images/ytb.png" height="20px"/>
                    <img src="/src/assets/images/insta.png" height="20px"/>
                    <img src="/src/assets/images/face.png" height="20px"/>
                    <img src="/src/assets/images/linked.png" height="20px"/>
                    <img src="/src/assets/images/zap.png" height="20px"/>
                  </div>
                  <div className='branco'>
                    <p>Política de Privacidade e Termos de Uso</p>
                    <p>Feito Carinhosamente Por: Pedro H, Pedro L, André, José C., Gustavo L, Gustavo P.  </p>
                    <Link className='link1' to ={'/login'}><p>Login</p></Link>
                  </div>
                </div>
              </div>
            </footer>
  </div>
  );
}