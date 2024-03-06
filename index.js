let fname;
let lname;
let age;
let amount;
let name;
let number;
 
function display(){
    document.getElementById("name").innerHTML = "Name: " + name;
    document.getElementById("amount").innerHTML = "Balance: " + amount +"XAF";
}

document.getElementById("start").onclick = function () { 
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("age").value;
    amount = document.getElementById("deposit").value;
    amount = Number(amount)
    name = fname + " " +  lname;
   display()
  
}


document.getElementById("over").onclick = function (){
    number = Math.floor(Math.random()*7+1)
    if(number > 4){
        document.getElementById("result").innerHTML = "Win"
        amount += 250;
        }
    else {
        document.getElementById("result").innerHTML = "Fail"
        amount -= 250;
        }
        display()

        document.getElementById("inside").innerHTML = "Number:" + number 
}

document.getElementById("4").onclick = function (){
    number = Math.floor(Math.random()*7+1)
    if(number === 4){
        document.getElementById("result").innerHTML = "Win"
        amount += 250;
       }
    else {
        document.getElementById("result").innerHTML = "Fail"
        amount -= 250;
        
    }
    display()
       document.getElementById("inside").innerHTML = "Number:" + number 
}


document.getElementById("under").onclick = function (){
    number = Math.floor(Math.random()*7+1)
    if(number < 4){
        document.getElementById("result").innerHTML = "Win"
        amount += 250
        }
    else {
        document.getElementById("result").innerHTML = "Fail"
        amount -= 250
        
      
    }
    display()
    document.getElementById("inside").innerHTML = "Number:" + number 
}