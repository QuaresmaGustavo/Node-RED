import { useState, useEffect } from 'react';
import '../style/Notificacao.css'

export default function Notificacao({mensagem}) {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        if (mensagem) {
            setVisivel(true);
            const tempo = setTimeout(() => {
                setVisivel(false);
            }, 3000); 

            return () => clearTimeout(tempo);
        }
    }, [mensagem, 3000]);

    if (!visivel) return null;

    return(
        <div className="notificacao">
            {mensagem}
        </div>
    )
}