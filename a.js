// Variables and data type
//variable is name given to memory location in program or it is container that stores a value.There are two things one is declaration and other is initialisation of value first dceclaration will take place
// to declare a variable we are having 3 keywords (let,var,const)
// var is function scoped and we can declare single variable many times using this and it is used rarely today
var a=10;
var a=20;
console.log(a);
// let is block scoped,you can't declare a variable again and again using this
let x=20;
console.log(x);
// const is block scoped, it cant be undefined or reassigned or we have to assign value in same line
const pi=3.14
console.log(pi);
// let take one more program 
//const t;// throw an error
//t=4;
//console.log(t);
// Rules for naming variables are:
// 1. it can be combination of letters,digits,dollar,underscore
//2. it should not start with digits
//3. it cant be a keyword
//4. it should not contain special symbols or spaces
//5.it should be written in camekCase
// Data type in js are of two types primitive( String,number,boolean,null undefined) and non primitive(objects and arrays) 
let A="TAMANNA";
let B= 10;
let C=true;
let D;
let E=null;
console.log(A);
console.log(B);
console.log(C);
console.log(D);
//console.log(E);
// to check data type of any variable we use typeof()
console.log(typeof A);
console.log(typeof B);
console.log(typeof C);
console.log(typeof D);
console.log(typeof E);
// if value is null then data type is object
// data type conversion (implicit or type coercion (when js automatically converts data type))
// string concatenation with number
console.log("5"+10);// concatenate and return a string
//arithmetic operation with number and string
console.log("5"-1);// consider string and perform operation and return number
console.log("20"*2);
console.log("hi"-5);//will throw an error
// Boolean conversion ( convert 0,empty string,null,nan,undefined to false or rest to true )
console.log(Boolean(''));
console.log(Boolean('hi'));
console.log(Boolean(0));
console.log(Boolean(Null));
console.log(Boolean(3));
//data type conversion (explicit conversion means coverting data type using explicit method)
//converting number to string by using String(),or use.toString()
console.log(String(123));
let y=34;
console.log(y.toString());
// converting string to number we are having three ways Number,parseint,parsefloat
let s='123';
console.log(Number(s));
console.log(parseint(123.45));
console.log(parsefloat(123.45));
// special case
let F="1234abc"
console.log(Number(F));//Nan
console.log(parseint(F));//123
console.log(parsefloat(F));
let yy=null;
console.log(typeof(yy));