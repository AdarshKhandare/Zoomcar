<<<<<<< HEAD
var signupdetails= JSON.parse(localstorage.getItem("signupDetails"));
=======
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
>>>>>>> 4c23f9c9753c795121fb6aae75b9a35451f3f418
