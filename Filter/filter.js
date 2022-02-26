// document.querySelectorAll(".list").addEventListener("click",change)

// function change(event){
    
//     event.target.style.background = "#10a310";
//     event.target.style.color = "white";

// }



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
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "5",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹600"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/19eca74a7982804ba713dd9485861a7543422115.JPG?1638531037 ",
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Trigo",
transmission: "Manual",
fuelType: "Diesel",
seater: "7",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹900"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/efa1e98bbb81150cf57c98df093de5899dcafcd5.jpg?1640674575  ",
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "6",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/61fbab1ef34ce59681271cd8969dd13725023ca4.JPG?1623066918  ",
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "7",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/524fda673d85d7affc94f9c54ddb2ed1219d3a4d.JPG?1638612892 ",
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "6",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "7",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
loc_km: "2.7 km Magrath Road (Garuda Mall)",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "6",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
}]

filterpages.push(carDataobj);
// console.log(carDataobj)


showCars(carDataobj);

localStorage.setItem("carDataBase", JSON.stringify(carDataobj));


function showCars(carDataobj){

  

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

        document.getElementById("right").append(bigdiv);

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
// console.log(itemsF.length);

for (var i = 0; i < itemsF.length; i++){

  itemsF[i].addEventListener("click",click);
  
}

var seaterstack = [];
function clicker90(){
  var data=JSON.parse(localStorage.getItem("carDataBase"))||[];
  var seaterF = document.querySelector(".list-item").value
  // var data = JSON.parse(localStorage.getItem("carDataBase")) || [];
  // console.log(seaterF);
  
  data.map(function(ele){

    if(ele.seater == "6")
    {
       seaterstack.push(ele);   
    } 
  });
  // console.log(seaterstack)
  showCars(seaterstack);
  
  var filterFirst = localStorage.setItem("ninty",JSON.stringify(seaterstack));
  
}

function showfilter()
{
  var filterninety = JSON.parse(localStorage.getItem("seaterstack"))||[];
  showfilter(seaterstack);
  
}



// var seaterEx = JSON.parse(localStorage.getItem("ninty")) || [];
// showCars(seaterEx);
// function clicker5(ele){
//   showCars(carDataobj);
//   var seater5 = document.querySelector(".list-item").value
//   console.log(seater5);
//   if(seater5 == "5")
//   {
//     console.log("ok")
//   }
// }

// var value = document.querySelectorAll(".list > .list-item");
// console.log(value.length);

// for (var i = 0; i < value.length; i++){

//   // value[i].addEventListener("click",clicker);

//   if( == 5)
//   {
//     value[i].addEventListener("click",clicker);
//   }

  
// }


var manual5=
  [ {image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
  loc_km: "2.7 km Magrath Road (Garuda Mall",
  carName: "Renault Triber",
  transmission: "Manual",
  fuelType: "Diesel",
  seater: "5",
  rating: "4.9 (56) · 37,136 kms driven",
  price: "₹707"},
  {
    image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/57b1b1b9180a56fba0156135ea6dc8e9f058303d.jpg?1621260558",
  loc_km: "2.7 km Magrath Road (Garuda Mall",
  carName: "Renault Triber",
  transmission: "Manual",
  fuelType: "Diesel",
  seater: "5",
  rating: "4.9 (56) · 37,136 kms driven",
  price: "₹600"  
  
}]

// clicker5(manual5)

function clicker5(){

  manual5.map(function(ele){

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

    document.getElementById("right").append(bigdiv);

});
}
function booknowclick(ele){
// console.log(ele)
bookNowobj.push(ele)
localStorage.setItem("summaryData",JSON.stringify(bookNowobj));
}

console.log(manual5)






 


