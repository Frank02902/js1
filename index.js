let fname;
let lname;
let age;
let amount;
let name;
let number;
 

document.getElementById("start").onclick = function () { 
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("age").value;
    amount = document.getElementById("deposit").value;
    amount = Number(amount)
    name = fname + " " +  lname;
    document.getElementById("name").innerHTML = name;
    document.getElementById("amount").innerHTML = amount;
  
}


document.getElementById("over").onclick = function (){
    number = Math.floor(Math.random()*7+1)
    if(number > 4){
        document.getElementById("result").innerHTML = "Win"
        amount += 250;
        document.getElementById("amount").innerHTML = amount;}
    else {
        document.getElementById("result").innerHTML = "Fail"
        amount -= 250;
        document.getElementById("amount").innerHTML = amount}

        document.getElementById("inside").innerHTML = "Number:" + number 
}

document.getElementById("4").onclick = function (){
    number = Math.floor(Math.random()*7+1)
    if(number === 4){
        document.getElementById("result").innerHTML = "Win"
        amount += 250;
        document.getElementById("amount").innerHTML = amount}
    else {
        document.getElementById("result").innerHTML = "Fail"
        amount -= 250;
        document.getElementById("amount").innerHTML = amount}
        document.getElementById("inside").innerHTML = "Number:" + number
}

document.getElementById("under").onclick = function (){
    number = Math.floor(Math.random()*7+1)
    if(number < 4){
        document.getElementById("result").innerHTML = "Win"
        amount += 250
        document.getElementById("amount").innerHTML = amount}
    else {
        document.getElementById("result").innerHTML = "Fail"
        amount -= 250
        document.getElementById("amount").innerHTML = amount}
        document.getElementById("inside").innerHTML = "Number:" + number
}