let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("landing-gallery-page");
    //let dots = document.getElementsByClassName("demo");
    //let captionText = document.getElementById("caption");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    /*for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }*/
    slides[slideIndex - 1].className += " active";
    //dots[slideIndex -1 ].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});