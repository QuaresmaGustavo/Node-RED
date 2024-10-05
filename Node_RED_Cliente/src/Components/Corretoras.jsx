import { useState, useEffect } from 'react'
import Btn_Salvar from './Btn_Salvar'
import '../style/Corretoras.css'

export default function Corretoras() {

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
      <div className='cabecalho'>
        <h1>CORRETORAS</h1>
        <span>
          Abaixo, você encontrará um campo contendo informações sobre o nome social, cidade e CNPJ de todas as corretoras do Brasil.
        </span>
      </div>
      <div className='corretoras_container'>
        {corretora ? (
          <ul className='lista_de_corretoras'>
            {corretora.map((c) => (
              <li key={c.cnpj} className='info_corretora'>
                <span className='informacao'>{c.nome_social} - {c.municipio} / {c.cnpj}</span>
                <div className='box_btn_salvar'>
                  <Btn_Salvar Cnpj={c.cnpj}/>
                </div>
              </li>
            ))}
          </ul>
        ) : ('')}
      </div>
    </div>
  )
}