// Write your script here

let counter = 1;
function increment() {
  const p = document.querySelector("#counter");
  alert(p.innerText);
  p.innerText = counter;
  counter++;
}
