// REGLAS DEL JUEGO
// http://www.casino.es/blackjack/como-jugar-blackjack/

//Los comentarios para hacer el seguimiento de los procesos están diseñados principalmente para usar la consola de Chrome

// Crupier y jugador
// Se reparten 2 cartas para el jugador y una para el crupier, si no llega a 21 le preguntas al jugador si quiere seguir o se planta. Y tu como crupier hacer los mismo.
/*
- generar cartas (2 - 9 - J Q K A) / barajar
- Barajar
- Repartir cartas
- comprobar Puntuación
A = 1/11 (Si estoy por menos de 10 vale 11 y si estas por más de 10 entonces vale 1)
*/

// Generar baraja
// ['1C', '5P', '7T' .....]

/**
 * ####################################
 * New refactor based on this codepen
 * 
 * https://codepen.io/Clowerweb/pen/cdDqA
 * ####################################
 * 
 */

class Card{

    rank;
    stick;

    constructor(Rank,Stick){
        this.rank = Rank;
        this.stick = Stick;
    }
}

class Deck {

    RANKS;
    STICKS;
    
    constructor(Ranks, Sticks){
        this.RANKS = Ranks
        this.STICKS = Sticks
    }

    getValue(card){
        let rank = card.rank;
        let value = 0;
    
        if (rank === 'A'){
            value = 11;
        }else if (rank === 'J'){
            value = 10;
        }else if (rank === 'Q'){
            value = 10;
        }else if (rank === 'K'){
            value = 10;
        }else{
            value = parseInt(rank);
        }
    
    return value;
    }

    // This can be understand like factory method
    createDeck(){
        let deck = [];

        for (let i = 0; i < this.RANKS.length; i++) {
            for (let j = 0; j < this.STICKS.length; j++){
                let card = new Card(this.RANKS[i],this.STICKS[j]);
                deck.push({
                    card,
                    'value': this.getValue(card)
                });
            }
        }
        return deck;
    };
};

pokerRank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
pokerSticks = ["C", "P", "R", "T"]; 

const PockerDeck = new Deck(pokerRank,pokerSticks)

const gameDeck = PockerDeck.createDeck()

console.log("DECK\n")
console.log(gameDeck)
console.log("SOME CARD\n")
console.log(gameDeck[1].card)
console.log("\n")