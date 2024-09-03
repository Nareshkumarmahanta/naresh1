intro to javascript :-

-javascript is a high level programing language for building web application in a efficient way.
-javascript works on both client side rendering as well as server side rendering.
-node JS is the runtime environment of javascript .
-javascript is comes from echma script so we see the latest version of javascript in the from of echma script.
-Now we used the javascript version 6 i.e Echmascript 6(ES6)
- in another way we called ES6 as the venilla javascript.
- javascript is mainly used for building logics or functionelity of a webpage.


variable :-

- variable is a container to store some data.
- there are 3 types of variable are there in javascript.

1. let :-
- let is a type of variable which is used for changing the variable name later.
- Now these days, most of the devlopers used let for changing variable value.
- Let is a block scope so we have been using let for most of the cases.
- let is used in block .

2. var :-
- var is a type of variable which is also used for changing the variable in later stage.
- var is used in oldest browser so now a days we are don't use var most of the cases .
- var is a outside scope or function.


3. const :-
- const is a type of variable where we can't change our data .
- const means constant to store some data like number, integer etc...


Rules for creating variable Name :-

- variables names are case sensitive i.e "a" & "A" is different.
- Only letters, digits, underscore % special character is allowed.(white space is not allowed).
- Only letters, digits, underscore % special character should be 1st character only.
- Reserved words can not be a variable names.

ex- 

let ram32@56 = 23


Datatypes JS :-

- Datatypes is an attributes associated with abpiece of data that tells a computer system how to interpriet its value .
- in data types we used "typeof" operater to know that what type of data it is .
- Mainly in javascript their are 2 types of data types.
1. Primitive :
  - in javascript 7types of primitive data types are present.
  1. Number :- Number are the type of data types those it contain some numerical value.
  2. Bollean :- In bollean data types we get bollean value like true & false.
  3. Undefiend :- In undefiend data types the data is not define so that it will show undefiend.
  4. Null :- In this data types we get null for the value means nothing.
  5. Bigint :- In this bigint we will get big integer value .
  6. String :- string is a type of data type that can hold some character like names or words.
  7. Symbol :- In symbol we will get whole symbol as well as the value we get for the data type.

2. Reference :

-  non-primitive datatypes are the type of data type that can hold multiple items in a single time.
-  non-primitive datatypes are - object,array,&funtion .
-  objects is a non primitive datatypewhich can hold multipleof item in one single entity.
-  mainly objects are working on ( key:value)pair.
-  the left hand side is our keys and right hand side are the values of that key.

ex. of object:-

person = { 
    "name" : "web-bocket",
    "age" : 2,
    "business" : "software",
    "carrier" : "good"
}


ex. of array:-

let arr = [1,2,4,5,8,6,9,3,2]
note - array indexing start from "8" .

ex. of function:-

function great(){
  console.log("Hello World")
}
great()

operater in javascript :-

- operator are the key features to do some task or operate some task.
- ex. A+B
- in that given example A&B are the operants , (+) sign is our operator.
- there are 5 types of operator are their in javascript.

1. Arithmetic operator - (+,-,*,/,%(module), **(Exponents)).
2. Unary operator - ++(increment), --(Decrement).
3. Assignment operator - (=,+=,-=,*=,%=,/=,**=)
4. Logical operator - (Logical and operator - &&),(Logical or operator ||)
5. Compairision operator - (==,!=,!==,===(strit mode))



Conditional statement in javascript :-

- conditional statement are used to implement some condition in code.
- there are 3 types of conditional statement are their in javascript.
1. if condition :-
- if condition is true then statement is execute.
- syntax :-
if (condition){
  statement
}

2. if else conditon :-
- if condition is true then if block is executed otherwise its terminated to else condition.
- syntax :-
if (condition){
  statement
} else {
  statement
}
3. else if condition :-
- its check the condition multipal times where the condition is true.
- syntax :-
if (condition){
  statement
} else if (condition) {
  statement
} else {
  statement
}

