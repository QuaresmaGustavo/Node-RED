import '../style/sidenav.css'

export default function Home() {
    return (
        <div className="sidebar">
            <h1 className='menu'>MENU</h1>
            <nav className='navegacao'>
                <a href="/" className='paginas'>CORRETORAS</a>
                <a href="cep" className='paginas'>CEP</a>
                <a href="salvos" className='paginas'>SALVOS</a>
            </nav>
        </div>
    )
}