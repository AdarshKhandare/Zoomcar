document.querySelector("form").addEventListener("submit",studentData)


var dataArr = JSON.parse(localStorage.getItem("studentDataBase")) || [];


function studentData(event){
    event.preventDefault();

    var dataObj = {
        name : document.querySelector("#name").value,
        age : document.querySelector("#age").value,
        gender : document.querySelector("#gender").value,
        email : document.querySelector("#email").value,
        mobileNumber : document.querySelector("#phone").value
    };

    dataArr.push(dataObj);

    console.log(dataArr);
    localStorage.setItem("studentDataBase", JSON.stringify(dataArr));


}


