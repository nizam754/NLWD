const arrayofNumbers = [1, 2, 3]; // ['1', '2', '3']
const arrayofStrings = arrayofNumbers.map((number) => number.toString());
console.log(arrayofStrings);

type Volume = {
    height: number;
    width: number;
    depth: number;
};

type Area<T>={
    // [key in keyof Volume] : string
    [key in keyof T] : T[key]
}

const area6 : Area<{height:number, width:number}>{height: : 10, width: 13


type AreaString = {
    height: string;
    width: string;
};

type AreaReadonly = {
   readonly height: number;
   readonly width: number;
};

const rectangularArea: AreaReadonly = {
    height: 10,
    width: 12,
}

rectangularArea.width=10


type A = AreaNumber['height'] // look up types
type B = keyof AreaNumber; // 'width' | 'height'