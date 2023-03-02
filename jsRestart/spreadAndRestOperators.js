// spread 
const numbers = [1, 2, 3];
const newNumber = [...numbers, 4];

console.log(newNumber);

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);



// rest
const filter = (...args) => {
    return args.filter(el => el===1);
}

console.log(filter(1, 2, 3));