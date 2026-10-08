const Message = document.getElementById
("message")

const Button = document.getElementById
("loadBtn")

const Dash = document.getElementById
("dashBtn")

const Profile = document.getElementById
("profile")

const Grades = document.getElementById
("grades")

const Schedule = document.getElementById
("schedule")

//function showMessage(text){
   // Message.innerHTML = text
//}

//Button.addEventListener("click", function(){
    //showMessage("Loading...")
    //Message.innerHTML = "Loading...."

    //setTimeout(function(){
        //showMessage("Welcome to JavaScript")
        //Message.innerHTML = "Welcome to Java"
   // }, 3000)

//})


/*
    function loadMessage(){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            
            let success = true

            if(success) {
                resolve("Welcome to PDM!")
            }else{
                reject("Failed to load")
            }
        },3000)
    })
}

Button.addEventListener("click", function(){
    Message.innerHTML = "Loading...."

    loadMessage()

    .then(function(result){
        Message.innerHTML = result
    })

    .catch(function(error){
        Message.innerHTML = error
    })


})
*/

/*

    function loadMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account...")
        },3000)
    })
}

Button.addEventListener("click", function(){
    Message.innerHTML = "Loading..."

    loadMessage()

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Assets...")
            },3000)
        })
    })

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Account...")
            },3000)
        })
    })

    .then(function(result){
        Message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcome Garalde")
            },3000)
        })
    })

    .then(function(result){
        Message.innerHTML = result
    })
})
*/
///////////

Button.addEventListener("click", function(){
    Message.innerHTML = "Loading..."

    Profile.innerHTML = "Profile: Waiting...";
    Grades.innerHTML = "Grades: Waiting...";
    Schedule.innerHTML = "Schedule: Waiting...";
    
    loadMessageto()
    .then(function(){
        setTimeout(function(){
            Message.innerHTML = "Cheking Assets..."
            Message.style.color = "blue"
            resolve()
        },3000)
        
    })

      loadMessageto()
    .then(function(){
        setTimeout(function(){
            Message.innerHTML = "Cheking Account..."
            Message.style.color = "blue"
            resolve()
        },3000)
        
    })

   
   

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            Profile.innerHTML = "Profile: Loaded"
            resolve()
        },1000)
    })   

    const gradePromise = new Promise(function(resolve){
        setTimeout(function(){
            Grades.innerHTML = "Grades: Loaded"
            resolve()
        },3000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            Schedule.innerHTML = "Schedule: Loaded"
            resolve()
        },5000)
    })


    Promise.all([profilePromise, gradePromise, schedulePromise])

    .then(function(){
        setTimeout(function(){
            Message.innerHTML = "Dashboard Ready!"
            resolve()
        },3000)
        
    })


})

