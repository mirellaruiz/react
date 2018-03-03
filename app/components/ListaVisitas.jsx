import React from 'react';
import ListaVisitasElemento from "./ListaVisitasElemento";

export default class ListaVisitas extends React.Component {
    constructor(props) {
        super(props);
        this.visitasClick = this.visitasClick.bind(this);
    }
    visitasClick(visita) {
        let indice = this.props.visits.indexOf(visita);
        this.props.appClick(indice);
    }
    render() {
        let visitas = this.props.visits.map((visita, indice) => {
            return (<ListaVisitasElemento visita={visita} visitasClick={this.visitasClick}/>);
        });
        return (
            <ul>{visitas}</ul>
        );
    }

}
