var sex="Male"
var age=0
var height=0
var weight=0
var activity="Low"
var aim="Lose Weight"
var diet="Vegan"

/*function begin(){
    document.getElementById("welcome-page").style.display="none"
    document.getElementById("details1-page").style.display="block"
}*/

function radio(in1, in2, in3, in4){ //taking the 4 IDs of the elements involved
    var z=2 //this will be the number going into the for loop
    el1=document.getElementById(in1) //this is the element that is selected
    el2=document.getElementById(in2) //the other elements will all be changed to unselected
    if (in3!=0 && in4!=0){ //if 4 IDs are entered into the function
        z=4 //as there are 4 elements, the for loop needs to loop four times
        el3=document.getElementById(in3)
        el4=document.getElementById(in4)
    }
    else if(in3!=0){ //if 3 IDs are entered into the function
        z=3 //as there are 3 elements, the for loop needs to loop 3 times
        el3=document.getElementById(in3)
    }
    for (i=1;i<=z;i++){ //for loop starting at 1 and going to integer z
        if(eval("el"+i).classList.contains('radio1')==true){ //if 'el'i item is selected
            eval("el"+i).classList.remove('radio1') //remove the selected styling class
            eval("el"+i).classList.add('radio2') //add unselected styling class
            eval("el"+1).classList.remove('radio2') //remove unselected class from element being selected 
            eval("el"+1).classList.add('radio1') //add selected class to element being selected (''el1')
        }
    }
}
function next(x){
    if (x == 0) {
        document.getElementById("details1-page").style.display = "block"
        document.getElementById("details2-page").style.display = "none"
        document.getElementById("welcome-page").style.display = "none"
    }
    else if (x == 1) {
        if (age>13 && age<61){
           document.getElementById("details1-page").style.display="none"
           document.getElementById("details2-page").style.display="block" 
           document.getElementById("details3-page").style.display="none"
           document.getElementById("sex1").innerText=sex       
        }
        else{
            alert("You have to be between the ages 14 and 60 to use this tool")
        }
    }
    else if (x==2){
        if(height>129 && height<251){
            if (weight>39 && weight<141){
                document.getElementById("activity1").innerText=activity
                document.getElementById("details2-page").style.display="none"
                document.getElementById("details3-page").style.display="block"
                document.getElementById("confirmation-page").style.display="none" 
            }
            else{
                alert("You have to be between the weight of 40 and 140 kg to use this tool")
            }
        }
        else{
            alert("You have to be between the height of 130 and 250 cm to use this tool")
        }

    }
    else if (x==3){
        document.getElementById("aim1").innerText=aim
        document.getElementById("diet1").innerText=diet        
        document.getElementById("details3-page").style.display="none"
        document.getElementById("confirmation-page").style.display="block"
    }
    else if (x==4){
        document.getElementById("confirmation-page").style.display="none"
        document.getElementById("results-page").style.display="block"
    }
    
}



function changeGender(sexIn){
    sex=sexIn
    document.getElementById("sex1").innerText=sex
}
function changeAge(){
    if(document.getElementById("age").value == ""){
        age=0
    }
    else{
        age=document.getElementById("age").value 
    }
    document.getElementById("age1").innerText=age
}
function changeHeight(){
    if(document.getElementById("height").value == ""){
        height=0
    }
    else{
        height=document.getElementById("height").value 
    }
    document.getElementById("height1").innerText=height+" cm"
}
function changeWeight(){
    if(document.getElementById("weight").value == ""){
        weight=0
    }
    else{
        weight=document.getElementById("weight").value 
    }
    document.getElementById("weight1").innerText=weight+" kg"
}

function changeActivity(){
    activity=document.getElementById("activity-level").value
    document.getElementById("activity1").innerText=activity
}
function changeAim(aim1){
    aim=aim1
    document.getElementById("aim1").innerText=aim
}
function changeDiet(diet1){
    diet=diet1
    document.getElementById("diet1").innerText=diet
}

var BMR
var maintainance
var calIntake =0
function calculateCalories(){
    console.log("Sex: " + sex, "Age: " + age, "Height: "+ height, "Weight: " + weight)
    console.log("Activity Level: " + activity, "Aim: " + aim)
    if (sex == "Male"){
    BMR = (13.75 * weight) + (5 * height) - (6.76 * age) + 66
    }
    else{
       BMR = (9.56 * weight) + (1.85 * height) - (4.68 * age) + 655
    }
    if (activity == "Low"){
        maintainance = BMR * 1.2
    }
    else if (activity == "Medium"){
        maintainance = BMR * 1.55
    }
    else{
        maintainance = BMR * 1.725
    }

    if (aim == "Lose Weight"){
        calIntake = maintainance * 0.8
    }
    else if (aim == "Maintain"){
        calIntake = maintainance
    }
    else{
        calIntake = maintainance * 1.2
    }
    calIntake = Math.round(calIntake)
}

var protienQuantity
var fatQuantity
var carbQuantity
function calculateMacros(){
    if (aim == "Lose Weight"){
        protienQuantity = weight * 2.2
    }
    else if (aim == "Maintain"){
        protienQuantity = weight * 1.54
    }
    else{
        protienQuantity = weight * 2.2
    }
    protienQuantity = Math.round(protienQuantity)
    
    fatQuantity = calIntake / 36
    fatQuantity = Math.round(fatQuantity)
    

    carbQuantity = (calIntake - (4 * protienQuantity) - (9 * fatQuantity)) / 4
    carbQuantity = Math.round(carbQuantity)
    console.log("Ampunt of Carbs: " + carbQuantity + " grams")
}

function drawGraph(){
    var data
}

