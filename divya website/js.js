// alert("Hello Divya")
// confirm("Are u sure?")
// prompt("Enter a number")

// variable - container - store a value 

// syntax: datatype variablename = value

// Datatype
/* multi line comment

1. var   ---> global scope
2. let   ---->local scope
3. const --->constant 


*/


// Variables - Naming rules

// no numbers at beginning
// spaces not allowed
// special symbol -> $,_
// important: Case-sensitive - upper and lower case sensitivity
let first_name="Divya"

document.write(first_name)

let k=20
let K=30
document.write(k+K)


// local variable and global variable

var d=200 //global variable

function fun(){
console.log(d);
 
let h=300  //local variable
console.log(h);


}
fun()

console.log(d);

// console.log(h);


// Type of data using typeof() function


// for all numeric values --> number
// for text values(even character) ---> string
// let n=-12.89
// let n='Kavi'
// let n=false

let n="1232132"
console.log(typeof(n));


// Primitive and non-primitive datatype



// Operator -- to perform calculations


// eg: 10 + 20 =30


// 1. Arithmetic operator - basic mathematical calculation
/*
let a=15
let b=3
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(10**3);


// increment(++) and decrement (--)

let f=10
++f //increment by 1
console.log(f);
f++
console.log(f);


// exponential --> **  ,
// eg: 2**3 = 8 , where 2*2*2=8
//  base value  -> 2
// power value ->3

//eg: 15/3 = 5  -- > remainder of division = modulus (%)



// 2. Relational operator or comparison operator  --> boolean value

let s=100
let t=200
console.log(s==t);
console.log(s!=t);
console.log(s<=t);
console.log(s>=t);
console.log(s<t);
console.log(s>t);



// 3.Logical operator  --> AND, OR, NOT


let x=true
let y=false
// AND --> both condition should be true , otherwise false
console.log(x && y);
// OR ---> anyone condition should be true, otherwise false
console.log(x || y);
// NOT ---> inverse the given input
console.log(!y);
*/

let c="indian"
let age=20

if(c=="indian"  && age>=18){
    console.log("Eligible to vote");
    
}
else{
    console.log("Not Eligible");
    
}


// Ternary operator or conditional operator

// syntax:  <condition> ? "True block" : "False block"
console.log((20>=10)? "Greater" : "Lesser");

console.log((c=="indian"  && age>=18)? "Eligible" : "Not Eligible");

// Assignment operator
let g=10
// g+=5  // g+=5  g=g+5

// g-=4
// g*=2
// g/=2

console.log(g);











