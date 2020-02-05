var sex = "Male"
var age = 0
var height = 0
var weight = 0
var activity = "Low"
var aim = "Lose Weight"
var diet = "Vegan"

window.onload = function () {
    changeAge()
    changeHeight()
    changeWeight()
    changeActivity()
};
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
    else if (x == 4) {
        calculateCalories()
        calculateMacros()
        document.getElementById("confirmation-page").style.display="none"
        document.getElementById("results-page").style.display = "block"
        createMeals()
    }
    else if (x == 5){
        document.getElementById("results-page").style.display = "none"
        document.getElementById("sample-diet-page").style.display="block"
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
    document.getElementById("cal-intake").innerText = calIntake.toString()
    document.getElementById("cal1-intake").innerText = calIntake.toString()
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
    document.getElementById("p-intake").innerText = protienQuantity.toString()
    document.getElementById("p1-intake").innerText = protienQuantity.toString()

    fatQuantity = calIntake / 36
    fatQuantity = Math.round(fatQuantity)
    document.getElementById("f-intake").innerText = fatQuantity.toString()
    document.getElementById("f1-intake").innerText = fatQuantity.toString()
    

    carbQuantity = (calIntake - (4 * protienQuantity) - (9 * fatQuantity)) / 4
    carbQuantity = Math.round(carbQuantity)
    document.getElementById("c-intake").innerText = carbQuantity.toString()
    document.getElementById("c1-intake").innerText = carbQuantity.toString()

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawGraph);
}

function drawGraph(){
    var data = google.visualization.arrayToDataTable([
        ['Macronutrients', 'Quantitied (in grams)'],
        ['Protein',  protienQuantity],
        ['Fat',  fatQuantity],
        ['Carbs', carbQuantity]
    ]);
    var options = {
        pieSliceText: 'label',
        backgroundColor: 'transparent',
        pieSliceBorderColor: 'transparent',
        legend: 'none',

    };
    var chart = new google.visualization.PieChart(document.getElementById('pie-chart')); //pie-chart is the ID of the DIV i want the pie chart to be placed
    chart.draw(data, options);
}

var breakfast = []
var lunch = []
var dinner = []
function createMeals() {
    //breakfast: 25% lunch: 37.5% dinner:37.5%
    
    //defining how many calories and nutrients the meals should have
    //[number of calories in meal, quantity of protein in meal, quantity of fats in meal, quantity of carbs in meal]
    breakfastNutrients = [calIntake * 0.25, protienQuantity * 0.25, fatQuantity * 0.25, carbQuantity * 0.25]
    lunchNutrients = [calIntake * 0.375, protienQuantity * 0.375, fatQuantity * 0.375, carbQuantity * 0.375]
    dinnerNutrients = [calIntake * 0.375, protienQuantity * 0.375, fatQuantity * 0.375, carbQuantity * 0.375]

    //defining each breakfast food, its dietary requirements and calories and nutrients per 100g
    //breakfast variable = [name, vegan?, vegitarian?, gluten free?, calories/100g, protien/100g, fats/100g, carbs/100g]
    var yogurtGranola = ["Granola with Yogurt", false, true, false,136, 7.7, 3.1, 20.3]
    var porridge = ["Porridge", true, true, true, 96, 5, 2.6, 13.5]
    var baconEggs = ["Bacon and fried Eggs", false, false, true, 305, 22.3, 23, 1.2]
    var eggsToast = ["Boiled Eggs on Toast", false, true, false, 181, 11.4, 8.8, 12.8]
    var proteinShake = ["Protein Shake", true, true, true, 68, 7.6, 3.4, 1]
    var banana = ["Banana", true, true, true, 84, 1, 0.3, 21.6]

    //defining which foods are in each meal. I have put 3 options in each meal and two or 3 foods in each option
    //[[Options 1], [options 2], [options 3]]
    var breakfastFoods = [[yogurtGranola, porridge], [baconEggs, eggsToast, proteinShake], [banana]]
    
    //defining an array to put the foods the user can eat in
    //[choice between options 1, choice between options 2, choice between options 3]
    var yourBreakfast = []
    
    //from here
    var numFoodsInMeal, fractionFood1, fractionFood2, fractionFood3;
    if (breakfastNutrients[0] >= 700) {
        numFoodsInMeal=3
        fractionFood1 = 0.5
        fractionFood2= 0.4
        fractionFood3 = 0.1
    }
    else if (breakfastNutrients[0] >= 300 && breakfastNutrients[0] < 700){
        numFoodsInMeal=2
        fractionFood1 = 0.65
        fractionFood2 = 0.35
    }
    else{
        numFoodsInMeal=1
        fractionFood1 = 1
    }
    var numFoods =0;
    var yourFinalBreakfast = [[],[],[]] //[[name, quantity],[name, quantity], [name,quantity]]
    // this for loop goes through each of the options in the breakfast foods array
    for (var i = 0; i < numFoodsInMeal; i++) {
        //this goes through the foods in the option that its currently looking at
        for (var x = 0; x < breakfastFoods[i].length; x++) {
            //if the choice between options [i] in the yourBreakfast array is already takes, then go to the next option
            if (numFoods == i + 1) {
                continue;
            }
            //if the user is vegan and the breakfast food is vegan
            if ((diet == "Vegan" && breakfastFoods[i][x][1] == true) || (diet == "Vegitarian" && breakfastFoods[i][x][2] == true) || (diet == "Gluten Free" && breakfastFoods[i][x][3] == true) || (diet == "None")) {
                //set the choice between options [i] in yourBreakfast array to this food
                console.log("i="+i, ", x="+x)
                numFoods+=1
                yourFinalBreakfast[i][0] = breakfastFoods[i][x][0]
                yourFinalBreakfast[i][1] = Math.round(((breakfastNutrients[0] * eval("fractionFood"+(i+1))) / breakfastFoods[i][x][4]) * 100)
                for(var t =0; t<4; t++){
                    yourFinalBreakfast[i][t+2] = Math.round((yourFinalBreakfast[i][1]/100)*breakfastFoods[i][x][t+4])
                } 
            }
        }
    }
    console.log(breakfastNutrients[0], yourFinalBreakfast[0], yourFinalBreakfast[1], yourFinalBreakfast[2])
    
    //to here
    /*
    // this for loop goes through each of the options in the breakfast foods array
    for (var i = 0; i < breakfastFoods.length; i++) {
        //this goes through the foods in the option that its currently looking at
        for (var x = 0; x < breakfastFoods[i].length; x++) {
            //if the choice between options [i] in the yourBreakfast array is already takes, then go to the next option
            if (yourBreakfast.length == i + 1) {
                continue;
            }
            //if the user is vegan and the breakfast food is vegan
            if (diet == "Vegan" && breakfastFoods[i][x][1] == true) {
                //set the choice between options [i] in yourBreakfast array to this food
                yourBreakfast[i] = breakfastFoods[i][x]
            }
            else if (diet == "Vegitarian" && breakfastFoods[i][x][2] == true) {
                yourBreakfast[i] = breakfastFoods[i][x]
            }
            else if (diet == "Gluten Free" && breakfastFoods[i][x][3] == true) {
                yourBreakfast[i] = breakfastFoods[i][x]
            }
            else if (diet == "None") {
                yourBreakfast[i] = breakfastFoods[i][x]
            }
        }
    }
    console.log(yourBreakfast[0][0], yourBreakfast[1][0], yourBreakfast[2][0])

    var yourFinalBreakfast = [[0,0],[0,0],[0,0]] //[[name, quantity],[name, quantity], [name,quantity]]
    var z;
    if (breakfastNutrients[0] >= 700) {
        z = 3
        yourFinalBreakfast[0][0] = yourBreakfast[0][0]
        yourFinalBreakfast[0][1] =Math.round(((breakfastNutrients[0] * 0.5) / yourBreakfast[0][4]) * 100)
        yourFinalBreakfast[1][0] = yourBreakfast[0][0]
        yourFinalBreakfast[1][1] = Math.round(((breakfastNutrients[0] * 0.4) / yourBreakfast[1][4]) * 100)
        yourFinalBreakfast[2][0] = yourBreakfast[0][0]
        yourFinalBreakfast[2][1] = Math.round(((breakfastNutrients[0] * 0.1) / yourBreakfast[2][4]) * 100)
    }
    else if (breakfastNutrients[0] >= 300 && breakfastNutrients[0] < 700) {
        z=2
        yourFinalBreakfast[0][0] = yourBreakfast[0][0]
        yourFinalBreakfast[0][1] = Math.round(((breakfastNutrients[0] * 0.65) / yourBreakfast[0][4]) * 100)
        yourFinalBreakfast[1][0] = yourBreakfast[1][0]
        yourFinalBreakfast[1][1] = Math.round(((breakfastNutrients[0] * 0.35) / yourBreakfast[1][4]) * 100)
    }
    else {
        z=1
        yourFinalBreakfast[0][0] = yourBreakfast[0][0]
        yourFinalBreakfast[0][1] = Math.round((breakfastNutrients[0]/yourBreakfast[0][4])*100)
    }
    

    for (var i =0; i<z; i++){
        for(var t =0; t<4; t++){
            yourFinalBreakfast[i][t+2]=Math.round((yourFinalBreakfast[i][1]/100)*yourBreakfast[i][t+4])
        }  
    }
    console.log(breakfastNutrients[0], yourFinalBreakfast[0], yourFinalBreakfast[1], yourFinalBreakfast[2])*/
}
