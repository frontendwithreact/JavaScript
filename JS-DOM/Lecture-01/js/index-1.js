//01 object definition
// const student = { name: 'Abdul Halim', age: 27, height: 60 }
// console.log(student);

//02 Get the html body
// console.log(document.body);

//03 array declaration
// const blogTitles = ['h3', 'h3'];
// console.log(blogTitles);

// const blogDetails = document.getElementsByTagName('h3');
// console.log(blogDetails);

// for (const element of blogDetails) {
//     // console.log(blogDetails);
//     console.log(element.innerText);
// }

//----------------------------------------------------------------------
// get the id of an element and do it center?
const firstTitle = document.getElementById('first-title');
// center
firstTitle.style.textAlign = 'center';
firstTitle.innerText = 'JavaScript Object Model is the most important part !';
firstTitle.style.background = 'salmon';
firstTitle.style.padding = '10px';
firstTitle.style.borderRadius = '10px';
firstTitle.style.cursor = 'pointer';

//-----------------------------------------------------------------
// create and add element by using JS?

// step: 01 create element
const li = document.createElement('li');
li.innerText = 'Blog-5';

// step: 02 add element under parent element.
const ul = document.getElementById('blog-list');
// const body = document.body;
// const body = document.body;
// body.appendChild(li);
ul.appendChild(li);

// step: 03 add few style for new added element.
li.style.color = 'blue';
li.style.fontSize = '20px';
li.style.fontWeight = 'bold';
//------------------------------------------------------------------

// add class in any elements.
// step: 01 create element.
const newArticle = document.createElement('article');
newArticle.innerHTML = `
    <h3>I am new this area? </h3>
    <p>May I go out. Sir, May I come in. Sir, I have decided to learn English.</p>
`;
newArticle.classList.add('blog');
// step: 02 add element under parent element.
const blogSection = document.getElementById('blogs');
blogSection.appendChild(newArticle);
//---------------------------------------------------------------------

  // Add common style for all kind of same class-name.
        const blogs = document.getElementsByClassName('blog');
        for (const blog of blogs) {
            blog.style.border = '2px solid orange';
            blog.style.borderRadius = '10px';
            blog.style.margin = '5px';
            blog.style.padding = '5px';
        }

//-----------------------------------------------------------------------


// get html elements in js by using tag name?
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);

// const ul = document.getElementsByTagName('ul');
// console.log(ul);

// const header = document.getElementsByTagName('header');
// console.log(header);

// const section = document.getElementsByTagName('section');
// console.log(section);

// capture and change Element by using ID.

