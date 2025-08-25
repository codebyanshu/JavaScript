let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");

let mouseX = 0;
let mouseY = 0;
let animationId = null;
let timer = null;
let interval = null;
document.addEventListener('mousemove', function (eventObj) {
    mouseX = eventObj.clientX;
    mouseY = eventObj.clientY;

    smallCursor.style.left = mouseX + "px";
    smallCursor.style.top = mouseY + "px";
    if (!animationId) {
        animateShadowCursor();
    }
    clearTimeout(timer);
    interval = setInterval(() => {
        timer = setTimeout(() => {
            cancelAnimationFrame(animationId);
        }, 2000)
        //    animateShadowCursor();
    }, 2000);
    clearInterval(interval);
})
function animateShadowCursor() {

    let currentX = parseFloat(shadowCursor.style.left) || 0;
    let currentY = parseFloat(shadowCursor.style.top) || 0;

    // console.log(mouseX,mouseY);
    // console.log(currentX, currentY);


    let distanceX = mouseX - currentX;
    let distanceY = mouseY - currentY;
    // console.log(distanceX, distanceY);

    shadowCursor.style.left = currentX + distanceX * 0.1 + "px";
    shadowCursor.style.top = currentY + distanceY * 0.1 + "px";

    // console.log(currentX + distanceX * 0.1 + "px");

    animationId = requestAnimationFrame(animateShadowCursor);
    console.log(animationId);



}
