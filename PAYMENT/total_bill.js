var sdata=JSON.parse(localStorage.getItem("summaryData"));
console.log(sdata)

showsummary(sdata)
 function showsummary(sdata){

    sdata.map(function(e){
var headname = document.createElement("h2");
headname.innerText = e.carName;
headname.style.color = "white"
var sumPrice = document.createElement("p")
sumPrice.innerText = e.price;

var totalFare = document.createElement("b")
totalFare.innerText = e.price;
var finalTotal = document.createElement("b")
finalTotal.innerText = e.price;

document.querySelector("#n2").append(headname);
document.querySelector("#sumPrice").append(sumPrice)
document.querySelector("#totalFare").append(totalFare)
document.querySelector("#finalTotal").append(finalTotal)
})
 
}