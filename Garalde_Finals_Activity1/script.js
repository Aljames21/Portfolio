console.log(document)

const var1 = document.getElementById("output")
console.log(var1)

const Button1 = document.getElementById("btn1")
console.log(Button1)



//1 click
Button1.addEventListener(
    "click", function () {
         var1.innerHTML = "Welcome to JS"
    }
)



const Double = document.getElementById("doubleClick")

//double click
Double.addEventListener(
    "dblclick", function () {
         var1.innerHTML = "Double Click"
    }

)

const Img1 = document.getElementById("Img")

//hover in
Img1.addEventListener (

    "mouseover", function() {
        Img1.style.transform = "scale(1.1)"
        var1.innerHTML = "Mouse reached the image";
    }
)

//hover out
Img1.addEventListener (

    "mouseout", function() {
        Img1.style.transform = "scale(1)"
        var1.innerHTML = "Mouse leaves the image";
    }
)


const Input = document.getElementById("input")

Input.addEventListener (

    "focus", function() {
        Input.style.backgroundColor = "Yellow";
    }
)

Input.addEventListener (

    "blur", function() {
        Input.style.backgroundColor = "White";
    }
)

Input.addEventListener(
    "change", function(){
        var1.innerHTML = "Hello: " + Input.value + "!"
    }
)

Input.addEventListener(
    "input", function(){
        var1.innerHTML = "Typing: " + Input.value + "!"
    }
)



/*
    let name = window.prompt("Enter your name");
    window.alert("Warning!");

    let age = window.prompt("Enter your age"); 

    if (age>=18){
        console.log("You are eligible to vote")
    }

    else if (age<18){
        console.log("You are not eligible to vote")
    }

    else{
        console.log("Invalid input!")
    }
*/


 