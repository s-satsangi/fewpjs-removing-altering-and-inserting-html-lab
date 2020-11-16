// Write your code here!
let main = document.getElementById('main');
main.remove();
let element = document.createElement('div');
document.body.appendChild(element);
let newHeader = document.createElement('h1');
element.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = "YOUR-NAME is the champion";