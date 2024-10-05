export default function Btn_Salvar({ Cnpj }) {

    const SalvarCorretora = () => {
        const fetchData = async () => {
            try {
                await fetch('https://localhost:7218/api/Corretora', {
                    method: 'POST',
                    headers: { 'content-Type': 'application/json', },
                    body: JSON.stringify({
                        cnpj: Cnpj
                    }),
                })
            } catch (error) {
                console.error("Erro na API", error)
            }
        }
        fetchData()
    }

    return (
        <>
            <button type='button' onClick={SalvarCorretora}>
                <span class="material-symbols-outlined">
                    bookmark
                </span>
            </button>

        </>
    )
}