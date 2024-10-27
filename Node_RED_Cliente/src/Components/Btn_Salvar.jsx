import { useEffect, useState } from 'react'
import '../style/Btn_Salvar.css'
import Notificacao from './Notificacao';

export default function Btn_Salvar({ Cnpj }) {

    const [mensagem, setMensagem] = useState('');

    const SalvarCorretora = () => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:7218/api', {
                    method: 'POST',
                    headers: { 'content-Type': 'application/json', },
                    body: JSON.stringify({
                        cnpj: Cnpj
                    }),
                })
                if (response.ok) {
                    const data = await response.json();
                    setMensagem(data.mensagem);
                }else {
                    setMensagem('Falha ao salvar corretora.');
                }
            } catch (error) {
                console.error("Erro na API", error)
            }
        }
        fetchData()
    }

    return (
        <>
            <button type='button' className='btn_salvar' onClick={SalvarCorretora}>
                <span class="material-symbols-outlined">
                    bookmark
                </span>
            </button>
            {mensagem ? (<Notificacao mensagem={mensagem}/>) : ('') }
        </>
    )
}