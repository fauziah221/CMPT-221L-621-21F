var tittle = document.querySelector(".title");
var h1 = document.querySelector(".title");
var h3= document.querySelector("#bossy");
var p = document.querySelector("#description");
var body = document.querySelector("body");
var lis = document.querySelectorAll("li");

h1.textContent = "Hi, I changed my title text through JavaScript!";
p.textContent = "Fauziah Ibrahim";
h3.textContent = "Please see below a few things I would like you to do:"
lis[0].style.color = "blue";
lis[1].style.backgroundColor = "#FFFDD0";
body.style.backgroundColor = "gray";
lis[3].style.textTransform = "uppercase";
lis[4].classList.add(".title");


