var card = JSON.parse(localStorage.getItem("summaryData"))
console.log(card)

showsummary(card)
 function showsummary(card){

    card.map(function(e){

        var pay = document.createElement("h2")

        pay.innerText = "Pay INR" +" "+e.price;

    document.querySelector("#p2").append(pay);
    // window.location.href = "./PAYMENT/succesful.html"

    });
 }