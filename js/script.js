/* =====================
Dark Mode
===================== */

const darkBtn = document.getElementById("darkToggle");

if (darkBtn) {

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

});

}

/* استرجاع الوضع */

window.addEventListener("load", () => {

const theme = localStorage.getItem("theme");

if(theme === "dark"){
document.body.classList.add("dark");
}

});


/* =====================
Counter Animation
===================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const value = +counter.innerText;

const increment = target / 100;

if(value < target){

counter.innerText = Math.ceil(value + increment);

setTimeout(updateCounter, 25);

}else{

counter.innerText = target;

}

};

updateCounter();

});


/* =====================
Navbar Shadow
===================== */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(!navbar) return;

if(window.scrollY > 50){

navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";

}else{

navbar.style.boxShadow = "none";

}

});
