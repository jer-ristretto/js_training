let count = 0;
let messageToUserEl = document.getElementById("messageToUser");
let countEl = document.getElementById("count-el");

function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    messageToUserEl.textContent += count + " - ";
    countEl.innerText = 0;
    count = 0;
}
