const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#Hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a,b) {
    var sumOfSquare = a*a + b*b;
    return sumOfSquare;
} 

function calhypo(){
     const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
     const lengthOfhypoteneuse = Math.sqrt(sumOfSquares);
     output.innerText = "The length of hypotenuse is " + 
     lengthOfhypoteneuse
}

hypotenuseBtn.addEventListener("click", calhypo);








