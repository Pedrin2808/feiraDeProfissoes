import { useState } from 'react';
import { Link } from 'react-router';
import { FaSearch, FaIdCard, FaLock } from 'react-icons/fa';
import './buscv.scss';

// Função para formatar o CPF
function formatarCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14);
}

// Função para limpar o CPF
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
    <div className="buscar-container">
      <div className="buscar-card">
        <h1 className="titulo">Buscar Visitante</h1>

        <label className="input-label">
          <FaIdCard className="icon" />
          CPF
        </label>
        <input
          value={ncpf}
          onChange={(e) => setNcpf(formatarCPF(e.target.value))}
          placeholder="Digite o CPF"
        />

        <button className="button" onClick={buscarPessoa}>
          <FaSearch className="icon" /> Buscar
        </button>

        {erro && <p className="msg">{erro}</p>}

        {dados && (
          <section className="resultado">
            <label className="input-label">Nome</label>
            <input value={dados.nome} readOnly />

            <label className="input-label">CPF</label>
            <input value={formatarCPF(dados.cpf)} readOnly />

            <Link to="/vincular">
              <button className="button">
                <FaLock className="icon" /> Vincular
              </button>
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
