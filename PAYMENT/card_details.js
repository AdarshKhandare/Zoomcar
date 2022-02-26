var card = JSON.parse(localStorage.getItem("summaryData"))
console.log(card)

showsummary(card)
 function showsummary(card){

    card.map(function(e){

        var pay = document.createElement("p")
        pay.setAttribute = ("id", "amt")

        pay.innerText = "Amount:" +" "+e.price;

    document.querySelector("#price > div").append(pay);
    // window.location.href = "./PAYMENT/succesful.html"

    });
 }
