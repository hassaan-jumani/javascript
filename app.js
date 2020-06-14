//
//var numberOfCats = prompt("How many cats?");
//var tooManyCats = numberOfCats + 1;
//document.write(tooManyCats);
// var character = prompt("charater or string");
// char = character.charCodeAt(0);
// if(char >= 48 && char <= 57 ){
//     alert("its a number")
// }
// if(char >= 58 && char <= 90 ){
//     alert("its a upper case")
// }
// else{
//     alert("its a lower case")
// }

//task 2

// var first;
// var second;
// first = prompt("enter first number");
// second= prompt("enter second number");
// var one=parseInt(first)
// var two = parseInt(second)
// if(one>two){
//     alert(one)
// }
// else if(two>one){
//     alert(two)
// }
// else {
//     alert("both are same")
// }

//task3

// var number;
// number = prompt("enter your number");
// // if(Math.sign(number)===-1){
// //     alert("negative");
// //   }
// if(Math.sign(number)===-1){
//     alert("negative")
// }
// else if (Math.sign(number) === 1){
//     alert('positive');
//   }
// else{
//     alert("zero");
//   }
//task 5
// var user = "123789"

// var password = prompt("enter your password");
// if(user==!password){
//     alert("Please enter your password")
// }
// else{
//     alert("Correct! The password you entered matches the original password")
// }
//task 6
// var greeting;
// var hour = 19;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }
// alert(greeting)


//task7

// var time = prompt("Enter the time please time should be in 24 hours clock format like: 1900 = 7pm");
// if(time >= 0000 && time<= 1200 ){
//     alert("Good Morning")
// }
// else if(time >= 1200 && time<= 1700 ){
//     alert("Good Afternoon")
// }
// else if(time >= 1700 && time<= 2100 ){
//     alert("Good Evening")
// }
// else if(time >= 2100 && time<= 2359 ){
//     alert("Good Night")
// }


//task2

// var ray;
// ray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(ray[0])
// document.write("<br>")
// document.write(ray[1])
// document.write("<br>")
// document.write(ray[2])
// document.write("<br>")

//task 3 
// for (var i = 0; i <= 10; i++) {
//     document.write(i);
//     document.write("<br>")
// }

//task 4

var table = prompt("enter the number  of which table has been created");
var times = prompt("enter the length multplication table");

var number = parseInt(table);
var time = parseInt(times);

for (var i = 1; i <= time; i++){
     document.write(number*i);
     document.write("<br>");
    
    

}

