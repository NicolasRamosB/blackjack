
export const createCartHTML = ( carta ) =>{
    const imgCarta = document.createElement('img');
        imgCarta.src = `public/assets/${ carta }.png`; 
        imgCarta.classList.add('carta');
        return imgCarta;
}