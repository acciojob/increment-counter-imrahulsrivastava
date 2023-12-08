// Write your script here

function increment() {
  alert(count);
  count++;
  p.innerText = count;
}

let count = 0;
const p = document.querySelector("#counter");
p.innerText = count;
