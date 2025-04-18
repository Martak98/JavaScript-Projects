//Using a while loop
function Call_Loop () {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//Using a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; 
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Using an array function 
function numbers_array () {
    var Numbers = [];
    Numbers [0] = "one";
    Numbers [1] = "two";
    Numbers [2] = "three";
    Numbers [3] = "four";
    Numbers [4] = "five"
    document.getElementById("Array").innerHTML = "My favourtie number is "  + Numbers [4] + ".";
}
//An object with the let keyword
  function car() {
    let car = {
        make: "Hyundai", 
        year: "2016",
        color: "Blue",
    };
    document.getElementById("car").innerHTML = "I have a " + car.year + " " + car.color + " " + car.make + ".";
  }