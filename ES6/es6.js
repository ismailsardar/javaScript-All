console.clear();
// "use strict"

x = 4;
console.log(x);
var x;

// defort value / rest prameyar
function preTx(txt = "Estring Undefine.."){
    console.log(txt);
}
preTx("I Love You....")
// preTx()

//...z rest API
function numTx (x,y,...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
numTx(10,20,30,40);



// spread operator
function sumNumber (a,b,c){
    return a+b+c;
}
let number = [10,20,30];
console.log(sumNumber(number[0],number[1],number[2]));
spread operator
console.log(sumNumber(...number));
let num1 = [4,5,6,...number];
console.log(num1);
let num2 = [40,50,60];
let numbers = [...number,...num2];
console.log(numbers);

const p1 = {
    name: "Trak",
    age: 30
}
const p2 = {
    country: "Bangladesh",
    cgpa: 3.68
}
const objCon = {...p1,...p2}
console.log(objCon);



// object literals
function  objlit(name,age){
    return{
        name: name,
        age: age
    }
}
function  objlit(name,age){
    return{
        name,
        age
    }
}
console.log(objlit("rakib",30));

// for of and for in loop
const number = [20, 39, 97, 48];
for (let x of number){
    console.log(x);
}

const student = {
    name: "Faisal",
    hobe: "Crecket",
    skile: "JavaScript",
    age: 24
}
for(let s in student){
    console.log(`${s} : ${student[s]}`);
}

// for vs forEach
let number = [10,20,30,40];
 for(let x = 0; x < number.length; x++){
     console.log(number[x]);
 }
let newArrey = [];
number.forEach(function(e,index,arr){
    console.log(e);
    console.log(index);
    console.log(number[index]);
    console.log(arr);
    console.log(arr[index] = e+5);
    newArrey.push(e*e);
});
console.log(newArrey);

// map and filter array function
let number = [10,20,30,40];
let newNumber = number.map(function(x){
    return x*x;
});
console.log(newNumber);
// filter array
let number1 = [10,20,30,40,51,69,90,100,200];
let newNumber1 = number1.filter(function(x){
    return x>50;
});
console.log(newNumber1);

// Arrow function 
function masseg (){
    return "I am masseg 1...";
}
console.log(masseg());

//Arrow
const masseg2 = () => {return "I am masseg ...2"}
const masseg2 = () =>  "I am masseg ...2"
console.log(masseg2());

// arrow with map,filter

let student = [
    {
        name: "Kader",
        id: 101,
        GPA: 3.69
    },
    {
        name: "Tamal",
        id: 102,
        GPA: 2.69
    },
    {
        name: "Dia",
        id: 103,
        GPA: 3.80
    },
    {
        name: "Sakib",
        id: 104,
        GPA: 2.90
    },
    {
        name: "Rikeb",
        id: 105,
        GPA: 4.00
    }
];

function goodStudent1(){
    return student.filter(function(x){
        return x.GPA > 3;
    }).map(function(y){
        return y.name;
    });
}
console.log(goodStudent1());

// same result but arrow function

const student2 = () => student.filter((x) => x.GPA > 3).map((y) => y.name);
console.log(student2());

// =====
// Destructuring 
// Destructuring array and objects

//Array Destructuring 
const number = [20,30,40,50,60];
let [num1,num2,num3,num4,nmu5] = number;

console.log(number[0]);
console.log(number[1]);
console.log(num1,num2);



//swuping
let a=10, b=30;
[a,b] = [b,a];
console.log(a);
console.log(b);



// Destructuring objects
const student ={
    name: "Tamal",
    id: 102,
    GPA: 2.69,
    langueg: {
        nativ: "Bangla",
        Contenent: "Ashia"
    }
};


console.log(student.id);
console.log(student.name);
console.log(student.GPA);

let {id,name,langueg} = student;
console.log(id);
console.log(name);
console.log(langueg.nativ);


// Destructuring objects in function

const studentD = ({id,name,GPA}) => {
    console.log(`${id} ${name} : ${GPA}`);
}

const student ={
    name: "Tamal",
    id: 102,
    GPA: 2.69
}
studentD(student);

// ======
// array methods | find() | findIndex()
const number = [29,30,28,40,48,50,60];

// let numberFind = number.find(x => x%4===0);
let numberFind = number.findIndex(x => x%4===0);
console.log(numberFind);

// ====
// startsWith, endsWith, includes
let masseg = "Today is Friday";

// This is chase sensetive
console.log(masseg.startsWith("today", 10));
console.log(masseg.endsWith("Friday"));
console.log(masseg.includes("Friday"));

// make class
class Student{
    constructor(id,name){
        this.id= id,
        this.name= name
    }

    set studentName(name){
        this.name= name;
    }
    get studentInfo(){
        return this.id+ " "+ this.name;
    }
}

let s1 = new Student(101, "Galib");
console.log(s1.id);

s1.studentName = "Laila";
console.log(s1.name);
console.log(s1.studentInfo);

