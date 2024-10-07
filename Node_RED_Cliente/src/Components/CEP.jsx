import { useState, useEffect } from "react";
import '../style/Cep.css'

export default function BarraDePesquisa() {

    const [informacao, setInformacao] = useState(null);
    const [cep, setCEP] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (cep.length === 8) {
                try {
                    const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`, {
                        method: 'GET',
                    });
                    const data = await response.json();
                    setInformacao(data);
                } catch (error) {
                    console.error("Erro na API", error);
                }
            }
        };
        fetchData();
    }, [cep]);

    return (
        <div id="cep_container">
            <div id="cep_box">
                <div className="cabecalho">
                    <h2 className="titulo">Pesquisar um CEP</h2>
                    <input
                        type="text"
                        id="barra_de_pesquisa"
                        onChange={(e) => setCEP(e.target.value)}
                        maxLength={8}
                        placeholder="Digite um CEP"
                    />
                </div>
                <div className="cep">
                    {informacao ? (
                        <div>
                            <h1 className="cabecalho_cep"> {informacao.city} - {informacao.state} </h1>
                            <p>{informacao.street}, {informacao.neighborhood}</p>
                        </div>
                    ) : (
                        <p className="mensagem_aviso">Informe um CEP válido para visualizar os dados.</p>
                    )}
                </div>
            </div>
        </div>
    );
}