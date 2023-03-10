import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor);
    }

    let valor = ""
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange= {aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
};

export default CampoTexto;
