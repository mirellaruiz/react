
import React from 'react';
import { Image } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

export default class DetalleVendedor extends React.Component {
    render() {
        return(
            <div>
                <h5><Glyphicon glyph="user"/> {this.props.visits[this.props.indice].Salesman.fullname}</h5>
                <h5>{this.props.visits[this.props.indice].Salesman.Photo ? <Image src={this.props.visits[this.props.indice].Salesman.Photo.url}/> : null}</h5>
            </div>

        );
    }
}
