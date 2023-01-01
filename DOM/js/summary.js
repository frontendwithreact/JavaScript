

const blogs = document.getElementsByTagName('p');

// console.log(blogs)
for(const blog of blogs){
    // console.log(blog);
    blog.style.color ='green';
    blog.style.textDecorationLine ='underline';
}


// ** Change the specifice element where has ID.
const changeText = document.getElementById('last-blog');

// changeText.innerText = "Hi! I need to change my policy";
changeText.innerHTML = `
    <ul>
        <li>School 01</li>
        <li>School 02</li>
        <li>School 03</li>
        <li>School 04</li>
        <li>School 05</li>
        <li>School 06</li>
        <li>School 07</li>
        <li>School 08</li>
    </ul>
`;

// ** Want to remove any friend from the list dom array.

const friends = document.getElementById('friends');

// console.log(friends);
// console.log(friends.childNodes);
// console.log(friends.children);

const reEl = friends.children[4];
    // console.log(reEl);

    friends.removeChild(reEl);

    // Create new element and add it into object
    const addChild = document.createElement('li');
    addChild.innerText = "Hello";

    friends.appendChild(addChild);