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
        }
        else{
            alert("You have to be between the ages 14 and 60 to use this tool")
        }
    }
    else if (x==2){

    }
    else if (x==3){

    }
    else{

    }
}

var sex="male"
var age=0
var height
var weigth
var activity
var aim
var diet

function changeGender(sexIn){
    sex=sexIn
}
function changeAge(){
    if(document.getElementById("age").value == ""){
        age=0
    }
    else{
        age=document.getElementById("age").value 
    }
}
