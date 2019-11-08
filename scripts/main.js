function begin(){
    document.getElementById("welcome-page").style.display="none"
    document.getElementById("details1-page").style.display="block"
}

function radio(in1, in2, in3, in4){
    var z=2
    el1=document.getElementById(in1)
    el2=document.getElementById(in2)
    if (in3!=0 && in4!=0){
        z=4
        el3=document.getElementById(in3)
        el4=document.getElementById(in4)
    }
    else if(in3!=0){
        z=3
        el3=document.getElementById(in3)
    }
    for (i=1;i<=z;i++){
        if(eval("el"+i).classList.contains('radio1')==true){
            eval("el"+i).classList.remove('radio1')
            eval("el"+i).classList.add('radio2')
            eval("el"+1).classList.remove('radio2')
            eval("el"+1).classList.add('radio1')
        }
    }
}
function next(x){
    if (x==1){
        if (age>13 && age<61){
           document.getElementById("details1-page").style.display="none"
           document.getElementById("details2-page").style.display="block" 
           document.getElementById("details3-page").style.display="none"
        }
        else{
            alert("You have to be between the ages 14 and 60 to use this tool")
        }
    }
    else if (x==2){
        if(height>129 && height<251){
            if (weight>39 && weight<141){
                console.log(height, weight, activity)
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

    }
    else if (x==0){
        document.getElementById("details1-page").style.display="block"
        document.getElementById("details2-page").style.display="none" 
    }
}

var sex="male"
var age=0
var height
var weigth
var activity=1
var aim=1
var diet

function changeGender(sexIn){
    sex=sexIn
}
function changeAge(){
    console.log(age)
    if(document.getElementById("age").value == ""){
        age=0
    }
    else{
        age=document.getElementById("age").value 
    }
}
function changeHeight(){
    if(document.getElementById("height").value == ""){
        height=0
    }
    else{
        height=document.getElementById("height").value 
    }
}
function changeWeight(){
    if(document.getElementById("weight").value == ""){
        weight=0
    }
    else{
        weight=document.getElementById("weight").value 
    }
}

function changeActivity(){
    activity=document.getElementById("activity-level").value
}
function changeAim(aim1){
    aim=aim1
}