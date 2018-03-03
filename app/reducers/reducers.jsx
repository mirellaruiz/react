import { combineReducers } from 'redux';
import indiceReducer from './indiceReducer';
import visitasReducer from './visitasReducer';

const GlobalState = combineReducers({
    indice: indiceReducer,
    visitas: visitasReducer
});
export default GlobalState;
