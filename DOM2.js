//insert elements

//syntax :-  let el=document.createElement("div")

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

//to add at the end of the node(inside) :- node.append(el)

let div = document.querySelector("div");
div.append(newBtn);
newBtn.style.backgroundColor = "blue";


//to add at the start of the node(inside) :-node.prepend(el)
let Btn2 = document.createElement("button");
Btn2.innerText = "click me";
console.log(Btn2);


div.prepend(Btn2);
Btn2.style.backgroundColor = "purple";

//to add before the node(outside) :- node.before(el)

let Btn3 = document.createElement("button");
Btn3.innerText = "click me";
console.log(Btn3);

div.before(Btn3);
Btn3.style.backgroundColor = "black";
Btn3.style.color = "white";


//to add after the node(outside) :- node.after(el)
let Btn4 = document.createElement("button");
Btn4.innerText = "click me";
console.log(Btn4);

div.after(Btn4);
Btn4.style.backgroundColor = "green";
Btn4.style.color = "white";


// to remove any element :- node.remove()

Btn3.remove();

//Events

Btn4.onclick = () => {
    console.log("BTn4 was clicked");
    Btn4.style.backgroundColor = "black";
}

Btn2.onmouseover = () => {
    Btn2.style.backgroundColor = "pink";
    Btn2.innerText = "btn2 was clicked";


}

newBtn.ondblclick = () => {
    newBtn.innerText = "btn1 was clicked";
    newBtn.style.backgroundColor = "gray";
}