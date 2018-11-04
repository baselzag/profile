


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
    setTimeout(showSlides, 2000); 
}








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






function showMenu(){
    
    let showTest=document.getElementById("mainMenu").getAttribute("style");
    if(showTest=="display: block;"){
        document.getElementById("mainMenu").style="display: none;";

    }
    else{
        document.getElementById("mainMenu").style="display: block;";
    }
}












function personalDatenClick(d){
    document.getElementsByClassName("nowAct")[0].classList.remove("nowAct");
    d.parentNode.classList.add("nowAct");
    document.getElementById("personalDaten").style="";
    document.getElementById("education").style="display: none;";
    document.getElementById("experience").style="display: none;";
    document.getElementById("computerSkills").style="display: none;";
    document.getElementById("languages").style="display: none;";
}
function experienceClick(h){
    document.getElementsByClassName("nowAct")[0].classList.remove("nowAct");
    h.parentNode.classList.add("nowAct");
    document.getElementById("experience").style="";
    document.getElementById("education").style="display: none;";
    document.getElementById("personalDaten").style="display: none;";
    document.getElementById("computerSkills").style="display: none;";
    document.getElementById("languages").style="display: none;";
}
function computerSkillsClick(k){
    document.getElementsByClassName("nowAct")[0].classList.remove("nowAct");
    k.parentNode.classList.add("nowAct");
    document.getElementById("experience").style="display: none;";
    document.getElementById("computerSkills").style="";
    document.getElementById("personalDaten").style="display: none;";
    document.getElementById("education").style="display: none;";
    document.getElementById("languages").style="display: none;";
}
function educationClick(n){
    document.getElementsByClassName("nowAct")[0].classList.remove("nowAct");
    n.parentNode.classList.add("nowAct");
    document.getElementById("experience").style="display: none;";
    document.getElementById("computerSkills").style="display: none;";
    document.getElementById("personalDaten").style="display: none;";
    document.getElementById("education").style="";
    document.getElementById("languages").style="display: none;";

}
function languagesClick(l){
    document.getElementsByClassName("nowAct")[0].classList.remove("nowAct");
    l.parentNode.classList.add("nowAct");
    document.getElementById("experience").style="display: none;";
    document.getElementById("education").style="display: none;";
    document.getElementById("personalDaten").style="display: none;";
    document.getElementById("computerSkills").style="display: none;";
    document.getElementById("languages").style="";

}




