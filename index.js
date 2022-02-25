var signupdetails= JSON.parse(localstorage.getItem("signupDetails"));
var signUp=JSON.parse(localStorage.getItem("signupDetails"));
document.querySelector("#form").
addEventListener("submit",myfunction);
var toShowinFilter = JSON.parse(localStorage.getItem("myjourney")) || []
function myfunction(event){
    event.preventDefault()
    var startJourney = document.querySelector("#start").value
    var endJourney = document.querySelector("#").value
    var pushObj = {
        keyStart:startJourney,
        keyEnd : endJourney,
    };
    toShowinFilter.push(pushObj);
    console.log(toShowinFilter);
    localStorage.setItem("myJourney",JSON.stringify(toShowinFilter));
    
}
    var log=document.querySelector(".login>a")
    var sign=document.querySelector(".signup>a");
    var customerName = signUp[signUp.length-1].name;

   log.innerText = customerName;
   sign.innerText = "";

   
