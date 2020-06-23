// Chapter 21-25 
// task 1
// var first_name = prompt("Enter your first name");
// var last_name = prompt("Enter your last name");
// var full_name = first_name + " " + last_name;
// document.write("welcome Mr."+ " " + full_name)

//task 2

// var mobile = prompt("Enter your favourite mobile phone")
// document.write("My Favourite mobile phone is:" + " " + mobile + "<br>");
// var len = mobile.length
// document.write("Length of the string:" + " " + len)

//task3 
 
// var str = "Pakistani";
// var ind = str.indexOf("n");
// document.write("Strng: Pakistani"+ "<br>");
// document.write("Index of 'n'" + " " + ind);

//task 4

// var stri = "Hello World"
// var inde = stri.lastIndexOf("l");
// document.write("String: Hello World" + "<br>" + "Last indexof 'l'" + " " + inde)

//task 5

// var str = "Pakistani";
//  var ind = str.charAt(3);
// document.write("Strng: Pakistani"+ "<br>");
// document.write("Character at position 3 is " + " " + ind);

//task 6

// var first_name = prompt("Enter your first name");
// var last_name = prompt("Enter your last name");
// var full_name= first_name.concat(last_name);
// document.write("welcome Mr."+ " " + full_name)

//task 7

// city= "Hyderabad"




//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var ne = message.replace(/and/g,"&");
// document.write(ne);

//task 9
// var pro = prompt("enter the number");
// document.write("Value:" + " " + pro + "<br>" + "type:" + " " + typeof(pro)+ "<br>");
// num= parseInt(pro);
// document.write("Value:" + " " + num + "<br>" + "type:" + " " + typeof(num));

//task  10

// var input = prompt("enter yhe input");
// upper = input.toUpperCase();
// document.write(upper);

//task 11

//task 12

// var num = 35.36 ;
// var stri = num.toString(8);
// alert(stri)

// task 13

// var username = prompt("Enter your username");
// var comma = ","
// var excl = "!"

// var asc1 = comma.charCodeAt();
// var asc2 = excl.charCodeAt();
// var asc3;
// var asc4;
// for(var i = 0; i<username.length;i++){
//     var user = username.charCodeAt(i);
//     if(user.charAt(i) === "33" || user.charAt(0) === "44" || user.charAt(i) === asc3 ||user.charAt(i) === 46 ){
//         alert("Enter a valid username");
//     } 
// }

// for(var i = 0 ; i < username.length; i++){
//     if(username.charAt(i) === asc1 || username.charAt(i) === asc2 || username.charAt(i) === asc3 ||username.charAt(i) === ){
//         alert("Enter a valid username");

//     }
// }

// tas 14

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Enter the input to search");
// var search = input.toLowerCase();
// for(var i =0;i< A.length; i++){
//     if (search === A[i]){
//         alert(A[i] + "is available at index "+ i + " in our baery")
    
//     }
//     else{
//         alert("we are sorry pastry is not available in our baery")
//     }
// }

// chapter 26  to 30

//task 1

// var number = prompt("enter any positive number");
// if(number > 0){
//     document.write("number: " + number + "<br>" + "roundoff value " + Math.round(number) +  "<br>" +  "floor value " + Math.floor(number) + "<br>" + "ceil value" + Math.ceil(number))
// }

//task2

// var number = prompt("enter any negative number");
// if(number < 0){
//     document.write("number: " + number + "<br>" + "roundoff value " + Math.round(number) +  "<br>" +  "floor value " + Math.floor(number) + "<br>" + "ceil value" + Math.ceil(number))
// }

//task 3

// var absolute = prompt("enter the absolute value");
// document.write(" the absolute value of " + absolute + " is " + Math.abs(absolute));

//task4

// var Dice = Math.floor(6*Math.random())+1;
// alert("random dic no:  " + Dice)

//task 5

// var coin = Math.floor(2*Math.random())+1;
// if(coin===2){
//     document.write(coin + "<br>")
//     document.write("random coin value : Heads")
// }
// else{
//     document.write(coin + "<br>")
//     document.write("random coin value: Tails")
// }

//task 6

// var ran_number = Math.floor(100*Math.random())+1
// document.write("random number between 1 to 100: " + ran_number)

//task7


//task 8

// var suggest = Math.floor(10*Math.random())+1

// var num = parseInt(prompt("Enter the number from 1 to 10"))

// if(num === suggest){
//     document.write("you suggest the correct number")
// }

// else{
//     document.write("Sorry try again")
// }


// chapter 31-34

//task 1

// var current = new Date;
// document.write(current);

//task 2
// var month = ["january", "febuary" , "march", "april", "may", "june"  ,"july" , "august" , "september" , "october" , "november" , "december"];
// var current = new Date;
// var ans = month[current.getMonth()]
// document.write(ans);

//task 3 
// var days = ["sunday", "monday", "tuesday", "Wednesday", "thursday", "friday", "saturday"]
// var current = new Date;
// var day = current.getDay();
// alert(days[day].slice(0,3))

//task 4

// var days = ["sunday", "monday", "tuesday", "Wednesday", "thursday", "friday", "saturday"]
// var current = new Date;
// var day = days[current.getDay()];
// if(day==="sunday" || day ==="saturday"){
//     alert("Funday!!")
// }
// else{
//     alert(day)
// }

//task 5

// var current = new Date;
// var date = current.getDate();


//task 6

//chapter 35-38 task 1

// function time(){
//  var current = new Date;
//  alert(current)
// }
// time()

//task 2


// function greet() {
//     var first = prompt("your first name");
//     var last = prompt("your last name");
//     document.write(first + " " + last)
// }
// greet()

//task 4
// function clac(num1,num2,operator) {
//     num1 = prompt("Enter the first number");
//     num2 = prompt("enter the second number")
//     operator = prompt("enter the perator")
//     var ans = parseInt(num1) + operator + parseInt(num2)
//     alert(ans)


// }
// clac(num1,num2,operator)

//task 5

// function square (arg){
//     var arg = prompt("Enter the number")
//    var ans =  Math.pow(arg,2)
//    document.write(ans)
// }
// square()

//task 6


// function factorialize() {
//     var num = parseInt(prompt("Enter the desired number"))
//     var result = num
//     if (num === 0 || num === 1) {
//       return 1; 
//     }
//     while (num > 1) { 
//       num--; 
//       result = result * num; 
//     }
//       alert(result); // 120
  
// }
//   factorialize();

//task 7

// function number(first,second) {
//     for(var i = first; i <= second; i++){
//         document.write(i)
//     }


// }
// number(5,9)

//task 9

// function area(){
//     var 
//     var   A = area * width
// }

//task 10

// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           document.write(false);
//       }
//     }
//     return document.write(true);
//    }
//    palindrome("A man, a plan, a canal. Panama");


//task 11


// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   alert(str.join(' '));
// }
// titleCase("I'm a little tea pot");

// task 12

// function longest(str){
//   str = str.split(' ');
//   var longestWord = 0;
//   for (var i = 0; i< str.length; i++) {
//     if(str[i].length > longestWord){
//       longestWord = str[i].length
//       var word = str[i]
//     }

//   }
//   alert(word)
// }
// longest("I'm a littletea pot")

//task 13

// function alcCircumference(){
//   var radius = parseInt(prompt("enter the radius"));
//   var draft = radius *3.141592653589793 *2
//   document.write(draft)
  
  
// }

// alcCircumference()

// function calcArea(){
//   var radius = parseInt(prompt("enter the radius"));
//    var draft = Math.pow(radius, 2);
//    var draft2 = draft * 3.141592653589793;
//    document.write(draft2)

// }

// calcArea()