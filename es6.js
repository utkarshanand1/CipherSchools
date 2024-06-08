//ES6 is a version of JavaScript that was officially released in the summer of 2015

var x = 15
{
    let x = 5
    console.log(x)
    // const y = 10
    // y = 6
    // console.log(y) //error as const function can't be changed
}
console.log(x)

// var a = function(a,b){
//     return a+b
// }
// console.log(a(5,6))
const a = (a,b)=>{ //no need of {} and return also write (const a = (a,b) => a+b)
    return a+b
}
// arrow function can only be used with const
console.log(a(5,6))

const q1 = ["jan", "feb", "mar"]
const q2 = ["apr", "may", "june"]
const q3 = ["jul", "aug", "sept"]
const q4 = ["oct", "nov", "dec"]

const year = [...q1,...q2,...q3,...q4] //... spread operator(expands the iterative)
console.log(year)

const myNum = [10,20,30,40,12]
let maxVal = Math.max(...myNum)
console.log(maxVal)

let sum = 0
for(let num of myNum){
    sum = sum+num
}
console.log(sum)

const name = "CipherSchools"
let text = ""
for(let ch of name){
    text+=ch + " "
}
console.log(text)

const fruits = new Map([["apples",100],["mangoes",200],["peach",300],["avacado",400]])
console.log(fruits)
console.log(fruits.get("peach"))

const letters = new Set();
letters.add("a")
letters.add("b")
letters.add("c")
letters.add("a")
letters.add("b")
console.log(letters)

class car{
    constructor(name,mfgYear){
        this.name = name
        this.mfgYear = mfgYear
    }
}
const myCar1 = new car("BMW",2012)
const myCar2 = new car("Skoda",2017)
console.log(myCar1,myCar2)

const myFunc = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is inside promise")
            resolve()
        },2000)
    });
};

myFunc()
.then(()=>{
    console.log("resolved")

})
.catch(()=>{
    console.log("rejected")
});


const person = {
    firstName : "John",
    lastName : "Doe",
    age : 30,
    eyeColor : "Blue",
}
let id = Symbol("id")
person[id] = 14011

console.log(person)

const addTwoNum = (a,b) => a+b;
console.log(addTwoNum(10,11))

const addNum = (...args) => {
    let sum = 0
    for(let arg of args){
        sum += arg;
    }
    return sum
}
console.log(addNum(10,11,12,3,44,5,5,3))