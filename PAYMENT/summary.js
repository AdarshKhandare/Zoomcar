var sdata=JSON.parse(localStorage.getItem("summaryData"));
console.log(sdata)

showsummary(sdata)
 function showsummary(sdata){

    sdata.map(function(e){
var div=document.createElement("div");


var div1=document.createElement("div");
div1.innerText=e.carName;
div1.style.fontSize = "20px"
div1.style.fontWeight = "800"

var divM=document.createElement("div");
divM.style.display="flex"
divM.style.gap="15px"


var div2=document.createElement("div");
div2.innerText=e.transmission;

var div3=document.createElement("div");
div3.innerText=e.fuelType;

var div4=document.createElement("div");



var img=document.createElement("img")
img.src=e.image;
img.style.width="100px"


div.append(div1,divM);
divM.append(div2,div3);

div4.append(img)
// document.querySelector("div").append(para)
document.querySelector("#parent").append(div,div4)
    })
 
 }

