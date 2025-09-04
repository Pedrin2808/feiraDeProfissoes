import { useState } from 'react';
import { Link } from 'react-router';
import './buscv.scss';

// Formata o CPF com pontos e traço
function formatarCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14);
}

// Remove pontos, traços, espaços, etc
function limparCPF(cpf) {
  return cpf.replace(/\D/g, '');
}

export default function Buscar() {
  const [ncpf, setNcpf] = useState('');
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');

  async function buscarPessoa() {
    setErro('');
    setDados(null);

    const cpfLimpo = limparCPF(ncpf);

    if (cpfLimpo.length !== 11) {
      setErro('CPF inválido. Digite os 11 números.');
      return;
    }

    try {
      const resp = await fetch(`http://localhost:5010/buscarv/${cpfLimpo}`);

      if (!resp.ok) {
        const erroData = await resp.json();
        setErro(erroData.mensagem || 'Erro ao buscar visitante');
        return;
      }

      const data = await resp.json();
      setDados(data);

    } catch (err) {
      setErro('Erro ao buscar visitante. Verifique a conexão com o servidor.');
    }
  }

  return (
    <div className="fundo">
      <h1 className="tt">Buscar Visitante</h1>

      <div className="ajust">
        <label className="esquerda">CPF</label>
        <input
          value={ncpf}
          onChange={(e) => setNcpf(formatarCPF(e.target.value))}
          placeholder="Digite o CPF"
        />
        <button className="b5" onClick={buscarPessoa}>Buscar</button>
      </div>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {dados && (
        <section className="forms">
          <div>
            <label>Nome</label>
            <input value={dados.nome} readOnly />

            <label>CPF</label>
            <input value={formatarCPF(dados.cpf)} readOnly />
          </div>
          <div>
            <Link to={'/vincular'}><button>Vincular</button></Link> 
          </div>
        </section>
      )}
    </div>
  );
}
