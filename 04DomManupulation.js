// getElementById 

// Example -> 1

// function handleClick()
// {
//     const name = document.getElementById("name").value;
//     alert(name)
    
// }

// Example -> 2

// const item = document.getElementById("box");
// console.log(item);
// console.log(item.id);
// console.log(item.className);
// console.log(item.getAttribute('id'));
// console.log(item.getAttribute('class'));
// console.log(item.setAttribute('id','container'));
// console.log(item.setAttribute('class','items'));
// console.log(item.id);
// console.log(item.className);
// console.log(item.getAttribute('id'));
// console.log(item.getAttribute('class'));
// const div = document.getElementById("container")
// div.style.backgroundColor = "#1e8449";
// div.style.padding = "15px";
// div.style.color = "white";
// div.style.fontSize = "20px";
// div.style.borderRadius = "8px";
// console.log(item.innerText);
// console.log(item.innerHTML);
// console.log(item.textContent);

//  querySelector

// Example -> 1

// const items = document.querySelectorAll("#items");
// console.log(items);
// items[0].style.backgroundColor = "red" 
// items[0].style.padding = "5px" 
// items[0].style.color = "white" 

// Example -> 2

// const odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i = 0; i < odd.length; i++)
// {
//     odd[i].style.backgroundColor = "red" 
//     odd[i].style.padding = "10px" 

// }
// const even = document.querySelectorAll('li:nth-child(even)');
// for(let i = 0; i < even.length; i++)
// {
//     even[i].style.backgroundColor = "green" 
//     even[i].style.padding = "10px" 

// }


// const items = document.querySelectorAll("#items");
// items.forEach((val) => {
//     val.style.margin = "10px"
//     val.style.listStyle = "none"
// })

// Example -> 3

// items.forEach((val) => console.log(val.textContent)
// )
// console.log(items.length);

// items.forEach((val) => {
//     val.style.backgroundColor = "green";
// })
// items[0].style.backgroundColor = "green" 

// Example -> 4

// const input = document.querySelector('input')
// input.value = "Enter a Name"
// input.style.padding = "10px"

// const button = document.querySelector('input[type="submit"]')
// button.style.padding = "12px"
// button.style.backgroundColor = "green"
// button.style.color = "white"
// button.style.border = "none"
// button.style.borderRadius = "8px"


// Example -> 5

// const parent = document.querySelector(".parent")
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[0].textContent);
// console.log(parent.children.length);

// for(let i = 0; i < parent.children.length; i++)
// {
//     console.log(parent.children[i].textContent);
// }


// createElement 

// Example -> 1

// const div = document.createElement("div")
// div.className = "main"
// div.id = "main-div"
// const child = document.createElement("div")
// child.id = "child-div"
// child.textContent = "Python"
// div.appendChild(child)
// const child1 = document.createElement("div")
// child1.id = "child-div"
// child1.textContent = "java"
// div.appendChild(child1)
// document.body.appendChild(div)
// console.log(div);
// div.removeChild(child1)
// console.log(div);

// createTextNode

// const child3 = document.createElement("div")
// child3.id = "child"
// child3.className = "child"
// const text = document.createTextNode("javascript")
// child3.appendChild(text)
// div.appendChild(child3)

// Example -> 2



// function addLanguage(){
//     const language = document.getElementById("task").value; 
//     const li = document.createElement('li')
//     li.className = "language"
//     li.id = "language"
//     li.style.listStyle = "none"
//     li.textContent = `${language}`
//     const ul = document.querySelector('#language')
//     ul.appendChild(li)
// }


// insert Before  example

// Get the container and the reference element (second paragraph)


const container = document.getElementById("container");
const secondPara = document.getElementById("second");

// Create a new paragraph


const newPara = document.createElement("p");
newPara.textContent = "🚀 I am inserted before the second paragraph!";
newPara.style.color = "green";

// Insert the new paragraph before the second one


container.insertBefore(newPara, secondPara);












