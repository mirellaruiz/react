
import React from 'react';
import DetalleObjetivoElemento from "./DetalleObjetivoElemento";

export default class DetalleObjetivo extends React.Component {
    render() {
        let objetivo = this.props.visits[this.props.indice].Targets.map((objetivo, indice) => {
            return <DetalleObjetivoElemento indice={indice + 1} objetivo={objetivo}/>;
        });
        return(
            <ul key="ListaObjetivos">
                {objetivo}
            </ul>

        );
    }
}
