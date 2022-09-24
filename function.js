//Basic FUNCTIONS
// const sayHello = function (){
//     console.log('Hello, world!');
// }
// sayHello();

// const sayHello = function(name){
//     console.log('Hello ' + name)
// }
// sayHello('Dae')

//RETURN
const sayHello = function (name){
    return 'Hello, ' + name;
}
const greeting = sayHello ('Fernanda')
console.log(greeting)

//isEven FUNCTION
// const isEven = function (num) {
//     return num % 2 === 0;
// }
// const tenIsEven = isEven(10);
// const fifteenisEven = isEven (15);

// console.log(tenIsEven)
// console.log(fifteenisEven)

const isOdd = function (num){
    return num % 2 !== 0;
}
console.log('3 is odd: ' + isOdd(3));
console.log('8 is odd: ' + isOdd(8))