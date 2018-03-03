import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class DetalleVisita extends React.Component {
    render() {
        var date1 = ""
        if(this.props.visits[this.props.indice].fulfilledAt === null){
            date1 = "NO"
        }
        else {
            let dat = this.props.visits[this.props.indice].fulfilledAt.split('T').shift().split('-').reverse().join('/');
            date1 = "SI: "+dat;
        }
        let date = this.props.visits[this.props.indice].plannedFor.split('T').shift().split('-').reverse().join('/');
        return(

            <ul>
                <li><Glyphicon glyph="calendar"/> FECHA: {date}</li>
                <li><Glyphicon glyph="check"/> CUMPLIDA: {date1} </li>
                <li><Glyphicon glyph="pencil"/> NOTAS: {this.props.visits[this.props.indice].notes} </li>
            </ul>
        );
    }
}
