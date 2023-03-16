import { useState } from 'react'
import Button from '../Button'
import FieldText from '../FieldText'
import DropdownList from '../DropdownList'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.whenCollaboratorRegistration({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={whenSave}>
                <h2>Fill in the data to create the collaborator's card</h2>
                <FieldText 
                    required={true}
                    label="Name"
                    placeholder="Type your name" 
                    valor={name}
                    whenChanged={valor => setName(valor)}
                />
                <FieldText
                    required={true}
                    label="Position"
                    placeholder="Type your position" 
                    valor={position}
                    whenChanged={valor => setPosition(valor)}
                />
                <FieldText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={image}
                    whenChanged={valor => setImagem(valor)}
                />
                <DropdownList
                    required={true}
                    label="Time" 
                    itens={props.teams}
                    valor={team}
                    whenChanged={valor => setTeam(valor)}
                />
                <Button>
                    Creat Card
                </Button>
            </form>
        </section>
    )
}

export default Form