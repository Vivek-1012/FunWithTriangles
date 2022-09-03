const inputSides = document.querySelectorAll(".input");
const checkBtn = document.querySelector("#CheckArea");
const outPut = document.querySelector("#outputA");

function calculateArea(base , height) {
    const calculation = base * height /2 ;
    return(calculation);
} 


function triangleIs() {
    const calculation = calculateArea(Number(inputSides[0].value),Number(inputSides[1].value));
    outPut.innerText = "Area of Triangle is " + calculation + " cm² ";
    
    }


checkBtn.addEventListener("click", triangleIs);
