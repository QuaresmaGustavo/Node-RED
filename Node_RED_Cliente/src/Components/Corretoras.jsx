import { useState, useEffect } from 'react'
import '../style/Corretoras.css'

function App() {

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
              <li className='info_corretora'>
                {c.nome_social} - {c.municipio} / {c.cnpj}
              </li>
            ))}
          </ul>
        ) : ('')}
      </div>
    </div>
  )
}

export default App
