let sections = document.querySelectorAll('.section');

for(let section of sections){
    section.style.backgroundColor = 'blue';
    section.style.borderRadius = '10px'
    section.style.color = 'white';
    section.style.maxWidth = '700px';
    section.style.margin = '10px auto';
    section.style.padding = '15px';
}

let specific = document.getElementById('third');

specific.classList.add('custom-class');

specific.classList.remove('custom-class');

console.log(specific.childNodes);
console.log(specific.firstChild);
console.log(specific.childNodes[1]);
console.log(specific.childNodes[5].childNodes);
console.log(specific.childNodes[5].childNodes[2].nextSibling);

let specificUl = document.querySelector('#third ul');

console.log(specificUl);

let text = document.createElement('p').innerText = 'this is peragraph that was created by javascript'

console.log(text);

console.log(specific.parentNode);