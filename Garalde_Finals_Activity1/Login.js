const var1 = document.getElementById("name")


const Click = document.getElementById("ck")
//click
Click.addEventListener(
    "click", function () {
         var1.innerHTML = "You Clicked the Button!"
    }
)

const Double = document.getElementById("dck")

//double click
Double.addEventListener(
    "dblclick", function () {
         var1.innerHTML = "You Double Clicked the Button!"
    }
)

const ph = document.getElementById("press")