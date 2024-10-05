import { useState, useEffect } from "react";
import '../style/Salvos.css';

export default function Salvos() {

    const [corretora, setCorretora] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://brasilapi.com.br/api/cvm/corretoras/v1', {
            method: 'GET',
          })
          const data = await response.json();
          setCorretora(data);
        } catch (error) {
          console.error("Erro na API", error)
        }
      }
      fetchData()
    }, [])
  
    return (
      <div id='container'>
        <div className='cabecalho_corretoras_salvas'>
          <h1>CORRETORAS SALVAS</h1>
        </div>
        <div className='corretoras_Salvas_container'>
          {corretora ? (
            <div className='lista_de_corretoras_Salvas'>
              {corretora.map((c) => (
                <div className='info_corretoras_Salvas'>
                  {c.nome_social} - {c.municipio} / {c.cnpj}
                </div>
              ))}
            </div>
          ) : (<li>Você ainda não possui corretoras salvas</li>)}
        </div>
      </div>
    )
  }