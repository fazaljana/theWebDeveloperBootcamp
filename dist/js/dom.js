let list = document.querySelector ("#list");
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const buttons = []
console.log (list);

let n = 0
while (n < 100) {
    console.log (n)
    let createButton = document.createElement('button');
    createButton.classList.add ("px-3", "py-4", "bg-sky-500","m-2");
    createButton.innerText = `Button Number ${n}`;
    list.insertAdjacentElement('afterend',createButton);
    n++;
} dfadfas



let createButton = document.createElement('button');





for (let i = 100; i > buttons.length;  i--) {
    
    
    console.log (i);

    
}