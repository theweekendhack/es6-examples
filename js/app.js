/*
    ES6 Features :


    1. The Introduction to let and const (Prevent hoisting and introduced block scope)
    2. Template Literals / Template Stringas
    3. Classes (Subclasses)
    4. New Array Methods


*/

import movies from "./modules/Arrays.js";
import numbers from "./modules/Numbers.js";


import Employee from "./modules/Employee.js";




const person = {

    firstName : 'Jon',
    lastName : 'Snow',
    age : 25,
    gender : "Male",
    number: {
        homePhone : "1888888",
        workPHone : "82838838383"
    }

};


const {gender,age} = person;

const [val1,val2,val3] = movies;

console.log(val1);



/*
const emp1 = new Employee("Jon");

console.log(emp1);


const emp2 = new Employee("Jon","Snow",53);

console.log(emp2);
*/


/*
    3 ways to create function


   
    2. Function Expression
    3 Arrow Function ES6 ways


//1. Function declaration 
function add(a,b)
{
    return a + b;
}


//add();


/*
//2. Function Expression
const add  = function(a,b)
{

    return a + b;
}
//alert(add(5,7));


//3. Arrow Functions
const addArrow = (a,b) =>
{
    return a + b;
}

//alert(addArrow(20,1));


function sqr(num)
{
    return num * num;
}*/


//alert(sqr(2));

//An arrow function that receives one parameter, calculates the square of the parmeter and return the results

/*
const sqrArrow = num=> num * num;

alert(sqrArrow(5));


const message = ()=> alert("I love programming");
message();


const calArea = (l,w) => l*w;

alert(calArea(5,10));

const multipleMessage = ()=>
{
    alert("Statment 1");

    alert("Statment 2");
}

multipleMessage();

*/





/*
    forEach / traverse an array 
    find   /find one value
    filter // filter out some values (based on a condition) form an array
    map // map new values to a new array based on the values from an initial array

*/

/*
function printArray(arr)
{
    arr.forEach(function(movie,i){

        console.log(`${i+1}.  ${movie}`);
    });
}

console.log("Initial Array");
printArray(movies);

movies.sort(); //sort in ASC for strings
console.log("\nArray in ASC order ");
printArray(movies);


movies.reverse(); //sort in DESC fro strings
console.log("\nArray in DESC order ");
printArray(movies);
*/


//HOme research how to sort ASC and sort DESC and array of numbers

/*
const squaredNumbers = numbers.map(function(number){

    return number*number;

});

console.log(squaredNumbers);
*/


/*Filter all the numbers that are greater than 10
const newArray = numbers.filter(function(number){


    return number > 10;
})

console.log(newArray);
*/

/*

const value = parseInt(prompt("Please enter a value"));

//Allows you to check to see if a value is located within the arraay  
const output= numbers.find(function(number){

    return number==value;    
});

if(output!=undefined)
{
    alert(`${value} was found`);
}

else
{
    alert(`${value} was not found`);
}
*/

/*For Each  allows you to traverse
movies.forEach(function(movie,i){

    console.log(`${i+1}.  ${movie}`);
})
*/


/*

import WeeklyPaidEmployee from "./modules/WeeklyPaidEmployee.js";
import CommissionPaidEmployee from "./modules/CommissionPaidEmployee.js";

const emp1 = new WeeklyPaidEmployee("Jon","Snow", "I.T",150,40);

const emp2 = new CommissionPaidEmployee("Bruce","Wayne","Accounts","60000","100000");

console.log(emp1.getFullName());

console.log(emp2.getFullName());*/





