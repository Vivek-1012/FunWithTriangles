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
     if(sides[0].value == 0)
     {
        output.innerText = (" 😑 Value can't be NULL in Side A 😑");
     }
     else if(sides[0].value < 0)
     {
        output.innerText = ("😨 Value can't be Negative in Side A 😨");
     }
     else  if(sides[1].value == 0)
     {
        output.innerText = (" 😑 Value can't be NULL in Side B 😑");
     }
     else  if(sides[1].value < 0)
     {
        output.innerText = ("😨 Value can't be Negative in Side B 😨");
     }
     else{
     output.innerText = "The length of hypotenuse is " + 
     lengthOfhypoteneuse.toFixed(2) + "cm² 🧐" ; }
}

hypotenuseBtn.addEventListener("click", calhypo);








