/* =========================
   Dark Mode (احترافي)
========================= */

const darkBtn = document.getElementById("darkToggle")

if(darkBtn){

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark")

/* حفظ الوضع */

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark")

}else{

localStorage.setItem("theme","light")

}

})

}

/* استرجاع الوضع */

window.addEventListener("load", () => {

const theme = localStorage.getItem("theme")

if(theme === "dark"){

document.body.classList.add("dark")

}

})


/* =========================
   Counter Animation
========================= */

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {

counter.innerText = "0"

const updateCounter = () => {

const target = +counter.getAttribute("data-target")
const value = +counter.innerText
const increment = target / 120

if(value < target){

counter.innerText = Math.ceil(value + increment)
setTimeout(updateCounter, 20)

}else{

counter.innerText = target

}

}

updateCounter()

})


/* =========================
   Scroll Animation
========================= */

const faders = document.querySelectorAll(".fade")

const appearOptions = {

threshold:0.2

}

const appearOnScroll = new IntersectionObserver(function(entries){

entries.forEach(entry => {

if(!entry.isIntersecting){

return

}else{

entry.target.classList.add("show")

}

})

}, appearOptions)


faders.forEach(fader => {

appearOnScroll.observe(fader)

})


/* =========================
   Smooth Scroll
========================= */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

})

})

})


/* =========================
   Navbar Shadow on Scroll
========================= */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar")

if(window.scrollY > 50){

navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)"

}else{

navbar.style.boxShadow = "none"

}

})
