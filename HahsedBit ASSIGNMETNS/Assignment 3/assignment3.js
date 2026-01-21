//Array of Indian states & remove names starting with vowels (use filter)
const states = [
    "Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh",
    "Tamil Nadu", "Kerala", "Assam", "Maharashtra"
];

const res = states.filter(state => {
    const firstChar = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(res);

//Reverse word order in string
let str = "I love my India";

let output = str.split(" ").reverse().join(" ");

console.log(output);


//Convert 'INDIA' → 'INDONESIA' using splice
let s = "INDIA".split("");

s.splice(3, 0, "O", "N", "E", "S");

console.log(s.join(""));

//Count vowels & consonants (string ≥ 20 chars)
let string = "INDIA".split("");

string.splice(3, 0, "O", "N", "E", "S");

console.log(string.join(""));

//Replace wrong word with correct word
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

console.log(correctfn("I love Javasript", "Javasript", "JavaScript"));

//Filter numbers greater than 5
const inputArr = [1,2,3,9,10,7,5,4,3];

const answer = inputArr.filter(num => num > 5);

console.log(answer);

//Calculate average using map & reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students.map(student => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;
    return { name: student.name, average };
});

console.log(result);

//Repeated sum of digits until single digit
function singleDigitSum(num) {
    while (num >= 10) {
        num = num
            .toString()
            .split("")
            .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}

console.log(singleDigitSum(456));

//Count number of words in a paragraph
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("This is a simple paragraph with many words"));

// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));

//Find average marks using array & object methods
const studentsData = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const op = studentsData.map(studentObj => {
    const name = Object.keys(studentObj)[0];
    const marks = Object.values(studentObj[name]);
    const avg = marks.reduce((a, b) => a + b, 0) / marks.length;

    return {
        [name]: { average: avg }
    };
});

console.log(op);
