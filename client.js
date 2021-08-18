console.log( 'js' )

/// THIS IS AN OVERVIEW OF OBJECTS

// Our first object (object literal)
let testCard = {
    face: 'Ace',
    suit: 'Hearts',
    value: [1, 14],
    shown: false
} // end testCard

// Create all the hearts with a loop
function createSuit( suitToCreate ){
     console.log( 'in createSuit:', suitToCreate);
     // us loop to create all cards in suit
     for( let i=1; i<14; i++){
         let cardFace;
        if( i === 1 ){
            cardFace = "Ace";
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
        values: [ i ],
        suit: suitToCreate, 
        shown: false //default value ("hard coded")
        }
        console.log( 'new card:', newCard );
     } // end for loop
}
createSuit ( 'Hearts');