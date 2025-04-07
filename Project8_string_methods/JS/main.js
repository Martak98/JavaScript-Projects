//concat () method
function full_Sentence () {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//slice() method
function slice_Method () {
    var Sentence = "All work and no play makes Johny a dull boy.";
    var Section = Sentence.Slice (27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//UpperCase() method
function Upper_Case() {
    let element = document.getElementById('myElement');
    console.log(element.textContent);
}
//Number methods
function string_Method () {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//Precicion method
function precision_Method () {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//Fixed method
function fixed_Method () {
    let num = 5.56789;
    let n = num.toFixed ();
    document.getElementById("fix").innerHTML= n;
}
//Value of Method
function ValueOf_Method() {
    let text = "Hello World!";
    let result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}