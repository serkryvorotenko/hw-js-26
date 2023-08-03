import React from "react";

export class NewContact extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            surName: '',
            phone: ''
        }
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    onSurNameChange = (e) => {
        this.setState({surName: e.target.value})
    }
    onPhoneChange = (e) => {
        this.setState({phone: e.target.value})
    }
    addNewUser = () => {
        if (this.state.name.length === 0) return
        if (this.state.surName.length === 0) return
        if (this.state.phone.length === 0) return
        this.props.onAdd(this.state.name, this.state.surName, this.state.phone)
        this.props.onCancel()
    }

    render() {
        return <div>
            <input placeholder="Имя" type="text" value={this.state.name} onChange={this.onNameChange}/>
            <input placeholder="Фамилия" type="text" value={this.state.surName} onChange={this.onSurNameChange}/>
            <input placeholder="Телефон" type="number" value={this.state.phone} onChange={this.onPhoneChange}/>
            <button onClick={this.addNewUser}>Coхранить</button>
            <button onClick={this.props.onCancel}>Отменить</button>
        </div>


    }
}
