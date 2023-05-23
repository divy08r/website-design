
var btn = document.querySelector(".ok");

var answers = ["#WhyGD", "#Seller", "#facilities", "#techSup", "WhyBuyfromus.html"];

btn.addEventListener("click", run);
function run(){
    var option_selected= document.getElementById("asst").value;
    var reply, linnk = "";
    var question = document.getElementById("question");
    
    if(option_selected == "Why Green Delight?")
    {
        reply = answers[0];
        linnk = answers[0];
    }
        
    if(option_selected == "I am new seller, how to use your website?")
    {
        reply = answers[1];
        linnk = answers[1];
    }
    if(option_selected == "I want to know about Government facilities")
    {
        reply = answers[2];
        linnk = answers[2];
    }
    if(option_selected == "What technical improvement can be done to increase yield?")
    {
        reply = answers[3];
        linnk = answers[3];
    }
    if(option_selected == "What are Growth Categories?")
    {
        reply = answers[4];
        linnk = answers[4];
    }

        var div_add_here = document.querySelector(".thingsToBeAdded");
        //customer
        div_add_here.innerHTML += "<div class='d-flex flex-row justify-content-end mb-4'><div class='p-2 me-3 border' style='border-radius: 15px; background-color: #fbfbfb;'><p class=small mb-0'>"+ option_selected +"</p></div><img src='https://udayananetworking.unud.ac.id/assets/frontend/images/user-m.png' alt='avatar 1' style='width: 45px; height: 100%;''></div>";
        //bot-reply
        div_add_here.innerHTML += "<div class='d-flex flex-row justify-content-start mb-4'><img src='https://manager.almadarisp.com/user/img/user.png' alt='avatar 1' style='width: 45px; height: 100%;'><div class='p-2 ms-3' style='border-radius: 15px; background-color: #9bf5a085;'><p class='small mb-0'>This might be helpful to you. <br><a href='"+ linnk  +"'>"+ reply +"</a></p></div></div>"
    
    question.classList.add("add-ani");
}

function myFunction() {
    var chatbox = document.querySelector("#chat-wt");
    var icon = document.querySelector(".chat-btn");
    if (chatbox.style.display == "none") {
        chatbox.style.display = "block";
        icon.src = "https://friconix.com/jpg/fi-xtluxx-times-thin.jpg";
    } else {
        chatbox.style.display = "none";
        icon.src = "https://thumbs.dreamstime.com/b/chat-bubble-speech-communication-icon-isolated-green-color-social-media-stock-vector-184061959.jpg";
    }
}

const technical = {
    title: "Technical Supports",
    header: "",
    info : "Having trouble accessing your account or placing an order? Our technical support team is here to help you resolve any issues you may be experiencing. If you need assistance with using our online tools and resources, our knowledgeable technical support staff can guide you through the process step by step. Do you have questions about our organic farming practices or need help troubleshooting a problem in your garden? Our team of experts is available to provide technical support and advice. We understand that technology can be intimidating, especially when it comes to organic farming. That's why we offer user-friendly tools dedicated technical support to help you succeed in your farming endeavors. Whether you're a beginner or an experienced organic farmer, we're here to support you with technical assistance, helpful tips, and useful resources to help you grow your crops and your knowledge."
}