// Array Destructuring
[a, b] = ['Hello', 'World'];
console.log(a);     // Hello
console.log(b);     // World


// Object Destructuring
let {name} = {name: 'Max', age: 28};
console.log(name);  // Max
console.log(age);   // undefined


// Example
const numbers = [1, 2, 3];

[num1, num2] = numbers;
console.log(num1, num2); // 1, 2

[num1, ,num3] = numbers;
console.log(num1, num3); // 1, 3