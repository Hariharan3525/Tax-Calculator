const grossAnnualIncome = document.getElementById("grossAnnualIncome");
const extraIncome = document.getElementById("extraIncome");
const deductionAmt = document.getElementById("deductionAmt");
const ageGroup = document.getElementById("ageGroup");
const submitBtn = document.getElementById("submitBtn");
let tax,taxpercent,resIncome;

let modal = document.getElementById("myModal");
// let span = document.getElementsByClassName("close")[0];
let closeBtn = document.getElementById("closeBtn")
let finalIncome = document.getElementById("finalIncome");

closeBtn.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(e){
    if(e.target == modal)
    {
        modal.style.display = "none";
    }
}

submitBtn.onclick = function(){

    modal.style.display = "block";

    let overallIncome = Number(grossAnnualIncome.value) + Number(extraIncome.value) - Number(deductionAmt.value);
    if(overallIncome<=800000)
    {
        resIncome = overallIncome;
        finalIncome.textContent = resIncome.toLocaleString('en-IN');
    }
    else{
        if(ageGroup.value == "opt1")
        {
            taxpercent = 0.3;
            tax = taxpercent * (overallIncome - 800000);
            resIncome = overallIncome - tax;
            finalIncome.textContent = resIncome.toLocaleString('en-IN');
        }
        else if(ageGroup.value == "opt2")
        {
            taxpercent = 0.4;
            tax = taxpercent * (overallIncome - 800000);
            resIncome = overallIncome - tax;
            finalIncome.textContent = resIncome.toLocaleString('en-IN');;
            
        }
        else if(ageGroup.value == "opt3")
        {
            taxpercent = 0.1;
            tax = taxpercent * (overallIncome - 800000);
            resIncome = overallIncome - tax;
            finalIncome.textContent = resIncome.toLocaleString('en-IN');;
        }
    }
}