import _ from 'underscore';

import '../../style.css';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, createCartHTML, btnDisabled } from './usecases';


let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador     = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir             = document.querySelector('#btnPedir'),
      btnDetener           = document.querySelector('#btnDetener'),
      btnNuevo             = document.querySelector('#btnNuevo'),
      divCartasJugador     = document.querySelector('#jugador-cartas'),
      divCartasComputadora = document.querySelector('#computadora-cartas'),
      puntosHTML           = document.querySelectorAll('small');



deck = crearDeck( tipos, especiales);


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    const imgCarta = createCartHTML( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        btnDisabled( true )
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck  );

    } else if ( puntosJugador === 21 ) {
        btnDisabled( true )
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck  );
    }

});

btnDetener.addEventListener('click', () => {
    btnDisabled( true )
    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck  );
});

btnNuevo.addEventListener('click', () => {

    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnDisabled( false );

});
