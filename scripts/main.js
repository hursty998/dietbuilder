var sex = "Male"
var age = 0
var height = 0
var weight = 0
var activity = "Low"
var aim = "Lose Weight"
var diet = "Vegan"
var numCoursesInMeal;

window.onload = function () {
    changeAge()  //the following functions are called in case the page is rereshed and the fields are still populated
    changeHeight()
    changeWeight()
    changeActivity()
};

//this function is used for all the radio buttons. in1 is the one that is selected, the others are deselected
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
//this function is called whenever going between pages. It takes parameter x which decides which page to show
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
        document.getElementById("select-meal-page").style.display="none"
        document.getElementById("results-page").style.display = "block"
        createMeals()
        editOverview()
    }
    else if (x == 5){
        document.getElementById("results-page").style.display = "none"
        document.getElementById("select-meal-page").style.display="block"
        document.getElementById("display-meal").style.display = "none"
        document.getElementById("display-overview").style.display = "none"

    }
    else if (x == 6){
        document.getElementById("select-meal-page").style.display="none"
        document.getElementById("display-meal").style.display = "block"
    }
    else if (x == 7){
        document.getElementById("select-meal-page").style.display="none"
        document.getElementById("display-overview").style.display = "block"
    }

    
}


//this is called whenever either of the sex radio buttons is clicked
function changeGender(sexIn){
    sex=sexIn
    document.getElementById("sex1").innerText=sex
}
//whenever the age text box is changed, this function is called to change the variable age
function changeAge(){
    if(document.getElementById("age").value == ""){
        age=0
    }
    else{
        age=document.getElementById("age").value 
    }
    document.getElementById("age1").innerText=age
}
//whenever the height text box is changed, this function is called to change the variable
function changeHeight(){
    if(document.getElementById("height").value == ""){
        height=0
    }
    else{
        height=document.getElementById("height").value 
    }
    document.getElementById("height1").innerText=height+" cm"
}
//whenever the weight text box is changed, this function is called to change the variable
function changeWeight(){
    if(document.getElementById("weight").value == ""){
        weight=0
    }
    else{
        weight=document.getElementById("weight").value 
    }
    document.getElementById("weight1").innerText=weight+" kg"
}
//called when the value of the dropdown changes
function changeActivity(){
    activity=document.getElementById("activity-level").value
    document.getElementById("activity1").innerText=activity
}
//called when the aim radio buttons are clicked to change the aim variable
function changeAim(aim1){
    aim=aim1
    document.getElementById("aim1").innerText=aim
}
//called whenever the diet radio buttons are clicked to change the diet variable
function changeDiet(diet1){
    diet=diet1
    document.getElementById("diet1").innerText=diet
}

var BMR
var maintainance
var calIntake =0
//this function calculate BMR, maintainance and calorie intake, then outputs it to results page
function calculateCalories(){
    console.log("Sex: " + sex, "Age: " + age, "Height: "+ height, "Weight: " + weight)
    console.log("Activity Level: " + activity, "Aim: " + aim, "Diet: "+diet)
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
var yourFinalBreakfast
var yourFinalLunch
var yourFinalDinner
var overallNutrients
//this function calculates the recomended quantities of macros and displays to results page
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

    google.charts.load("current", {packages:["corechart"]}); //loads pie chart script
    google.charts.setOnLoadCallback(drawResultsChart); 
    //this calls the drawResultsChart function once the pie chart script has been loaded
}
//this function defines the data to go in the pie chart and its design, then draws the chart
function drawResultsChart(){
    var data = google.visualization.arrayToDataTable([
        ['Macronutrients', 'Quantitied (in grams)'],
        ['Protein',  protienQuantity],
        ['Fat',  fatQuantity],
        ['Carbs', carbQuantity]
    ]);
    var courses = {
        pieSliceText: 'label',
        backgroundColor: 'transparent',
        pieSliceBorderColor: 'transparent',
        legend: 'none',

    };
    var chart = new google.visualization.PieChart(document.getElementById('pie-chart')); 
    //pie-chart is the ID of the DIV i want the pie chart to be placed
    chart.draw(data, courses);
}

function createMeals() {
    //breakfast: 25% lunch: 37.5% dinner:37.5%
    
    //defining how many calories and nutrients the meals should have
    //[number of calories in meal, quantity of protein in meal, quantity of fats in meal, quantity of carbs in meal]
    breakfastNutrients = [calIntake * 0.25, 0, 0, 0]
    lunchNutrients = [calIntake * 0.375, 0, 0, 0]
    dinnerNutrients = [calIntake * 0.375, 0, 0, 0]
    overallNutrients = [calIntake, 0, 0, 0]

    //defining each breakfast food, its dietary requirements and calories and nutrients per 100g
    //breakfast variable = [name, vegan?, vegitarian?, gluten free?, calories/100g, protien/100g, fats/100g, carbs/100g]
    var yogurtGranola = ["Granola with Yogurt", false, true, false,136, 7.7, 3.1, 20.3, "yogurtGranola.jpeg"]
    var porridge = ["Porridge", true, true, true, 96, 5, 2.6, 13.5, "porridge.jpg"]
    var baconEggs = ["Bacon and fried Eggs", false, false, true, 305, 22.3, 23, 1.2, "baconEggs.jpg"]
    var eggsToast = ["Boiled Eggs on Toast", false, true, false, 181, 11.4, 8.8, 12.8, "eggsToast.jpg"]
    var proteinShake = ["Protein Shake", true, true, true, 68, 7.6, 3.4, 1, "proteinShake.jpg"]
    var banana = ["Banana", true, true, true, 84, 1, 0.3, 21.6, "banana.jpg"]

    var pastaChicken = ["Pesto Pasta & Chicken", false, false, false, 150, 17, 2.3, 15, "pastaChicken.jpg"]
    var pastaTofu = ["Pesto Pasta & Tofu", true, true, false,210, 12.5, 10.8, 19.5, "pastaTofu.jpg"]
    var riceChicken = ["Chicken with Rice", false, false, true, 248.5, 17.3, 1.7, 40, "riceChicken.jpg"]
    var avacadosEggs = ["Avacados & Eggs on Toast", false, true, false, 205, 7.1, 9.6, 21.7, "avacadosEggs.jpg"]
    var avacadosToast = ["Avacados on Toast", true, true, false, 236.5, 7.5, 9.7, 32.3, "avacadosToast.jpeg"]
    var avacadosGF = ["Avacados & Eggs on Gluten Free Toast", false, true, true, 205, 7.1, 9.6, 21.7, "avacadosGF.jpg"]
    var yogurt = ["Natural Vanilla Yogurt", false, true, true, 78, 2.9, 0, 17, "yogurt.jpg"]
    var apple = ["Apple", true, true, true, 52, 0.3, 0.2, 14, "apple.jpg"]

    var spagetti = ["Spagetti Bolognese", false, false, false, 121, 5.8, 3.6, 16, "spagetti.jpg"]
    var quornSpagetti = ["Quorn Spagetti Bolognaise", true, true, false, 111, 7.8, 3.6, 18, "quornSpagetti.jpg"]
    var chilie = ["Chili with Rice", false, false, true, 151, 9, 3.6, 20, "chilie.jpg"]
    var chickenPizza =["Chicken on Pizza", false, false, false, 291, 11, 13, 32, "chickenPizza.jpg"]
    var pepperPizza = ["Pepper an Spinach Pizza", true, true, false, 260, 3, 13, 31, "pepperPizza.jpg"]
    var veganPizza = ["Vegan Pizza Margarita", true, true, false, 260, 3, 13, 31, "veganPizza.jpg"]
    var GFpizza = ["Gluten Free Chicken Pizza", false, false, true, 291, 11, 13, 32, "GFPizza.jpg"]
    var brownie = ["Chocolate Brownie", false, true, false, 407, 4.4, 6.2, 84, "brownie.jpg"]
    var icecream = ["Plant Based Icecream", true, true, true, 207, 3.5, 11, 24, "icecream.jpg"]



    //defining which foods are in each meal. I have put 3 courses in each meal and up to 3 foods in each option
    //[[course 1],  course 2],  course 3]]
    var breakfastFoods = [[yogurtGranola, porridge], [baconEggs, eggsToast, proteinShake], [banana]]
    var lunchFoods = [[pastaChicken, pastaTofu, riceChicken],[avacadosEggs,avacadosToast,avacadosGF],[yogurt, apple]]
    var dinnerFoods =[[spagetti, quornSpagetti, chilie],[chickenPizza, pepperPizza, veganPizza, GFpizza],[brownie, icecream]]
    
    //defining an array to put the foods the user can eat in
    //[choice between options in course 1, choice between options in course 2, choice between options in course 3]

    
    //from here
    var fractionCourse1, fractionCourse2, fractionCourse3;
    if (calIntake >= 2700) { //if calorie intake is greater than 2700
        numCoursesInMeal=3 //number of courses in each meal = 3
        fractionCourse1 = 0.5 //the fraction of the calories in each that should come from course 1
        fractionCourse2= 0.4 //the fraction of the calories in each that should come from course 2
        fractionCourse3 = 0.1 //the fraction of the calories in each that should come from course 3
    }
    else if (calIntake >= 1700 && breakfastNutrients[0] < 2700){ //if calorie intake is greater than 1700 and less than 2700
        numCoursesInMeal=2
        fractionCourse1 = 0.65
        fractionCourse2 = 0.35
    }
    else{ //if calorie intake is less than 1700
        numCoursesInMeal=1
        fractionCourse1 = 1
    }//output to console
    console.log("Calorie Intake: "+ calIntake, "Number of Courses: "+numCoursesInMeal)

    yourFinalBreakfast = [[],[],[]] //[[name, quantity],[name, quantity], [name,quantity]]
    // this for loop goes through each of the courses in the breakfast foods array
    for (var i = 0; i < numCoursesInMeal; i++) {
        //this goes through the foods in the course that its currently looking at
        for (var x = 0; x < breakfastFoods[i].length; x++) {
        
            //if the user is vegan and the breakfast food is vegan
            if ((diet == "Vegan" && breakfastFoods[i][x][1] == true) || (diet == "Vegitarian" && breakfastFoods[i][x][2] == true) || (diet == "Gluten Free" && breakfastFoods[i][x][3] == true) || (diet == "None")) {
                //sets the first element of course i in personalised breakfast array to name of the food in question
                yourFinalBreakfast[i][0] = breakfastFoods[i][x][0] 
                yourFinalBreakfast[i][1] = Math.round(((breakfastNutrients[0] * eval("fractionCourse"+(i+1))) / breakfastFoods[i][x][4]) * 100) //calculates quantity in grams
                yourFinalBreakfast[i][6] = breakfastFoods[i][x][8]
                for(var t =0; t<4; t++){ //loops up to t=3
                    //set the t+1 position of the food being added in personalised breakfast array to the amount calories and nutrients in this quantity of food
                    yourFinalBreakfast[i][t+2] = Math.round((yourFinalBreakfast[i][1]/100)*breakfastFoods[i][x][t+4])
                    if (t>0){ 
                        //if we arent calculating calories (t=0) add the quantities of nutrients to the breakfastNutrients array in the [t] position
                        breakfastNutrients[t] += Math.round((yourFinalBreakfast[i][1]/100)*breakfastFoods[i][x][t+4])
                    }
                }
                break //goes to next i value as we dont need another food from this course to be added to the personalised meal array
            }
        }
    }
    console.log(yourFinalBreakfast[0][0]+", "+ yourFinalBreakfast[0][1]+", "+ yourFinalBreakfast[0][2]+", "+ yourFinalBreakfast[0][3]+", "+ yourFinalBreakfast[0][4]+", "+yourFinalBreakfast[0][5])
    
    yourFinalLunch = [[],[],[]] //[[name, quantity],[name, quantity], [name,quantity]]
    // this for loop goes through each of the courses in the breakfast foods array
    for (var i = 0; i < numCoursesInMeal; i++) {
        //this goes through the foods in the option that its currently looking at
        for (var x = 0; x < lunchFoods[i].length; x++) {
            //if the user is vegan and the breakfast food is vegan
            if ((diet == "Vegan" && lunchFoods[i][x][1] == true) || (diet == "Vegitarian" && lunchFoods[i][x][2] == true) || (diet == "Gluten Free" && lunchFoods[i][x][3] == true) || (diet == "None")) {
                //sets the first element of course i in personalised lunch array to name of the food in question
                yourFinalLunch[i][0] = lunchFoods[i][x][0]
                yourFinalLunch[i][1] = Math.round(((lunchNutrients[0] * eval("fractionCourse"+(i+1))) / lunchFoods[i][x][4]) * 100) //calculates quantity in grams
                yourFinalLunch[i][6] = lunchFoods[i][x][8]
                for(var t =0; t<4; t++){ //loops up to t=3
                    //set the t+1 position of the food being added in personalised lunch array to the amount calories and nutrients in this quantity of food
                    yourFinalLunch[i][t+2] = Math.round((yourFinalLunch[i][1]/100)*lunchFoods[i][x][t+4])
                    if (t>0){
                        //if we arent calculating calories (t=0) add the quantities of nutrients to the lunch Nutrients array in the [t] position
                        lunchNutrients[t] += Math.round((yourFinalLunch[i][1]/100)*lunchFoods[i][x][t+4])
                    }  
                } 
                break //goes to next i value as we dont need another food from this course to be added to the personalised meal array   
            }
        }
    }
    console.log(yourFinalLunch[0][0]+", "+ yourFinalLunch[0][1]+", "+ yourFinalLunch[1][0]+", \n "+ yourFinalLunch[1][1]+", "+ yourFinalLunch[2][0]+", "+yourFinalLunch[2][1])

    yourFinalDinner = [[],[],[]] //[[name, quantity],[name, quantity], [name,quantity]]
    // this for loop goes through each of the courses in the breakfast foods array
    for (var i = 0; i < numCoursesInMeal; i++) {
        //this goes through the foods in the option that its currently looking at
        for (var x = 0; x < dinnerFoods[i].length; x++) {
            //if the user is vegan and the breakfast food is vegan
            if ((diet == "Vegan" && dinnerFoods[i][x][1] == true) || (diet == "Vegitarian" && dinnerFoods[i][x][2] == true) || (diet == "Gluten Free" && dinnerFoods[i][x][3] == true) || (diet == "None")) {
                //sets the first element of course i in personalised dinner array to name of the food in question
                yourFinalDinner[i][0] = dinnerFoods[i][x][0]
                yourFinalDinner[i][1] = Math.round(((dinnerNutrients[0] * eval("fractionCourse"+(i+1))) / dinnerFoods[i][x][4]) * 100) //calculates quantity in grams
                yourFinalDinner[i][6] = dinnerFoods[i][x][8]
                for(var t =0; t<4; t++){//loops up to t=3
                   
                    yourFinalDinner[i][t+2] = Math.round((yourFinalDinner[i][1]/100)*dinnerFoods[i][x][t+4])
                    if (t>0){
                        
                        dinnerNutrients[t] += Math.round((yourFinalDinner[i][1]/100)*dinnerFoods[i][x][t+4])
                    }
                } 
                break //goes to next i value as we dont need another food from this course to be added to the personalised meal array
            }
        }
    }
    console.log(yourFinalDinner[0][0]+", "+ yourFinalDinner[0][1]+", "+ yourFinalDinner[1][0]+", "+ yourFinalDinner[1][1]+", "+ yourFinalDinner[2][0]+", "+yourFinalDinner[2][1])

}

//this function is called to display a specific course in a meal
function changeElement(whichMeal, whichCourse){
    var order = [yourFinalBreakfast, yourFinalLunch, yourFinalDinner]
    //it firstly sets the arrows onclick events to recallt this function but with a different course in the same meal
    document.getElementById("left-arrow").onclick = function(){changeElement(whichMeal,whichCourse-1);}
    document.getElementById("right-arrow").onclick = function(){changeElement(whichMeal,whichCourse+1);}
    //as the arrows may have been hidden previously, they are both displayed
    document.getElementById("right-arrow").style.display="inline-block"
    document.getElementById("left-arrow").style.display="inline-block"
    //this if statement decides if tis the first course, and if so, hides the left arrow
    if (whichCourse==1){
        document.getElementById("left-arrow").style.display="none"
    }
    if (whichCourse==numCoursesInMeal){ //this checks if the current course is the last course and hides right arrow if so
        document.getElementById("right-arrow").style.display="none"
    }
    // this if statement is used to change the title of the display meal page based on which meal is being displayed
    if(whichMeal == 1){
        document.getElementById("meal-title").innerText= "Sample Breakfast Meal"
    }
    else if(whichMeal==2){
        document.getElementById("meal-title").innerText= "Sample Lunch Meal"
    }
    else{
        document.getElementById("meal-title").innerText= "Sample Dinner Meal"
    }

    //the following code sets the HTML elements on the display meal page to the information in the specific course in the meal
    document.getElementById("course-number").innerHTML = "Course: "+whichCourse
    document.getElementById("course-number").style.display="inline-block;"
    document.getElementById("course-name").innerHTML = "<strong>"+order[whichMeal-1][whichCourse-1][0]+" - "+order[whichMeal-1][whichCourse-1][1]+"</strong> grams"
    document.getElementById("course-calories").innerHTML = "Calories: <strong>"+ order[whichMeal-1][whichCourse-1][2]+"</strong>"
    document.getElementById("course-protein").innerHTML = "Protein: <strong>"+ order[whichMeal-1][whichCourse-1][3]+"</strong> grams"
    document.getElementById("course-fats").innerHTML = "Fats: <strong>"+order[whichMeal-1][whichCourse-1][4]+"</strong> grams"
    document.getElementById("course-carbs").innerHTML = "Carbs: <strong>"+order[whichMeal-1][whichCourse-1][5]+"</strong> grams"
    document.getElementById("course-img").src ="styles/assets/"+ order[whichMeal-1][whichCourse-1][6]
    
}
//this function is called to changed the HTML elements in the overview page
function editOverview(){
    //this for loop calculates and stores the total calories and macros in all the meals
    for (var i=0; i<4; i++){
        overallNutrients[i]=breakfastNutrients[i]+lunchNutrients[i]+dinnerNutrients[i]
    }

    document.getElementById("overview-calories").innerHTML = "Calories: <strong>"+ overallNutrients[0]+"</strong>"
    document.getElementById("overview-protein").innerHTML = "Protein: <strong>"+ overallNutrients[1] +"</strong> grams ("+Math.round((-100*(protienQuantity-overallNutrients[1]))/protienQuantity)+"% from recomended)"
    document.getElementById("overview-fats").innerHTML = "Fats: <strong>"+ overallNutrients[2] +"</strong> grams ("+Math.round((-100*(fatQuantity-overallNutrients[2]))/fatQuantity)+"% from recomended)"
    document.getElementById("overview-carbs").innerHTML = "Carbs: <strong>"+ overallNutrients[3] +"</strong> grams ("+Math.round((-100*(carbQuantity-overallNutrients[3]))/carbQuantity)+"% from recomended)"

}


function drawOverviewChart(){
    var data1 = google.visualization.arrayToDataTable([
        ['Macronutrients', 'Quantities (in grams)'],
        ['Protein',  overallNutrients[1]],
        ['Fat',  overallNutrients[2]],
        ['Carbs', overallNutrients[3]]
    ]);
    var courses1 = {
        pieSliceText: 'label',
        backgroundColor: 'transparent',
        pieSliceBorderColor: 'transparent',
        legend: 'none',
        width: '350',
        height: '350'

    };
    /*var chart1 = new google.visualization.PieChart(document.getElementById('overview-pie-chart')); //pie-chart is the ID of the DIV i want the pie chart to be placed
    chart1.draw(data1, courses1);*/
}