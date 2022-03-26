

var filterpages = [];
var bookNowobj = [];

var carDataobj = 
   [ {image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/bc3b9db6c6ef407ab7fa1ca48112fb01d8697295.JPG?1638530597  ",
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "5",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/57b1b1b9180a56fba0156135ea6dc8e9f058303d.jpg?1621260558",
loc_km: "3.0 km SANTACRUZ",
carName: "Renault Wagon R",
transmission: "Manual",
fuelType: "Diesel",
seater: "5",
rating: "4.0 (56) · 13,136 kms driven",
price: "₹788"  
},
{
image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/efa1e98bbb81150cf57c98df093de5899dcafcd5.jpg?1640674575",
loc_km: "3.9 km MCGM Pay and Park (Near T2 International Airport)",
carName: "Maruti Ertiga",
transmission: "Manual",
fuelType: "Petrol",
seater: "7",
rating: "4.9(36)·17,802 kms driven",
price: "₹1,331"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/61fbab1ef34ce59681271cd8969dd13725023ca4.JPG?1623066918",
loc_km: "5.2 km KhoparKhainrane",
carName: "Maruti Ertiga Hybrid",
transmission: "Automatic",
fuelType: "Diesel",
seater: "7",
rating: "4.7(53) . 1,234 kms driven",
price: "₹1,173"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/524fda673d85d7affc94f9c54ddb2ed1219d3a4d.JPG?1638612892",
loc_km: "4.2 km Sewri",
carName: "Maruti Dzire (Petrol)",
transmission: "Manual",
fuelType: "Petrol",
seater: "6",
rating: "4.1(53) . 12,234 kms driven",
price: "₹1,004"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
loc_km: "5.1 km doreaa",
carName: "Maruti Beleno (Petrol)",
transmission: "Manual",
fuelType: "Petrol",
seater: "5",
rating: "4.6(53) . 22,234 kms driven",
price: "₹1,104"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/fd92e3998a840b8544df97c446a48c87c662b6d8.JPG?1623643752",
loc_km: "5.2 km Sewri",
carName: "Honda Jazz SV",
transmission: "Manual",
fuelType: "Petrol",
seater: "6",
rating: "4.9(53) . 32,134 kms driven",
price: "₹1,144"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/4424e7d205d37feda22e11b4465031a5b54cad5c.JPG?1622187205",
loc_km: "14.2 km Malad West",
carName: "Maruti Ignis ",
transmission: "Manual",
fuelType: "Petrol",
seater: "5",
rating: "5.0(53) . 7,234 kms driven",
price: "₹974"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/fb88b893d54a0220d775621564f74800f241fcbc.png?1584524717",
loc_km: "15.2 km Evershine",
carName: "Hyundai Xcent",
transmission: "Automatic",
fuelType: "Petrol",
seater: "7",
rating: "4.0(53) . 1,234 kms driven",
price: "₹987"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/505efec88be6f25bb3ffabbd6c6107629c88e169.jpg?1621260721",
loc_km: "5.2 km Nerul",
carName: "Datsum Redi-GO",
transmission: "Automatic",
fuelType: "Petrol",
seater: "6",
rating: "4.8(53) . 25,234 kms driven",
price: "₹896"},
{image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/e47541c407f8ee906e9fa81c43c732ada5614617.png?1584526352",
loc_km: "10.2 km Koparkhairane",
carName: "Ford Ecosport",
transmission: "Automatic",
fuelType: "Diesel",
seater: "5",
rating: "4.3(53) . 13,234 kms driven",
price: "₹1,105"},]

filterpages.push(carDataobj);
// console.log(carDataobj)





localStorage.setItem("carDataBase", JSON.stringify(carDataobj));

var cardata = document.getElementById("cardata")
showCars(carDataobj);
function showCars(carDataobj){

    cardata.innerHTML = null;
    carDataobj.map(function(ele){

        var bigdiv = document.createElement("div");
        bigdiv.setAttribute("id", "bigDiv");
        bigdiv.style.display = "flex";
        bigdiv.style.justifyContent = "space-between";
        // bigdiv.style.border = "1px solid black";
        bigdiv.style.height = "150px";
        bigdiv.style.width = "93%";
        bigdiv.style.padding = "15px";
        bigdiv.style.marginLeft = "2px"
        bigdiv.style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px"


        var cardiv = document.createElement("div");
        // cardiv.setAttribute("id", "carDiv");
        cardiv.style.display = "flex";
        cardiv.style.gap = "20px";
    
        

        var pricediv =  document.createElement("div");
        pricediv.setAttribute("id", "priceDiv");
       
        

        var imgdiv = document.createElement("div");
        cardiv.setAttribute("id", "carDiv");
        // imgdiv.style.width = "100%";

        var imagedd = document.createElement("img");

        imagedd.setAttribute("src", ele.image);
        imagedd.style.width="200px";
        imagedd.style.height="150px";

        var detaildiv = document.createElement("div");
        detaildiv.style.lineHeight = "20px"

        var roadP = document.createElement("p");
        roadP.innerText = ele.loc_km;

        var carName = document.createElement("h3");
        carName.innerText = ele.carName;
        carName.style.lineHeight = "10px"

        var filterDiv = document.createElement("div");
        filterDiv.style.display = "flex"
        filterDiv.style.gap = "5px"
        filterDiv.style.lineHeight = "5px"

        var trasDiv = document.createElement("div");

        trasDiv.innerText = ele.transmission;
        trasDiv.style.fontSize="12px";
        trasDiv.style.color="grey"

        var fuelDiv = document.createElement("div");
        fuelDiv.innerText = ele.fuelType;
        fuelDiv.style.fontSize="12px";
        fuelDiv.style.color="grey"

        var seaterDiv = document.createElement("div");
        seaterDiv.innerText = ele.seater;
        seaterDiv.style.fontSize="12px";
        seaterDiv.style.color="grey"

        var ratingP = document.createElement("p");
        ratingP.innerText ="🌟" + " " +ele.rating;
      ratingP.style.lineHeight= "50px"

        var priceM = document.createElement("h2");
        priceM.innerText = ele.price;

        var bookN = document.createElement("button");
        bookN.style.height="30px";
        bookN.style.margin="1px";
        bookN.addEventListener("click",function(event){
            event.preventDefault();
            booknowclick(ele);

            // var bookcardetails = JSON.parse(localStorage.getItem("carDataBase")) 
            // console.log(ele)

          window.location.href = "../PAYMENT/summary.html"


        })
        
        bookN.innerText = "BOOK NOW"
        bookN.style.marginTop = "40px"

        cardiv.append(imgdiv,detaildiv)
        imgdiv.append(imagedd)

        detaildiv.append(roadP,carName,filterDiv,ratingP);

        filterDiv.append(trasDiv,fuelDiv,seaterDiv);

        pricediv.append(priceM,bookN);

        bigdiv.append(cardiv,pricediv);

        cardata.append(bigdiv);

    });
}
function booknowclick(ele){
    // console.log(ele)
    bookNowobj.push(ele)
    localStorage.setItem("summaryData",JSON.stringify(bookNowobj));
}




function click(ele){
  ele.target.style.background = "#10a310";
}

var itemsF = document.querySelectorAll(".list > .list-item");

for (var i = 0; i < itemsF.length; i++){

  itemsF[i].addEventListener("click",click);
  
}




var MaincarData = JSON.parse(localStorage.getItem("carDataBase")) || []

//Free KM Start Here
var ninty = [];
function clicker90(){
  cardata.innerHTML = null;
  MaincarData.forEach(function(ele){

    if(ele.seater == "6")
    {
       ninty.push(ele);
         
    }
    else{
      showCars(MaincarData);
    } 
  });
  showCars(ninty); 

}

var onetwenty = [];
function clicker120(){
  cardata.innerHTML = null;
  MaincarData.forEach(function(ele){

    if(ele.seater == "7")
    {
       onetwenty.push(ele);
         
    }
    else{
      showCars(MaincarData);
    } 
  });
  showCars(onetwenty); 

}
//Free KM end Here



//Seater Start Here

var seat5 = [];

function clicker5(){

  cardata.innerHTML = null;
  MaincarData.forEach(function(ele){

    if(ele.seater == "5")
    {
       seat5.push(ele);
         
    }
    else{
      showCars(MaincarData);
    } 
  });
  showCars(seat5); 
}

var seat6 = [];

function clicker6(){

  cardata.innerHTML = null;
  MaincarData.forEach(function(ele){

    if(ele.seater == "6")
    {
       seat6.push(ele);
         
    }
    else{
      showCars(MaincarData);
    } 
  });
  showCars(seat6); 
}

var seat7 = [];

function clicker7(){

  cardata.innerHTML = null;
  MaincarData.forEach(function(ele){

    if(ele.seater == "7")
    {
       seat7.push(ele);
         
    }
    else{
      showCars(MaincarData);
    } 
  });
  showCars(seat7); 
}
//Seater End Here

//transmission start here

var manual = [];

function Manual(){

  cardata.innerHTML = null;
  MaincarData.forEach(function(ele){

    if(ele.transmission == "Manual")
    {
       manual.push(ele);
         
    }
    else{
      showCars(MaincarData);
    } 
  });
  showCars(manual); 
}

var automatic = [];

function Automatic(){

  cardata.innerHTML = null;
  MaincarData.forEach(function(ele){

    if(ele.transmission == "Automatic")
    {
       automatic.push(ele);
         
    }
    else{
      showCars(MaincarData);
    } 
  });
  showCars(automatic); 
}

//transmission End here











var sdata = JSON.parse(localStorage.getItem("myJourney"))
console.log(sdata)

showsummary(sdata)
 function showsummary(sdata){

    sdata.map(function(e){

      var top = document.createElement("h2")
      top.innerText = "Start-Point :"+" "+e.keyStart;

      var bottom = document.createElement("h2");
      bottom.innerText = "End-Point :"+" "+e.keyEnd;

      document.querySelector(".input").append(top)
      document.querySelector(".input1").append(bottom)

    });
  }


    var signUp=JSON.parse(localStorage.getItem("signupDetails"));
   
    var log=document.querySelector(".signup")
    // var sign=document.querySelector(".signup>a");
    var customerName = signUp[signUp.length-1].name;

    log.innerText = customerName;
    sign.innerText = "";

    

    console.log(signUp);


  








 


