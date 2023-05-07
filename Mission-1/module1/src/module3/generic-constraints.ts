type MandatoryTypes= {name: string,age: number,salary: number}
interface MandatoryIntegerTypes {name: string,age: number,salary: number}

const addMeInMyCrushMind1 = <T extends MandatoryIntegerTypes>(myInfo: T) => {
    const crush = "Kate Winslet";
    const newData = { ...myInfo, crush};
};

type MyInfoType={
    name: string;
    age: number;
    salary: number;
    other1:boolean;
    other2:null
}

const myInfo1: MyInfoType = {
    name: "Persian",
    age: 100,
    salary: 1000000,
    other1:false,
    other2:null
};
const result6 = addMeInMyCrushMind1(myInfo1);
result6.