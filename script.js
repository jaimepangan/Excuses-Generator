//excuses generator

const excuses = [
    'I have food poisoning',
    'I already made other commitments',
    'I have no money',
    "My mum didn't allow me"
]

let randomExcuse = excuses[Math.floor(Math.random() * 4)];

console.log (randomExcuse);

//Test
//console.log (excuses);