
var database = JSON.parse(localStorage.getItem("studentDataBase"))
var completed = JSON.parse(localStorage.getItem("completedTods")) || [];
console.log(database)

// database.map(function(ele,ind,arr){

// document.studentDataBase("#body").innerText = null;
    database.map(function(ele,ind,arr){

    var row = document.createElement("tr")
    var name = document.createElement("td")
    name.innerText = ele.name;
    var age = document.createElement("td")
    age.innerText = ele.age;
    var gender = document.createElement("td")
    gender.innerText = ele.gender;
    var email = document.createElement("td")
    email.innerText = ele.email;
    var mobileNumber = document.createElement("td")
    mobileNumber.innerText = ele.phone;
    var accepted = document.createElement("button")
    accepted.innerText = "Accepted";
    accepted.addEventListener("click" ,function(){
        markAComplete(ele)
    })
    var rejected = document.createElement("button")
    rejected.innerText = "Rejected";
    rejected.addEventListener("click" ,function(){
        markRComplete(ele)
    })

    row.append(name,age,gender,email,mobileNumber,accepted,rejected);

    document.querySelector("#body").append(row);
    
});
function markAComplete(elem) {
  console.log(elem);
  completed.push(elem);
  localStorage.setItem("admitted", JSON.stringify(completedA));
}
function markRComplete(elem) {
  console.log(elem);
  completed.push(elem);
  localStorage.setItem("rejected", JSON.stringify(completedR));
}
