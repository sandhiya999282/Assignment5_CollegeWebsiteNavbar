//1.Create a callback function that prints a message after 2 seconds.
function message(){
    console.log("welcome");
}
setTimeout(message,2000); 




// 2.Create a Car class with brand and model properties.
const { model } = require("mongoose")

class Car{
    constructor(brand, model){ 

        this.brand = brand;
        this.model = model;

    }
}
const Car1 = new Car("A","B");
console.log(Car1.brand); 
console.log(Car1.model);






//3.Create a Vehicle class and inherit a Bike class from it.

class vechicle{
    start(){
        console.log("Vechicle Start");
    }
}
class bike extends vechicle{

}

const bi = new bike()
    bi.start(); 







//4. Create a button and change the text of a heading when clicked. 

/*<h1 id="title">Good Morning</h1> 
    <button onclick="changeText()"> Click </button> 

function changeText(){
    document.getElementById("title").innerHTML="Good Night"; 
}*/






//5.Create an input field and display whatever the user types.   

    /*<input type="text" id="name">
    <p id="output"></p> 

    <script>
        document.getElementById("name").addEventListener("input", function(){
            document.getElementById("output").innerHTML= this.value;
        });
    </script>*/  






//6. Change the background color of a page using JavaScript.
    /*<button onclick="changeColor()">
    Change Color
   </button> 
   <script>
    function changeColor() 
    {
        document.body.style.backgroundColor = "skyblue";
    }
   </script>*/

    






// 7.Create a counter button that increases a number on every click. 

/*<h1 id="count">0</h1>
<button onclick="increase()"> BUTTON </button> 

let count = 0;
function increase(){
    count++;

    document.getElementById("count").innerHTML=count;
}*/






     







