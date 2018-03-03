function visitasReducer(state = [], action) {
    switch (action.type) {
    case 'PUT_VISITS':
        return action.visitas;
    default:
        return state;
    }
}
export default visitasReducer;
