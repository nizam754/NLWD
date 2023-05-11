"use strict";
// const a: newType= 'age'
// const b: newTypeUsingKeyOf= 'hh'
function getProperty(obj, key) {
    obj[key];
}
const propery = getProperty({ name: "Mr.X", age: 100 }, "age");
