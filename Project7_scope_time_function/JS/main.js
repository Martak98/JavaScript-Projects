//global and local variable
var X = 35;
function Add_numbers_1 () {
    document.write(10 + X + "<br>");
}
function Add_numbers_2 () {
    document.write(X + 150);
    console.log(X); //using the console.log 
}
Add_numbers_1 ();
Add_numbers_2 ();
//Function with if statment
function get_Date() {
    if (new Date () .getHours () <18) {
        document.getElementById("Greeting").innerHTML = "Welcome!";
    }
}
//Function with else statment
function Age_Function () {
    Age = document.getElementById("Age").value;
    if (Age>=18){
        Vote="You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//Else If statment
function Time_function () {
    var Time = new Date ().getHours ();
    var Reply;
    if (Time <12 == Time > 0) {
    Reply = "It is morning time!";
}
else if (Time >=12 == Time <18) {
    Reply = "It is afternoon.";
}
else {
    Reply = "It is evening time.";
}
document.getElementById("Time_of_day").innerHTML = Reply;
}