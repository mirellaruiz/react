function indiceReducer(state = null, action) {
    switch (action.type) {
    case 'SHOW_DETAILS':
        return action.indice;
    default:
        return state;

    }
}
export default indiceReducer;
