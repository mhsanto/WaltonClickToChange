let blackBtn = document.getElementById('black');
let blueBtn = document.getElementById('blue');
let redBtn = document.getElementById('red');
let BikeBtn = document.getElementById('bike');

blackBtn.onclick = function(){
    BikeBtn.style.backgroundImage = "url(waltonFridge/black.jpeg)";
}
redBtn.onclick = function(){
    BikeBtn.style.backgroundImage = "url(waltonFridge/redfridge1.jpeg)";
}
blueBtn.onclick = function(){
    BikeBtn.style.backgroundImage = "url(waltonFridge/blue.jpeg)"
}