import './FieldText.css'

const FieldText = (props) => {

    const placeholderModified = `${props.placeholder}...` 

    const whenTyped = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
        <div className="field-text">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={whenTyped} required={props.obrigatorio} placeholder={placeholderModified}/>
        </div>
    )
}

export default FieldText