//excuses generator

const excuses = [
    'I have food poisoning',
    'I already made other commitments',
    'I have no money',
    "My mum didn't allow me",
    "You're not cool"
]

//Creating a function for the code so we can pass in multiple arrays
const excuseGenerator = arr => {
    let ranExcuse = arr[Math.floor(Math.random() * arr.length)];
    return ranExcuse;
}

//Testing the function
console.log (excuseGenerator(excuses));




//Testing the generator code
//let randomExcuse = excuses[Math.floor(Math.random() * 4)];