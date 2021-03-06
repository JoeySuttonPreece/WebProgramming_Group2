buttonT1 = document.querySelector("#T1");
buttonT1.onclick = () => {
    alert("You are the most awesomest of most!");
};

buttonT2 = document.querySelector("#T2");
buttonT2.onclick = () => {
    alert("You are the most awesomest of most!");
    buttonT2.value = "Hell Yea, lets do it again!";
};

inputT3 = document.querySelector("#T3i");
buttonT3 = document.querySelector("#T3b");
buttonT3.onclick = () => {
    alert(`Yep, thats: ${inputT3.value * 7} dog years.`);
    buttonT3.value = "Wolf, lets do it again!";
};

buttonT4 = document.querySelector("#T4b");
linkT4 = document.querySelector("#T4l");
buttonT4.onmouseover = () => {
    buttonT4.disabled = true;
};
linkT4.onclick = () => {
    buttonT4.disabled = false;
};


buttonT5 = document.querySelector("#T5");
var myListener = (e) => {
    xEl = buttonT5.offsetLeft + buttonT5.offsetWidth / 2;
    yEl = buttonT5.offsetTop + buttonT5.offsetHeight / 2;

    radius = ((buttonT5.offsetWidth / 2) ** 2 + (buttonT5.offsetHeight / 2) ** 2) ** 0.5;
    
    e = e || window.event;
    
    var xMo = e.pageX;
    var yMo = e.pageY;

    xDist = xMo - xEl;
    yDist = yMo - yEl;

    distance = ((xEl - xMo) ** 2 + (yEl - yMo) ** 2) ** 0.5;
    
    buttonT5.style.transform = `translate(${-xDist / distance * radius * 2}px, ${-yDist / distance * radius * 2}px)`;
    console.log(xDist, distance, radius);
};

document.addEventListener('mousemove', myListener, false);