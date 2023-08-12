// getElementsByTagName


let liTag = document.getElementsByTagName('li');
for (li of liTag){
    console.log(li.innerText);
}

let h1Tag = document.getElementsByTagName('h1');
for (h1 of h1Tag){
    console.log(h1.innerText);
}

// getElementsByClassName
let classId = document.getElementsByClassName('list-item');
for(li of classId){
    console.log(li.innerText);
}

// getElementsById
let myId = document.getElementById('peraTag').innerText = 'Sakalaka Boom Boom';

console.log(myId);

// style using get element by id 

document.getElementById('fruit-header').style.fontSize = '80px'
document.getElementById('fruit-header').style.backgroundColor = 'red';
document.getElementById('fruit-header').style.borderRadius =  '10px';
document.getElementById('fruit-header').style.padding = '15px';
document.getElementById('fruit-header').style.color = 'white';


//get attribute

let header = document.getElementById('fruit-header');

header.getAttribute ('id');

header.getAttribute('class');

// Add class 
header.classList.add('new-class');

// Remove class
header.classList.remove('btn-white');


//set attribute

header.setAttribute('title', 'tooltip by javascript');



//get innerHtml
document.getElementsByClassName('section')[0].innerHTML;

document.getElementsByClassName('section')[0].innerHTML = '<h2>Dynamic Change</h2>';

//get innerText
document.getElementsByClassName('section')[0].innerText;
'Dynamic Change'
document.getElementsByClassName('section')[0].innerText = 'Changed again';
'Changed again'
