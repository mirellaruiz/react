export function showDetails(indice) {
    return {
        type: 'SHOW_DETAILS',
        indice: indice,
    };
}

export function putVisits(visitas) {
    return {
        type: 'PUT_VISITS',
        visitas: visitas,
    };
}
