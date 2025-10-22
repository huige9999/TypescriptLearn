// let userName: string = "Alice";
// let userAge: number = 30;
// let isVip: boolean = true;
// const hobbies: (string | number)[] = ["reading","traveling", 42];
// const userProfile: [number,string,boolean] = [1,"Alice",true];
// let role: "admin" | "user" | "guest" = "guest";

// function calculateArea(width: number, height: number): number;
// function calculateArea(width: number, height: number, unit: string): string;
// function calculateArea(width: number, height: number, unit: string = 'px'): number | string {
//     if(unit) {
//         return `${width * height} ${unit}`;
//     }
//     return width * height;
// }

// const result1 = calculateArea(1,2);
// const result2 = calculateArea(1,2,'cm');

// function calculateArea<T extends string | undefined = undefined>(width: number, height: number, unit?: T): T extends string ? string : number {
//     return (unit ? `${width * height} ${unit}` : width * height) as any
// }

// const result1 = calculateArea(1,2);
// const result2 = calculateArea(1,2,'cm');

// function findFirst<T>(arr: Array<T>, predicate: (item: T) => boolean): T | undefined {
//     for (const item of arr) {
//         if (predicate(item)) {
//             return item;
//         }
//     }
//     return undefined;
// }

// const numbers = [1, 2, 3, 4, 5];
// const firstEven = findFirst(numbers, (num) => num % 2 === 0);
// console.log(firstEven); // Output: 2

// const strings = ["apple", "banana", "cherry"];
// const firstWithA = findFirst(strings, (str) => str.includes("a"));
// console.log(firstWithA); // Output: "apple"