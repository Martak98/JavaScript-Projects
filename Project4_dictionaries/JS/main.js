function my_Dictionary () { //creating a dictionary
    var Vehicles = {  
        Species:"Car",
        Color:"Blue",
        Brand:"Audi",
        Year:2018,
        Sound:"Wroom!"
    };
    delete Vehicles.Sound; //removing the sound KVP from the Dictionary
    document.getElementById("Dictionary").innerHTML = Vehicles.Sound;
}
