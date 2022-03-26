var sdata=JSON.parse(localStorage.getItem("summaryData"));
console.log(sdata)

showsummary(sdata)
 function showsummary(sdata){

    sdata.map(function(e){
var div=document.createElement("div");
div.style.height = "300px"


var div1=document.createElement("div");
div1.innerText=e.carName;
div1.style.fontSize = "20px"
div1.style.fontWeight = "800"
div1.style.height="25px"

var divM=document.createElement("div");
divM.style.display="flex"
divM.style.gap="15px"

divM.style.height="160px"



var div2=document.createElement("div");
div2.innerText=e.transmission;

var div3=document.createElement("div");
div3.innerText=e.fuelType;

var div4=document.createElement("div");



var img=document.createElement("img")
img.src=e.image;
img.style.width="200px"
img.style.height="160px"


div.append(div1,divM);
divM.append(div2,div3);

div4.append(img)

var headname = document.createElement("h2");
headname.innerText = e.carName;
headname.style.color = "red"

var sumPrice = document.createElement("b")
sumPrice.innerText = e.price;
// document.querySelector("div").append(para)
document.querySelector("#parent").append(div,div4)
document.querySelector("#n2").append(headname);
document.querySelector("#sumPrice").append(sumPrice)
    })
 
 }

