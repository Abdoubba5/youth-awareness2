/* dark mode */

const btn = document.getElementById("darkToggle");

btn.onclick = ()=>{

document.body.classList.toggle("dark");

};

/* counter */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target = +counter.getAttribute("data-target");

const value = +counter.innerText;

const increment = target/100;

if(value < target){

counter.innerText = Math.ceil(value + increment);

setTimeout(update,30);

}else{

counter.innerText = target;

}

};

update();

});

/* animation */

const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

faders.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight-100){

el.classList.add("show");

}

});

});
