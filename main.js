const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calSumOfAngle(angle1 , angle2 , angle3) {
    const sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle;
}

function isTriangle() {
    const sumOfAngle = calSumOfAngle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngle === 180){
        outputEl.innerText = "Yay, The angles form a triangles";
    } else{
        outputEl.innerText = "oh, oh! The angles don't form a triangle";    
    }
}


isTriangleBtn.addEventListener("click", isTriangle); 