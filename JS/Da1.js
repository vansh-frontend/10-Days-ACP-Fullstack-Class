const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, // fixed typo here
});

rl.question('Enter a name: ', (name) => {
    console.log("Uppercase name:", name.toUpperCase()); // fixed case typo
    rl.close(); // correctly using rl object
});
