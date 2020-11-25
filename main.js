console.log('Iterations');


let counter;
/*
If the condition is not valid, does not work.
Works again and again while condition is valid.
Like ticket control before than taking a train on.
*/


//Task: Print out to console numbers between 5-10
counter = 5;
while (counter <=10) {
    console.log(counter);
    counter += 1;
}
console.log('Hop!', counter)
counter = 1
while (counter <= 6) {
    console.log(counter + 4);
    counter += 1;
}

/* 
Even if the condition is not valid, works once.
Works again and again while condition is valid.
Like ticket control after than taking a train on.
 */

counter = 100;
do {
    console.log(counter);
    counter += 1;
} while (counter <= 10);


//console.log('     *');


counter = 0;
let output = '';

while (counter < 5) {
    output += ' ';
    counter += 1;
}

output += '*';


console.log(output);

console.log('     *');
console.log('    ***');
console.log('   *****');
console.log('  *******');
console.log(' *********');
console.log('***********');


