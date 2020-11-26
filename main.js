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

//
counter = 0;
output = '';

while (counter < 4) {
    output += ' ';
    counter += 1;
}
output += '**';
console.log(output);

//
counter = 0;
output = '';

while (counter < 3) {
    output += ' ';
    counter += 1;
}
output += '***';
console.log(output);


console.log('-------------');
console.log('TASK:');
console.log('*');
console.log('*');
console.log('*');

console.log('OUTPUT:');
counter = 0;
output = '*';

while (counter < 3) {
    console.log(output);
    counter +=  1;
}

console.log('-------------');
console.log('TASK:');
console.log('*');
console.log('**');
console.log('***');

console.log('OUTPUT:');

counter = 0;
output = '';

while (counter < 3) {
    output += '*'
    console.log(output);
    counter +=  1;
}


console.log('-------------');
console.log('TASK:');
console.log('*');
console.log('**');
console.log('***');
console.log('****');
console.log('*****');

console.log('OUTPUT:');

counter = 0;
output = '';

while (counter < 5) {
    output += '*';
    console.log(output);
    counter += 1;
}




console.log('-------------');
console.log('TASK:');
console.log('  *');
console.log(' **');
console.log('***');

console.log('OUTPUT:');

counter = 1;
let iterationAmount = 5;
output = '';


while (counter <= iterationAmount) {
    
    let subCounter = 1;
    let spaces = '';

    while (subCounter <= iterationAmount-counter) {
        spaces += ' ';
        subCounter += 1;
    }
    output += '*';
    console.log(spaces + output);
    counter += 1;
}

let newCounter = 4

while (newCounter >= 0) {
    console.log(newCounter);
    newCounter-=1
}


output = '';
counter = 4;


while (counter >= 0) {
    
    let subCounter = 1;
    let spaces = '';

    while (subCounter <= counter) {
        spaces += ' ';
        subCounter += 1;
    }
    output += '*';
    console.log(spaces + output);
    counter -= 1;
}

/* 

console.log(output);

console.log('     *');
console.log('    ***');
console.log('   *****');
console.log('  *******');
console.log(' *********');
console.log('***********');
console.log(' *********');
console.log('  *******');
console.log('   *****');
console.log('    ***');
console.log('     *'); */