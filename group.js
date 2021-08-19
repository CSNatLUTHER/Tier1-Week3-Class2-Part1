let group = [];

function getPerson(){  
    // that takes in a person's first and last name
    let fName = prompt( 'First Name' );
    let lName = prompt( 'Last Name' );
    // creates and object with these
    let person = {
        firstName: fName,
        lastName: lName,
        cohort: 'Ionian'
    }
    // puts it into an array
    group.push( person );
} // end getPerson

for( let i=0; i< 4; i++){
    getPerson();
}
// display array
console.log( group );
