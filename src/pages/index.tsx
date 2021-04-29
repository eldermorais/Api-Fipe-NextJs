import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container } from '../styles/pages/HomeStyles';
import Head from 'next/head';

interface MarcaData {
  codigo: string;
  nome: string;
}

interface Fipe {
  AnoModelo: number;
  CodigoFipe: string;
  Combustivel: string;
  Marca: string;
  MesReferencia: string;
  Modelo: string;
  SiglaCombustivel: string;
  TipoVeiculo: number;
  Valor: string;
}

export default function Home() {
  const [veiculos, setVeiculos] = useState('');
  const [resVeiculos, setResVeiculos] = useState<MarcaData[]>([]);

  const [marcas, setMarcas] = useState('');
  const [resMarcas, setResMarcas] = useState<MarcaData[]>([]);

  const [modelos, setModelos] = useState('');
  const [resModelos, setResModelos] = useState<MarcaData[]>([]);

  const [anos, setAnos] = useState('');
  const [resAnos, setResAnos] = useState<Fipe>();

  useEffect(() => {
    async function getVeiculos() {
      if (veiculos == '') {
        return;
      }
      const response = await api.get(
        `https://parallelum.com.br/fipe/api/v1/${veiculos}/marcas`,
      );
      setResVeiculos(response.data);
      setResMarcas([]);
      setResModelos([]);
    }

    getVeiculos();
  }, [veiculos]);

  useEffect(() => {
    async function getAnos() {
      if (anos == '') {
        return;
      }
      const response = await api.get(
        `https://parallelum.com.br/fipe/api/v1/${veiculos}/marcas/${marcas}/modelos/${modelos}/anos/${anos}`,
      );
      setResAnos(response.data);
    }
    getAnos();
  }, [anos]);

  useEffect(() => {
    async function getModelos() {
      if (modelos == '') {
        return;
      }
      const response = await api.get(
        `https://parallelum.com.br/fipe/api/v1/${veiculos}/marcas/${marcas}/modelos/${modelos}/anos`,
      );
      setResModelos(response.data);
    }
    getModelos();
  }, [modelos]);

  useEffect(() => {
    async function getMarcas() {
      if (marcas == '') {
        return;
      }
      const response = await api.get(
        `https://parallelum.com.br/fipe/api/v1/${veiculos}/marcas/${marcas}/modelos`,
      );
      setResMarcas(response.data.modelos);
      setResModelos([]);
    }
    getMarcas();
  }, [marcas]);

  return (
    <Container>
      <Head>
        <title>ConsulteFipe</title>
      </Head>
      <h1>Tabela Fipe</h1>
      <p>Carros, Motos e Caminhões</p>
      <h3>
        Saiba quanto vale seu veículo novo,
        <br /> seminovo ou usado na Tabela FIPE
      </h3>
      <div>
        <select onChange={(e) => setVeiculos(e.target.value)} value={veiculos}>
          <option value="">Selecione o veículo</option>
          <option value="carros">Carro</option>
          <option value="motos">Moto</option>
          <option value="caminhoes">Caminhão</option>
        </select>
      </div>

      <div>
        <select
          name="marca"
          id="marca"
          onChange={(e) => setMarcas(e.target.value)}
          value={marcas}
          disabled={!resVeiculos.length}
        >
          <option value="">Selecione a marca</option>

          {resVeiculos.map((marca: MarcaData) => (
            <option key={marca.codigo} value={marca.codigo}>
              {marca.nome}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          name="modelo"
          id="modelo"
          onChange={(e) => setModelos(e.target.value)}
          value={modelos}
          disabled={!resMarcas.length}
        >
          <option value="">Selecione o modelo</option>

          {resMarcas.map((modelo: MarcaData) => (
            <option key={modelo.codigo} value={modelo.codigo}>
              {modelo.nome}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          name="ano"
          id="ano"
          onChange={(e) => setAnos(e.target.value)}
          value={anos}
          disabled={!resModelos.length}
        >
          <option value="">Selecione um Ano</option>

          {resModelos.map((ano: MarcaData) => (
            <option key={ano.codigo} value={ano.codigo}>
              {ano.nome}
            </option>
          ))}
        </select>
      </div>

      {!!resAnos && (
        <div>
          <h2>{`Tabela Fipe: ${resAnos.Modelo}`}</h2>
          <h2>{`Valor médio: ${resAnos.Valor}`}</h2>
        </div>
      )}
    </Container>
  );
}
