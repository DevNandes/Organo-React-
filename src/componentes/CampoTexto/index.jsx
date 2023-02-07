import './CampoTexto.css'

export const CampoTexto = (props) => {

    const PlaceholderModificada = `Digite ${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{ props.label }</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={ PlaceholderModificada }/>
        </div>
    )
}