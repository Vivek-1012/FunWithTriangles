const inputSides = document.querySelectorAll(".input")
const checkBtn = document.querySelector("#CheckArea")
const outPut = document.queryCommandValue("#outputA")

function calculateArea(base , height) {
    const calculation = base * height /2 ;
    return(calculation);
} 


function triangleIs() {
    const calculation = calculateArea(Number(inputSides[0].value),Number(inputSides[1].value));
    if(calculation > 0 ) {
    output.innerText = "Area of Triangle is " + calculation + "cm²";} else{
        outPut.innerText = "Enter the correct value";
    }
}

checkBtn.addEventListener("click", triangleIs);
