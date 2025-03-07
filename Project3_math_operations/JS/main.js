function addition_Function (){         //Function name
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 ="+ addition; //Result printed in HTML
}
function subtraction_Function (){     //Function name
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 =" + Subtraction;  //Result printed in HTML
}
function multiplication (){         //Function name
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 =" + simple_Math;  //Result printed in HTML
}
function division (){               //Function name
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 =" + simple_Math;  //Result printed in HTML
}
function more_Math () {             //Function name
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 + 2 x 10 / 2 - 5 =" + simple_Math  //Result printed in HTML
}
function modulus_Operator (){       //Function name
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of:" + simple_Math;  //Result printed in HTML
}
function negation_Operator () {     //Function name
    var x = 10;
    document.getElementById("Math").innerHTML = -x;  //Result printed in HTML
}
var X = 5;
X++; //add one from the value
document.write(X);
var X = 5.25;
X--; //subtract one from the value
document.write(X);
window.alert(Math.random());  //creating random math operation
window.alert(Math.random() * 100); //creating random math operation between 0 and 100

