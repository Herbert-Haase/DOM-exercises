const demo = document.querySelector("#demo");

const redText = document.createElement("div");
redText.classList.add("redText");
redText.textContent = "Hi I am red";
redText.style.color = 'red';

const blueh3 = document.createElement('h3');
blueh3.classList.add("blueh3");
blueh3.textContent = "Hi I'm h3!"
blueh3.style.color = "blue";

demo.appendChild(redText);
demo.appendChild(blueh3)

const blackBox = document.createElement('div');
blackBox.classList.add('blackBox');
blackBox.style.cssText = 'border:black; background:pink';

const h1 = document.createElement('h1');
h1.textContent = "I am in a div!";
h1.classList.add('H1');
blackBox.appendChild('H1');

const p = document.createElement('p');
p.textContent = "ME TOO";
blackBox.appendChild('p');

demo.appendChild("blackBox");