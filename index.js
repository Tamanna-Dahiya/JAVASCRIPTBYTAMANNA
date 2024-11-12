//Practice questions
//1 question
let a1="123.45"
console.log(Number(a1));
//2 question
let b1=456;
console.log(b1.toString());
//3 question
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("false"));
//4 question
console.log("10"-5);
console.log("10"+5);
console.log("20"*"2");
console.log("hello"-"5");
//5 question 
let balance=1000;
balance+=500;
balance-=200;
console.log(balance);
// 6 question
let a= 5;
let b=10;
console.log(a++ + b++);
console.log(a,b);
//7 question
let m=7;
let n=3;
console.log(++m + ++n);
console.log(m,n);
//8 question
let Num=10;
console.log(Num++ + ++Num);
console.log(Num);
//9 question 
let counter=4;
console.log(++counter * counter--);
console.log(counter)
//10 question
num=Number(prompt("enter a number:"))
result=num%2==0?"number is even":"number is odd";
console.log(result);
//11 question  
let age1= prompt("enter age:");
let vote=age1>=18?"can vote":"cannot vote";
console.log(vote)
//12 question
let num=Number(prompt("enter a number:"));
let result1=num>0?"positive":num<0?"negative":"zero";
console.log(result1)
//13 question 
let year=2024;
let result2=year%4==0?"leap year":"not a leap year";
console.log(result2);
//14 question
let age=prompt("enter your age :");
let result3=age>=0 &&age<=12?"child":age>12 && age<20?"teenager":age>19 && age<60?"adult":"seniors";
console.log(result3)
//15 Question
let grade ="A";
if(grade=="A"){
    "excellent"
}
else if(grade="B"){
    "good"
}
else if(grade="C"){
    "Average"
}
else if(grade="D"){
    "pass"
}
else{
    "fail"
}