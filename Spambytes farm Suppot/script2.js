var question = document.querySelectorAll(".ques-header");
var ques1 = document.querySelector(".ques1");
var ques2 = document.querySelector(".ques2");
var ques3 = document.querySelector(".ques3");

question[1].addEventListener("click", function(){
    ques1.style.display = "none";
    ques2.style.display = "block";
    ques3.style.display = "none";
    this.classList.add("ques-header-active");
    question[0].classList.remove("ques-header-active");
    question[2].classList.remove("ques-header-active");
});

question[2].addEventListener("click", function(){
    ques1.style.display = "none";
    ques2.style.display = "none";
    ques3.style.display = "flex";
    this.classList.add("ques-header-active");
    question[0].classList.remove("ques-header-active");
    question[1].classList.remove("ques-header-active");
});

question[0].addEventListener("click", function(){
    ques1.style.display = "flex";
    ques2.style.display = "none";
    ques3.style.display = "none";
    this.classList.add("ques-header-active");
    question[1].classList.remove("ques-header-active");
    question[2].classList.remove("ques-header-active");
});


function sendEmail() 
{
    window.location = "mailto:abc@greenDelight.com";
}