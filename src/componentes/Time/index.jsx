import { Card } from '../Card'
import './Time.css'

export const Time = (props) => {
    
    return(
        props.colaboradores.length > 0 &&
        <section className='time' style={{ backgroundColor: props.corSecundaria }} >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map( colaborador => <Card 
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    corPrimaria={props.corPrimaria}
                />)}
            </div>
        </section>
    )
}