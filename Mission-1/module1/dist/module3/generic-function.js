"use strict";
//Arrow Function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
function createArray2(param1, param2) {
    return [param1, param2];
}
;
const result1 = createArray1("Bangladesh", "BD");
const result2 = createArray1(false, ["USA"]);
const result3 = createArray1({ name: "Bangladesh" }, false);
// Spread Operation
const addMeInMyCrushMind = (myInfo) => {
    const crush = "Kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
};
const myInfo = {
    name: "Persian",
    age: 100,
    salary: 1000000,
};
const result5 = addMeInMyCrushMind(myInfo);
result5;
