// import jekono from "./module"
// import addTwo from './utils/add'
// import subtract from './utils/subtract'
// import multiply from './utils/multiply'
// import divide from './utils/divide'
// import average from './utils/average'
import methods from './utils/index'

const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3
};

const res1 = methods.addTwo(4, 6);
const res2 = methods.subtract(4, 6);
const res3 = methods.multiply(4, 6);
const res4 = methods.divide(4, 6);
const res5 = methods.average(4, 6);
