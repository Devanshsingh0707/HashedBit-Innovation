
//Even no: 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//function to calculate add, subtract, multiply, divide using switch
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

// Example
console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 5, '/'));


//Function findTax using switch
function findTax(salary) {
    let taxRate;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return "Invalid salary";
    }

    return salary * taxRate;
}

// Example
console.log(findTax(400000));
console.log(findTax(750000));
console.log(findTax(1200000));
console.log(findTax(2000000));

//Sum of products of corresponding digits
function sumOfDigitProducts(n1, n2) {
    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        sum += digit1 * digit2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

// Example
console.log(sumOfDigitProducts(6, 34)); // (6*4) + (0*3) = 24