var sdata=JSON.parse(localStorage.getItem("summaryData"));
console.log(sdata)

showsummary(sdata)
 function showsummary(sdata){

    sdata.map(function(e){
var div=document.createElement("div");



var div1=document.createElement("div");
div1.innerText=e.carName;

var divM=document.createElement("div");
divM.style.display="flex"

var div2=document.createElement("div");
div2.innerText=e.transmission;

var div3=document.createElement("div");
div3.innerText=e.fuelType;

var div4=document.createElement("div");


div.style.border="2px solid red";
div.style.width="600px"
div.style.height="100px"

var para=document.createElement("p")
para.innerText=e.carName;

var img=document.createElement("img")
img.src=e.image;
img.style.width="100px"
div.append(div1,divM,div4);
divM.append(div2,div3);

div4.append(img)
// document.querySelector("div").append(para)
document.querySelector("#parent").append(div,)
    })
 
 }

