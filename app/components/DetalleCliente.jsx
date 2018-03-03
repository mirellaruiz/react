
import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class DetalleCliente extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li><Glyphicon glyph="user"/>            {this.props.visits[this.props.indice].Customer.name}</li>
                    <li><Glyphicon glyph="tags"/>            {this.props.visits[this.props.indice].Customer.code}</li>
                    <li><Glyphicon glyph="earphone"/>            {this.props.visits[this.props.indice].Customer.phone1}</li>
                    <li><Glyphicon glyph="home"/>            {this.props.visits[this.props.indice].Customer.address1}</li>
                    <li><Glyphicon glyph="envelope"/>            {this.props.visits[this.props.indice].Customer.email1}</li>
                </ul>
            </div>

        );
    }
}
