"use strict";
const crush1 = {
    name: "Moina pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda",
};
const crush2 = {
    name: "Boyam pakhi",
    profession: "Next Level Web Developer",
    address: "Mexico",
};
const isCrushMarried = false;
const courseName = "Next Level Web Development";
const calculate = (number1, //10
number2, //20
operation // (x,y) => x + y
) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
