export default function Btn_Excluir({cnpj, remover}) {

    const RemoverCorretora = async () => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://localhost:7218/api/Corretora?cnpj=${cnpj}`, {
                    method: 'DELETE',
                })
                if (response.ok) {
                    remover(cnpj)
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

        </>
    )
}