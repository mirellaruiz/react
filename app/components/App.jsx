import React from 'react';
import ListaVisitas from "./ListaVisitas.jsx";
import Detalles from "./Detalles.jsx";
import './../assets/scss/main.scss';
import { showDetails, putVisits} from '../reducers/actions';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
        /* no se pone visit en es estado entre corchetes pq si no es como una key*/
        this.appClick = this.appClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {

/* fetch no nos da los resultados inmediatamente, por lo que hay que hacer una promesa
con then. Dentro de then se ejecuta la funcion o callback, pero hay que hacer un cambio de ocntexto
pq dentro de esta funcion el this se refiere a ella y no al contexto del componente de react
Las opciones son:
1. Haz bind de this en las funciones de callback
   .then(function(response){...}.bind(this)).then(function(data){...}.bind(this))

o mejor
2. Utiliza las arrow functions de ES6 (el Javascript más moderno), que
mantienen el contexto de this.
  .then((response) =>{ ...  }).then((data) => { ... });*/
        let fecha = this.getParameterByName('dateafter');
        if (fecha) {
            var url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=c15ea7874b00c73ebb16&dateafter=" + fecha;
        }
        else {
            var url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=c15ea7874b00c73ebb16";
        }
        fetch(url)
            .then((response)=> {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data)=> {
                console.log(data);
                this.props.dispatch(putVisits(data));
            });

    }
    getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    appClick(indice) {
        this.props.dispatch(showDetails(indice));
    }
    render() {
        return (
        <Grid>
            <Row className="show-grid">

                <Col sm={6} md={6} id="leftCol">
                <ListaVisitas visits={this.props.visitas} appClick={this.appClick}/>
                </Col>

                <Col sm={6} md={6}>
          <Detalles visits={this.props.visitas} indice={this.props.indice}/>
                </Col>
            </Row>
        </Grid>

        );
    }

}

function mapStateToProps(state) {
    return{
        visitas: state.visitas,
        indice: state.indice
    };
}

export default connect(mapStateToProps)(App);
