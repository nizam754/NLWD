// Pick

interface Person {
    name: string;
    email?: string;
    contactNo: number;
}

type Contact = Pick<Person, "contactNo" | "email">;

// Omit

type Name = Omit<Person, "email"|"contactNo">;

//Partial
// To make all the properties to optional type
type Optional = Partial<Person>;

// Required
type Required = Required<Person>;

// Readonly
const person: Readonly<Person> = {
    name: "John",
    email: "john@gmail.com",
    contactNo: 123456789
}

person.name = "Kabila";

//using index signature
// type myObj = {
//     [key: string]: string;
// }

//Record
type myObj = Record<'a'|'b'|'c'|'d', string>;

const obj: myObj = {
    a: "1",
    b: "2",
    c: "3",
    d: "4"
}

