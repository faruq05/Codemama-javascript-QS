
// difference between two number 
// input = "10 20";
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// // let max = data[0];
// // let min = data[0];
// // for(let i=1; i<data.length; i++){
// //     if(max<data[i]){
// //         max=data[i];
// //     }
// //     if(min>data[i]){
// //         min = data[i];
// //     }
// // }
// const max = Math.max(...data);
// const min = Math.min(...data);
// const difference = max - min;
// console.log(difference);




// area of a rectangle
// input = "10 20";
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// const width = Math.max(...data);
// const height = Math.min(...data);
// const area = width * height;
// console.log(area)



//reminder problem
// input = "5 3";
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// const num1 = data[0];
// const num2 = data[1];
// const reminder = num1 % num2;
// console.log(reminder);



//quotient 
// input = "45 35";
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// const numerator = parseInt(data[0]);
// const denominator = parseInt(data[1]);
// const quotient = Math.floor(numerator / denominator);
// console.log(quotient);



//has vowel
// input = "ajhjdhajs"
// input = input.toLowerCase();
// let containsVowel = false;

// for (var i = 0; i < input.length; i++) {
//     if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
//         containsVowel = true;
//         break; // Once a vowel is found, no need to check further
//     }
// }
// if (containsVowel) {
//     console.log("The string contains a vowel.");
// } else {
//     console.log("The string does not contain any vowel.");
// }



//input count
// input="name is"
// let inputcount = 0;
// for (var i = 0; i < input.length; i++) {
//     inputcount++;
// }
// console.log(inputcount);


//Two Point Distance
// input = "0 0 2 2";
// const lines = input.split('\n');
// const [x1, y1] = lines[0].split(' ').map(Number);
// const [x2, y2] = lines[1].split(' ').map(Number);
// if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
//     const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     console.log(`Distance: ${distance.toFixed(2)}`);
// } else {
//     console.log('Invalid input. Please enter valid numerical coordinates for two points.');
// }


//Simple Summation
// input = "45 35";
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// const num1 = data[0];
// const num2 = data[1];
// const sum = num1+num2;
// console.log(sum);



//Area of circle
// input = "5";
// const radius = parseFloat(input);
// const area = 3.14*(Math.pow(radius,2));
// console.log(`The area of the circle is ${area.toFixed(2)} square units.`);


//smallest number
// input = "5 2 3 4 5 78 6"
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// const small = Math.min(...data);
// console.log(small);

//remainder
// input = "5 3"
// const temp = input.split(" ");
// const data = temp.map(item=> Number(item));
// const num1 = data[0];
// const num2 = data[1];
// const remainder = num1%num2;
// console.log(remainder); 

//find next Number
// input = "3 5 7"
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// const [a, b, c] = data;
// function findNextNumber(a, b, c) {
//     const difference = b - a;
//     const nextNumber = c + difference;
//     return nextNumber;
// }
// const nextNumber = findNextNumber(a, b, c);
// console.log(nextNumber);

//BMI calculate
// input = "1.6 60";
// const temp = input.split(" ");
// const data = temp.map(item => Number(item));
// const [h, w] = data;
// function calculateBMI(height, weight) {
//     return weight / (height * height);
// }
// function weightstatus(bmi) {
//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi < 25.0) {
//         return "Normal weight";
//     } else if (bmi >= 25.0 && bmi < 30.0) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }
// const bmi = calculateBMI(h, w);
// const weight = weightstatus(bmi);
// console.log(`BMI: ${bmi.toFixed(2)}`);
// console.log(weight);

//Sum of Array Elements
// function main(input) {
//     const lines = input.trim().split('\n');
//     const size = parseInt(lines[0]);
//     const array = lines[1].split(' ').map(Number);
//     const sum = findSumLessthenMedian(array);
//     console.log(sum);
// }

// function findSumLessthenMedian(array) {
//     array.sort((a, b) => a - b);
//     const medianIndex = Math.floor(array.length / 2);
//     const medianElement = array[medianIndex];
//     let sum = 0;
//     for (let i = 0; i < medianIndex; i++) {
//         if (array[i] < medianElement) {
//             sum += array[i];
//         }
//     }
//     return sum;
// }

//reversed number
// input = "1234";
// const trimmedInput = input.trim();
// const reversedString = trimmedInput.split('').reverse().join('');
// const reversedNumber = parseInt(reversedString);
// console.log(reversedNumber);

//Find factorial
// function main (input) {
//     input = "4";
//     const num = parseInt(input.trim());
//     const result = factorial(num);
//     console.log(result);
// }

// function factorial(num){
//     if(num === 0){
//         return 1;
//     }
//     return num* factorial(num-1);
// }

//palindrome
// function isPalindrome(num) {
//     const numStr = num.toString();
//     const len = numStr.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (numStr[i] !== numStr[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// function main(input) {
//     input = "121";
//     const num = parseInt(input.trim());
//     const isPal = isPalindrome(num);
//     if (isPal) {
//         console.log(`${num} is a palindrome number`);
//     } else {
//         console.log(`${num} is not a palindrome number`);
//     }
// }

