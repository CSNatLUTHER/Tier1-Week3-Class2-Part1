/// THIS IS AN OVERVIEW OF OBJECTS

// Our first object (object literal)
let testCard = {
    face: 'Ace',
    suit: 'Hearts',
    value: [1, 14],
    shown: false
} // end testCard
console.log( 'The testCard created was', testCard );

// Create all the hearts with a loop
let deck = []; 

function createSuit( suitToCreate ){
     console.log( 'in createSuit:', suitToCreate);
     // us loop to create all cards in suit
     for( let i=1; i<14; i++){
        let cardFace;
         let cardValue = [ i ];
        if( i === 1 ){
            cardFace = "Ace";
            cardValue.push ( 14 );
         }
        else if( i === 11 ){
            cardFace = 'Jack';
        }
        else if( i === 12 ){
            cardFace = 'Queen';
        }
        else if( i === 13 ){
            cardFace = 'King';
        }
        else{
            cardFace = i.toString();
        }
        let newCard = {
        face: cardFace,
        values: cardValue,
        suit: suitToCreate, 
        shown: false //default value ("hard coded");
        }
        deck.push( newCard );
     } // end for loop
}

function createDeck(){
    const suits = [ 'Spades', 'Hearts', 'Clubs', 'Diamonds']
for( let i=0; i<suits.length; i++){
    createSuit( suits[i] );
}
console.log (deck);

} // end createDeck

createDeck();