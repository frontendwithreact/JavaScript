

const pragraphs = document.getElementsByTagName('p');

// console.log(pragraphs);
for (const p of pragraphs) {
    p.style.color = 'red';
    
}

const friends = document.getElementById('friends');
const four = friends.children[4];

friends.removeChild(four);

const addChild = document.createElement('h2');
addChild.innerText = 'Zoom IT';

friends.appendChild(addChild);

addChild.style.margin = '0';
addChild.style.padding = '0';

