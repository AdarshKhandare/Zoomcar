var completedA = JSON.parse(localStorage.getItem("admitted"));
console.log(completedA);

completed.map(function (ele, index) {

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

    row.append(name,age,gender,email,mobileNumber);

    document.querySelector("#body").append(row);
});

