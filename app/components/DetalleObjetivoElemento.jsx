
import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class DetalleObjetivoElemento extends React.Component {
    render() {
        var cumplido = ""
        if(this.props.objetivo.success === true){
            cumplido = "SI"
        }
        else if(this.props.objetivo.success === false){
            cumplido = "NO"
        }
        else{
            cumplido = "PENDIENTE"
        }
        return(

            <ul>
                <li><h4> OBJETIVO {this.props.indice}</h4></li>
                <li><Glyphicon glyph="briefcase"/> EMPRESA:            {this.props.objetivo.Company.name} : ({this.props.objetivo.TargetType.name})</li>
                <li><Glyphicon glyph="pencil"/> NOTAS:            {this.props.objetivo.notes}</li>
                <li><Glyphicon glyph="ok"/> CUMPLIDO: {cumplido}</li>
            </ul>
        );
    }
}
