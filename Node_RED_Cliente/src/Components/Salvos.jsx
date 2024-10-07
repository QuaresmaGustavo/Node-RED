import { useState, useEffect } from "react";
import Btn_Excluir from "./Btn_Excluir";
import '../style/Salvos.css';

export default function Salvos() {

  const [cnpj, setCnpj] = useState([])
  const [corretora, setCorretora] = useState([])

  useEffect(() => {
    const fetchCnpjData = async () => {
      try {
        const response = await fetch('https://localhost:7218/api/Corretora', {
          method: 'GET',
        })
        const data = await response.json();
        setCnpj(data.dados);
      } catch (error) {
        console.error("Erro na API", error)
      }
    }
    fetchCnpjData()
  }, [])

  useEffect(() => {
    const fetchCorretoraData = async () => {
      if (cnpj.length > 0) {
        try {
          const corretoraPromises = cnpj.map(async (c) => {
            const response = await fetch(`https://brasilapi.com.br/api/cvm/corretoras/v1/${c.cnpj}`, {
              method: 'GET',
              headers: { 'Access-Control-Allow-Origin': '*' }
            });
            return response.json();
          });
          const corretoraData = await Promise.all(corretoraPromises);
          setCorretora(corretoraData);

        } catch (error) {
          console.error("Erro ao buscar corretoras", error);
        }
      }
    };
    fetchCorretoraData();
  }, [cnpj]);

  const removerCorretora = (cnpjRemovido) => {
    setCnpj(cnpj.filter(c => c.cnpj !== cnpjRemovido));
    setCorretora(corretora.filter(c => c.cnpj !== cnpjRemovido));
  }

  return (
    <div id='container'>
      <div className='cabecalho_corretoras_salvas'>
        <h1>CORRETORAS SALVAS</h1>
      </div>
      <div className='corretoras_Salvas_container'>
        {corretora.length > 0 ? (
          <div className='lista_de_corretoras_Salvas'>
            {corretora.map((c) => (
              <div className='info_corretoras_Salvas'>
                <span className="informacao">{c.nome_social} - {c.municipio} / {c.cnpj}</span>
                  <div className='box_btn_excluir'>
                    <Btn_Excluir cnpj={c.cnpj} remover={removerCorretora}/>
                  </div>
              </div>
            ))}
          </div>
        ) : (<p>Você ainda não possui corretoras salvas</p>)}
      </div>
    </div>
  )
}