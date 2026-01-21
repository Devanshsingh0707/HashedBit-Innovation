// Q1) Declare variables using let, const, and var and show scope difference
function variableScopeDemo() {
    if (true) {
        var a = "I am var";      // function scoped
        let b = "I am let";      // block scoped
        const c = "I am const";  // block scoped
        console.log(a, b, c);
    }
    console.log(a); // works
    //console.log(b); // error
    // console.log(c); // error
}
variableScopeDemo();


// Q2) Array of fruits and return the second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
    return arr[1];
}
console.log(getSecondFruit(fruits));


// Q3) Add element using push and remove using pop
function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}
console.log(modifyArray([1, 2, 3]));


// Q4) Square each number using map()
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers([1, 2, 3, 4, 5]));


// Q5) Filter out even numbers and return odd numbers
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(getOddNumbers([1, 2, 3, 4, 5, 6]));


// Q6) Object person and greeting message
const person = {
    name: "Dev",
    age: 22,
    occupation: "Developer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}
greetPerson(person);


// Q7) Calculate area of rectangle using object
function calculateArea(rect) {
    return rect.width * rect.height;
}
console.log(calculateArea({ width: 10, height: 5 }));


// Q8) Return array of object keys using Object.keys()
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys({ a: 1, b: 2, c: 3 }));


// Q9) Merge two objects using Object.assign()
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1 }, { b: 2 }));


// Q10) Sum of numbers using reduce()
function sumOfNumbers(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumOfNumbers([1, 2, 3, 4, 5]));
