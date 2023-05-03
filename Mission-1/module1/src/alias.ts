type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}

const crush1:CrushType  = {
    name: "Moina pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda",
};

const crush2:CrushType = {
    name: "Boyam pakhi",
    profession: "Next Level Web Developer",
    address: "Mexico",
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

type CourseNameType=string;
const courseName:CourseNameType ="Next Level Web Development";

type OperationType = (x: number, y: number) => number;
const calculate = (
    number1: number, //10
    number2: number, //20
    operation: OperationType // (x,y) => x + y
) => {
    return operation(number1, number2);
}

calculate(10, 20, (x,y) => x + y);
calculate(10, 20, (x,y) => x - y);
calculate(10, 20, (x,y) => x * y);
