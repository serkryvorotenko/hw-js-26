import React from "react";

export class Contact extends React.Component {

    render() {
        return <tr>
            <td>{this.props.name}</td>
            <td>{this.props.surName}</td>
            <td>{this.props.phone}</td>
            <td><button onClick={this.props.onDelete}>Удалить</button></td>
        </tr>
    }
}