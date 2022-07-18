
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
sidebar.classList.toggle("active");
if(sidebar.classList.contains("active")){
sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
} else
sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

let form = []
function generateReport (){
    let data = [];
        data[0] = data ["firstShed"] = parseInt(document.getElementById("firstShed").value);
        data[1] = data ["secondShed"] = parseInt(document.getElementById("firstShed").value);
        data[2] = data ["thirdShed"] = parseInt(document.getElementById("firstShed").value);
        data[3] = data ["fourthShed"] = parseInt(document.getElementById("firstShed").value);
    let sumData = data.firstShed + data.secondShed + data.thirdShed + data.fourthShed;;
    document.getElementById("outputData").innerHTML += "<Br>"
    document.getElementById("outputData").innerHTML += "<p>Your production in shed A is " + data.firstShed + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed B is " + data.secondShed + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed C is " + data.thirdShed + " litres per day</p>";
    document.getElementById("outputData").innerHTML += "<p>Your production in shed D is " + data.fourthShed + " litres per day</p>";

    document.getElementById("outputData").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";

    var dailyIncome = sumData * 45;
    document.getElementById("outputData").innerHTML += "<Br>"

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("outputData").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    document.getElementById("outputData").innerHTML += "<Br>"
}
