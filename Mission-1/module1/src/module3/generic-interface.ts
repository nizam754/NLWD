// Generic Interface

interface CrushInterface<T, U = null>{
    name: string;
    husband: T;
    wife?:U
}

interface PersonInterface {
    name: string;
    age: number;
}

const crush5: CrushInterface<PersonInterface, PersonInterface>={
    name: 'Kate',
    husband: {
        name: 'Parsian',
        age: 30
    },
    wife:{
        name: 'Winslet',
        age:40
    }
}

const crush3: CrushInterface<boolean> = { name: "Kate Winslet",
husband: true };


const crush4: CrushInterface<boolean> = { name: "Kate Winslet",
husband: true };

interface HusbandInterface {
    name: string;
    salary: number;
}

const crush: CrushInterface<HusbandInterface> = {
    name: "Kate Winslet",
    husband: {
        name: "Persian",
        salary: 500000.00,
    }
}


type GenericTuple<X, Y> = [X, Y]

const relation: GenericTuple<string, string> = ["Persian", "Kate Winslet"];

// type relationWithSalaryType= {name: string; salary:number}


const relationWithSalary: GenericTuple<relationWithSalaryType, string> = [
    {
        name: "Persian",
        salary: 1000000,
    },
    "kate Winslet",
]

const relationWithSalary2: GenericTuple< string> =
relationWithSalaryType
[
    {
        name: "Persian",
        salary: 1000000,
    },
    "kate Winslet",
]

type GenericArray<T> = Array<T>

const rollNumbers: GenericArray<number> = [44, 12, 3];
const rollNumbers2: GenericArray<string> = ["44", "12", "3"];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameRollType ={name:string,roll:number}

const userNameAndRollNumbers: GenericArray<NameRollType> = [
    { name: "Mr. X", roll: 1},
    {name: "Mr. Y", roll: 2},
]

add(x, y, z)
add(3, 4, 5)