function fadeOut(element, _callBack) {
    let op = 1;  // initial opacity
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
	    element.style.display = 'none';
	    _callBack();
	}
	element.style.opacity = op;
	element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    let op = 0.1;  // initial opacity
    let timer = setInterval(function () {
	if (op >= 1){
	    clearInterval(timer);
	}
	element.style.opacity = op;
	if (element.style.display != 'block'){
	    element.style.display = 'block';
	}
	element.style.filter = 'alpha(opacity=' + op * 100 + ")";
	op += op * 0.1;
    }, 100);
}

function fadeOutAndFadein(fadeOutElement, fadeInElement){
    fadeOut(fadeOutElement, function (){
	fadeIn(fadeInElement);
    });
}

let des = document.getElementById("description");
let bio = document.getElementById("bio");

des.addEventListener("click", function(){
    des.classList.remove("fade-in");
    fadeOutAndFadein(des, bio);
})
