import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class CollabsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            age: '',
            skill: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputAge = async event => {
        const age = event.target.validity.valid
            ? event.target.value
            : this.state.age

        this.setState({ age })
    }

    handleChangeInputSkill = async event => {
        const skill = event.target.value
        this.setState({ skill })
    }

    handleUpdateCollab = async () => {
        const { id, name, age, skill } = this.state
        const arraySkill = skill.split('/')
        const payload = { name, age, skill: arraySkill }

        await api.updateCollabById(id, payload).then(res => {
            window.alert(`Collab updated successfully`)
            this.setState({
                name: '',
                age: '',
                skill: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const collab = await api.getCollabById(id)

        this.setState({
            name: collab.data.data.name,
            age: collab.data.data.age,
            skill: collab.data.data.skill.join('/'),
        })
    }

    render() {
        const { name, age, skill } = this.state
        return (
            <Wrapper>
                <Title>Create Collab</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Age: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="1"
                    max="99"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={age}
                    onChange={this.handleChangeInputAge}
                />

                <Label>Skill: </Label>
                <InputText
                    type="text"
                    value={skill}
                    onChange={this.handleChangeInputSkill}
                />

                <Button onClick={this.handleUpdateCollab}>Update Collab</Button>
                <CancelButton href={'/collabs/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default CollabsUpdate
