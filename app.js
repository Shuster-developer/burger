const control = document.querySelector(".control");
const meatbnt = document.querySelector(".meat");
const picklebnt = document.querySelector(".pickle");
const tomatobtn = document.querySelector(".tomato");
const cheesebtn = document.querySelector(".cheese")
const salatbnt = document.querySelector(".salad");
const onionbtn = document.querySelector(".onion");
const btn = document.querySelector(".btn")
const reset = document.querySelector(".reset")
const pricr = document.querySelector(".pricr");
const total = document.querySelector(".total");

let totalPrice = 2000;
let onionsum = 1000;
let meatsum = 10000;
let tomatosum = 4000;
let salatsum = 2000;
let cheesesum = 2000;
let picklesum = 4000; 

total.textContent = `Price:${totalPrice}`;


onionbtn.addEventListener("click", function () {
    const onion = document.createElement("img");
    onion.className = "onionsr"
    totalPrice = totalPrice + onionsum;
    total.textContent = `Price:${totalPrice}`
    onion.setAttribute("src", "burger-layers/onion.svg");
    control.appendChild(onion)

});

meatbnt.addEventListener("click", function () {
    const meat = document.createElement("img");
    meat.className = "mitchild"
    totalPrice = totalPrice + meatsum;
    total.textContent = `Price:${totalPrice}`
    meat.setAttribute("src", "burger-layers/meat.svg");
    control.appendChild(meat)
});

picklebnt.addEventListener("click", function () {
    const pickle = document.createElement("img");
    pickle.className = "picklechild"
    totalPrice = totalPrice + picklesum;
    total.textContent = `Price:${totalPrice}`
    pickle.setAttribute("src", "burger-layers/pickle.svg");
    control.appendChild(pickle)
});

tomatobtn.addEventListener("click", function () {
    const tomato = document.createElement("img");
    tomato.className = "tomatochild"
    totalPrice = totalPrice + tomatosum;
    total.textContent = `Price:${totalPrice}`
    tomato.setAttribute("src", "burger-layers/tomato.svg");
    control.appendChild(tomato)
});

cheesebtn.addEventListener("click", function () {
    const cheese = document.createElement("img");
    cheese.className = "cheesechild"
    totalPrice = totalPrice + cheesesum;
    total.textContent = `Price:${totalPrice}`
    cheese.setAttribute("src", "burger-layers/cheese.svg");
    control.appendChild(cheese)
});

salatbnt.addEventListener("click", function () {
    const salad = document.createElement("img");
    salad.className = "saladchild";
    totalPrice = totalPrice + salatsum;
    total.textContent = `Price:${totalPrice}`
    salad.setAttribute("src", "burger-layers/salad.svg");
    control.appendChild(salad)
});

control.addEventListener("click", function (e) {
    control.removeChild(e.target);
    if (e.target.className == 'onionsr') {
        totalPrice = totalPrice - onionsum;
        total.textContent = `Price:${totalPrice}`}
    if(e.target.className == "mitchild") {
        totalPrice = totalPrice-meatsum;
        total.textContent = `Price:${totalPrice}`
    }
    if (e.target.className == "picklechild") {
        totalPrice= totalPrice-picklesum;
        total.textContent = `Price:${totalPrice}`
    }
    if (e.target.className == "tomatochild") {
        totalPrice = totalPrice - tomatosum;
        total.textContent = `Price:${totalPrice}`
    } 
    if (e.target.className == "cheesechild") {
        totalPrice = totalPrice - cheesesum;
        total.textContent = `Price:${totalPrice}`
    } 
    if (e.target.className == "saladchild") {
        totalPrice = totalPrice - salatsum;
        total.textContent = `Price:${totalPrice}`
    } 

})

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
    alert("sizning buyurtmangiz  " + random + "№")
});

reset.addEventListener("click", function () {
    total.innerHTML = "Price:2000"
    control.innerHTML = '';
});
