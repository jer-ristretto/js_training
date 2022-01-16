let count = 0;

function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

let messageToUserEl = document.getElementById("messageToUser");
messageToUserEl.innerText = "Previous entries:";

function save() {
  messageToUserEl.textContent += count + " - ";
}
