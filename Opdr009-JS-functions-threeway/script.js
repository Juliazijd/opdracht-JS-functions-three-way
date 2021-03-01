// This is writing a function with a declaration:
function handleNumbers1 (numberA, numberB) {
    let multipliedA = numberA * numberA;
    let multipliedB = numberB * numberB;
    let sumOfMultiplied = multipliedA + multipliedB;
    let finalSum = sumOfMultiplied * sumOfMultiplied;
    return finalSum;
}

const response1 = handleNumbers1(13, 35)
console.log(response1);

// This is writing a function with an expression:
const handleNumbers2 = function (numberA, numberB) {
    let multipliedA = numberA * numberA;
    let multipliedB = numberB * numberB;
    let sumOfMultiplied = multipliedA + multipliedB;
    let finalSum = sumOfMultiplied * sumOfMultiplied;
    return finalSum;
};

const response2 = handleNumbers2(13,35);
console.log(response2);

//This is writing an arrow function:
const handleNumbers3 = (numberA, numberB) => {
    let multipliedA = numberA * numberA;
    let multipliedB = numberB * numberB;
    let sumOfMultiplied = multipliedA + multipliedB;
    let finalSum = sumOfMultiplied * sumOfMultiplied;
    return finalSum;
};

const response3 = handleNumbers3(13,35);
console.log(response3);