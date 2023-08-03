import React from "react";
import {Contact} from "./Contact.jsx";
import {NewContact} from "./NewContact.jsx";


export class App extends React.Component {
    constructor() {
        super();

        this.state = {
            contacts: [],
            showNewContact: false
        }

    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                this.setState({contacts: response})
            })
    }

    deleteContact(id) {
        this.setState({
            contacts: this.state.contacts.filter((contact) => {
                return contact.id !== id
            })
        })
    }

    showNewContact = () => {
        this.setState({showNewContact: !this.state.showNewContact})
    }

    addNewContact = (name, surname, phone) => {
        this.setState({
            contacts: [...this.state.contacts, {
                name: name,
                username: surname,
                phone: phone,
                id: Math.random()
            }]
        })
    }


    render() {
        return (
            <main>
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Телефон</th>
                        <th>(Удалить)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.contacts.map((contact) => {
                        return <Contact
                            name={contact.name}
                            surName={contact.username}
                            phone={contact.phone}
                            onDelete={() => this.deleteContact(contact.id)}
                        />
                    })}
                    </tbody>
                </table>
                <button onClick={this.showNewContact}>
                    {this.state.showNewContact ? 'скрыть форму' : 'показать форму'}
                </button>
                {this.state.showNewContact ?
                    <NewContact onCancel={this.showNewContact} onAdd={this.addNewContact}/> : ""}
            </main>

        )
    }
}
