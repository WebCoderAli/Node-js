const root = document.querySelector('.root');

const h1 = document.createElement('h1');
h1.textContent = 'hello world by Js';

root.appendChild(h1);

h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.backgroundColor = 'yellow';

const list = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'item 1';
list.appendChild(li1);
root.appendChild(list);