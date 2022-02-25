document.querySelector("#form").
addEventListener("submit",myfunction);
var toShowinFilter = JSON.parse(localStorage.getItem("myjourney")) || []
function submit(event){
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