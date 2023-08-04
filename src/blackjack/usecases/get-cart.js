


// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {
    if (!deck || deck.length === 0) {
        throw new Error ('No hay cartas');
    }
    const carta = deck.pop();
    return carta;
}