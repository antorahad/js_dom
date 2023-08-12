let placeList = document.getElementById('places-list');

let li = document.createElement('li');
li.innerText = 'Rangdi Para';

placeList.appendChild(li);

console.log(placeList);

let mainContent = document.getElementById('main-content');
let section = document.createElement('section');

section.innerHTML = '<h1>This is a header tag</h1>';
mainContent.appendChild(section);
console.log(mainContent);