// let num1=5;
// let num2=4;
// if (num2>num1){
//   console.log(num2 +" is greater than "+num1);
// }else if(num1>num2){
//   console.log(num1+" is greater than "+num2);
// }else{
//   console.log("Both the numbers are equal...")
// }

// num1=5;
// num2=5;
// if (num2>num1){
//   console.log(num2 +" is greater than "+num1);
// }else if(num1>num2){
//   console.log(num1+" is greater than "+num2);
// }else{
//   console.log("Both the numbers are equal...")
// }

// Here we have to write the same piece of code again and again to tackle with it we use a function 

// function compareNumber(num1,num2){
//   if (num2>num1){
//   console.log(num2 +" is greater than "+num1);
// }else if(num1>num2){
//   console.log(num1+" is greater than "+num2);
// }else{
//   console.log("Both the numbers are equal...")
// }

// }

// in the above code invoke a function and we are calling it in below:-
// here we are declaring a function with its name and parameter and giving a value to the parameter while calling it.

// compareNumber(8,9)
// compareNumber(67,98)
// compareNumber(10,10)

// what the function do it reuse a piece of code again again while declaring a value to a parameter.

// function print(){
//   console.log("my name is chandan gupta.")
// }
// print()

// here we are only printing a text without any parameter declaration.

// -----------------------------------------------------------

// function expresssion

// function addNumber(firstNumber,secondNumber){
//   return(firstNumber+secondNumber)
// }
// let result=addNumber(12,12)
// console.log(result)

// here we are adding a number by saving a result in result varible
// when we have to return a result we have to use a return keyword for automatically return.

// -------------------------------------------------------------

// function expression syntax here a variable is holding refrence to the function like :-

// const add= function addNumber(firstNumber,secondNumber){
//   return(firstNumber+secondNumber)
// }
// let result=add(12,12)
// console.log(result)

// -----------------------------------------------------------

// anonmymous function

// const sub=function(firstNumber,secondNumber){
//   return(firstNumber-secondNumber)
// }
// console.log(sub(12,12))

// -----------------------------------------------------------

// function we can also use a property of objects

// here we are using anonmymous in the objects

// const person={
//   firstName:console.log("chandan"),
//   lastName:console.log("gupta"),
//   print:function(){
//     console.log("we are using function as a property....")
//   }
// }
// person.lastName
// person.print()
// person.firstName

// ----------------------------------------------------------------

// coding convention in javascript

// camelCase
// dont use variable name like f k j i etc
// use opening a closing bracket in a sequence manner.
// try to use meaningful names so that idf someone reads code they can understand it easily.

