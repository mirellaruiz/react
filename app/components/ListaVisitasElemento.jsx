import React from 'react';
import { Button} from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

export default class ListaVisitasElemento extends React.Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }
    click() {
        this.props.visitasClick(this.props.visita);
    }
    render() {
        let date = this.props.visita.plannedFor.split('T').shift().split('-').reverse().join('/')
        return (
            <Button block bsSize="small" bsStyle= "info" onClick = {this.click} active>
                <h5><Glyphicon glyph="briefcase"/> Vendedor: {this.props.visita.Salesman.fullname} </h5>
                <h5><Glyphicon glyph="shopping-cart"/> Cliente: {this.props.visita.Customer.name} </h5>
                <h5><Glyphicon glyph="calendar"/> Fecha: {date} </h5>
            </Button>);
    }
}
