import React from 'react';
import DetalleVisita from "./DetalleVisita";
import DetalleObjetivo from "./DetalleObjetivo";
import DetalleCliente from "./DetalleCliente";
import DetalleVendedor from "./DetalleVendedor";
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button, Glyphicon } from 'react-bootstrap';

export default class Detalles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {style: "default"};
        this.clickFav = this.clickFav.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        console.log("im here");

        if (nextProps.indice === null) {
            return;
        }

        console.log(nextProps.visits[nextProps.indice].favourite);
        if (nextProps.visits[nextProps.indice].favourite === false) {
            this.setState({style: "default"});

        }
        else {
            this.setState({style: "warning"});
        }

    }

    clickFav() {
        let id = this.props.visits[this.props.indice].id;
        if(this.props.visits[this.props.indice].favourite === false) {
            var url = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + id + "?token=c15ea7874b00c73ebb16&_method=PUT";
            fetch(url)
                .then((response)=> {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    console.log("cambio ok");
                    this.props.visits[this.props.indice].favourite = true;
                    this.setState({style: "warning"});

                });
        }
        else {
            var url = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + id + "?token=c15ea7874b00c73ebb16&_method=DELETE";
            fetch(url)
                .then((response)=> {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    console.log("cambio ko");
                    this.props.visits[this.props.indice].favourite = false;
                    this.setState({style: "default"});
                });
        }

    }
    render() {
        if(this.props.indice === null) {
            return <h3>
                PULSE UNA VISITA PARA VER SUS DETALLES.
            </h3>;
        }

        return(
            <Grid>
                <Row><h2> DETALLES <Button className="fav" bsSize="small" bsStyle={this.state.style} onClick={this.clickFav} active><Glyphicon
                    glyph="star"/> FAV </Button></h2>
                </Row>
                <Row><h3> DETALLES DE LA VISITA </h3>
                    <DetalleVisita visits={this.props.visits} indice={this.props.indice}/>
                </Row>
                <Row><h3> DETALLE DE LOS OBJETIVOS </h3>
                    <DetalleObjetivo visits={this.props.visits} indice={this.props.indice}/>
                </Row>
                <Row><h3> DETALLE DEL CLIENTE </h3>
                    <DetalleCliente visits={this.props.visits} indice={this.props.indice}/>
                </Row>
                <Row><h3> DETALLE DEL VENDEDOR </h3>
                    <DetalleVendedor visits={this.props.visits} indice={this.props.indice}/>
                </Row>
            </Grid>
        );
    }
}
