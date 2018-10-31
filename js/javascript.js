
// sliderImages

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeee", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activeee";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}






// for Tabs

function homeClick(i){
    document.getElementsByClassName("active")[0].classList.remove("active");
    i.parentNode.classList.add("active");
    document.getElementById("homeDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function aboutClick(me){
    document.getElementsByClassName("active")[0].classList.remove("active");
    me.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function galleryClick(you){
    document.getElementsByClassName("active")[0].classList.remove("active");
    you.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="display: none;";
}
function contactClick(him){
    document.getElementsByClassName("active")[0].classList.remove("active");
    him.parentNode.classList.add("active");
    document.getElementById("aboutDiv").style="display: none;";
    document.getElementById("galleryDiv").style="display: none;";
    document.getElementById("homeDiv").style="display: none;";
    document.getElementById("contactDiv").style="";

}

// end Tabs


// for responsive navication bar

function showMenu(){
    
    let showTest=document.getElementById("mainMenu").getAttribute("style");
    if(showTest=="display: block;"){
        document.getElementById("mainMenu").style="display: none;";

    }
    else{
        document.getElementById("mainMenu").style="display: block;";
    }
}


// end responsive navication bar






