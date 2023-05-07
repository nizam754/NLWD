type PersonType = {
    name: string;
    age: number;
    address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType

// const a: newType= 'age'
// const b: newTypeUsingKeyOf= 'hh'

function getProperty<X, Y extends keyof x>(obj: X, key: Y) {
    obj[key];
}

const propery = getProperty({name: "Mr.X", age: 100}, "age");