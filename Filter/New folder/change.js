var filterpages = [];
var bookNowobj = [];

var carDataobj = 
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
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/0a3b1c26daab8edd2d6737f164e3e29d46967287.JPG?1629206794",
loc_km: "2.7 km Magrath Road (Garuda Mall",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "7",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹900"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
loc_km: "2.7 km Magrath Road (Garuda Mall",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "6",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
loc_km: "2.7 km Magrath Road (Garuda Mall",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "7",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
loc_km: "2.7 km Magrath Road (Garuda Mall",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "6",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
loc_km: "2.7 km Magrath Road (Garuda Mall",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "7",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
},
{
  image: "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",
loc_km: "2.7 km Magrath Road (Garuda Mall",
carName: "Renault Triber",
transmission: "Manual",
fuelType: "Diesel",
seater: "6",
rating: "4.9 (56) · 37,136 kms driven",
price: "₹707"  
}];


function showCars(carDataobj){

    carDataobj.map(function(ele){

        var bigdiv = document.createElement("div");
        bigdiv.setAttribute("id", "bigDiv");
        bigdiv.style.display = "flex";
        bigdiv.style.justifyContent = "space-between";
        // bigdiv.style.border = "1px solid black";
        bigdiv.style.height = "180px";
        bigdiv.style.width = "90%";
        bigdiv.style.padding = "15px";
        bigdiv.style.marginLeft = "50px"
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

        var detaildiv = document.createElement("div");
        detaildiv.style.lineHeight = "25px"

        var roadP = document.createElement("p");
        roadP.innerText = ele.loc_km;

        var carName = document.createElement("h3");
        carName.innerText = ele.carName;

        var filterDiv = document.createElement("div");
        filterDiv.style.display = "flex"
        filterDiv.style.gap = "5px"

        var trasDiv = document.createElement("div");

        trasDiv.innerText = ele.transmission;

        var fuelDiv = document.createElement("div");
        fuelDiv.innerText = ele.fuelType;

        var seaterDiv = document.createElement("div");
        seaterDiv.innerText = ele.seater;

        var ratingP = document.createElement("p");
        ratingP.innerText ="🌟" + " " +ele.rating;

        var priceM = document.createElement("h2");
        priceM.innerText = ele.price;

        var bookN = document.createElement("button");
        bookN.addEventListener("click",function(event){
            event.preventDefault();
            booknowclick(ele);

            // var bookcardetails = JSON.parse(localStorage.getItem("carDataBase")) 
            // console.log(ele)
            window.location.href = "../PAYMENT/summary.html"


        })
        
        bookN.innerText = "BOOK NOW"
        bookN.style.marginTop = "60px"

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


showCars(carDataobj);

localStorage.setItem("carDataBase", JSON.stringify(carDataobj));


// left side problem
var ninety=[];

document.querySelector("button").addEventListener("click",function(){
    

        carDataobj.map(function(ele){

            var bigdiv = document.createElement("div");
            bigdiv.setAttribute("id", "bigDiv");
            bigdiv.style.display = "flex";
            bigdiv.style.justifyContent = "space-between";
            // bigdiv.style.border = "1px solid black";
            bigdiv.style.height = "180px";
            bigdiv.style.width = "90%";
            bigdiv.style.padding = "15px";
            bigdiv.style.marginLeft = "50px"
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
    
            var detaildiv = document.createElement("div");
            detaildiv.style.lineHeight = "25px"
    
            var roadP = document.createElement("p");
            roadP.innerText = ele.loc_km;
    
            var carName = document.createElement("h3");
            carName.innerText = ele.carName;
    
            var filterDiv = document.createElement("div");
            filterDiv.style.display = "flex"
            filterDiv.style.gap = "5px"
    
            var trasDiv = document.createElement("div");
    
            trasDiv.innerText = ele.transmission;
    
            var fuelDiv = document.createElement("div");
            fuelDiv.innerText = ele.fuelType;
    
            var seaterDiv = document.createElement("div");
            seaterDiv.innerText = ele.seater;
            seaterDiv.setAttribute("class","seater")
    
            var ratingP = document.createElement("p");
            ratingP.innerText ="🌟" + " " +ele.rating;
    
            var priceM = document.createElement("h2");
            priceM.innerText = ele.price;
    
            var bookN = document.createElement("button");
            bookN.addEventListener("click",function(event){
                event.preventDefault();
                booknowclick(ele);
    
                // var bookcardetails = JSON.parse(localStorage.getItem("carDataBase")) 
                // console.log(ele)
                window.location.href = "../PAYMENT/summary.html"
    
    
            })
ninety.push(carDataobj);

    })
    var pk=  document.querySelector(".seater");
  console.log(pk)


  var seaterstack=[];
carDataobj.forEach(function(ele){

    if(carDataobj.seater == "5")
    {
       seaterstack.push(carDataobj.seater)
    }
    showCars(seaterstack)

  })
   
  
})
