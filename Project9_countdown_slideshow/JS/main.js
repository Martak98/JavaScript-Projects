//creating a timer
function countdown () {
    var seconds = document.getElementById("seconds").value;
    function tick () {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout (tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick ();
}
//Slideshow function
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n<1) {
        slideIndex = slideIndex.length;
    }
    for (i = 0; i < slideIndex.length; i++) {
        slide[i].style.display ="none";
    }
    for (i = 0; i <dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className +=" ; active";
}