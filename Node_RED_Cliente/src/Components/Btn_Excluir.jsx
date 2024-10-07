import { useState } from 'react';
import '../style/Btn_Excluir.css'
import Notificacao from './Notificacao';

export default function Btn_Excluir({cnpj, remover}) {

    const [mensagem, setMensagem] = useState('');

    const RemoverCorretora = async () => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://localhost:7218/api/Corretora?cnpj=${cnpj}`, {
                    method: 'DELETE',
                })
                if (response.ok) {
                    const data = await response.json();
                    remover(cnpj);
                    setMensagem(data.mensagem)
                }
                else {
                    setMensagem('Falha ao excluir corretora.');
                }
            } catch (error) {
                console.error("Erro na API", error)
            }
        }
        fetchData()
    }

    return (
        <>
            <button type='button' className='btn_excluir' onClick={RemoverCorretora}>
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
            {mensagem ? (<Notificacao mensagem={mensagem}/>) : ('') }
        </>
    )
}