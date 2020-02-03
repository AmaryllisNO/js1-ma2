// 1. 
let myFunctionExpression = function() {
    console.log("Alexis");
}

// 2. 
const button = document.getElementsByClassName("btn")

const callClickFunction= function() {
    console.log("The button was clicked");
}

button[0].addEventListener("click", callClickFunction); 

// 3. 
const firstName = document.getElementById("firstName");

function callAfterKeyIsPressed(event) {
    console.dir(event.key);
}

firstName.addEventListener("keydown", callAfterKeyIsPressed);

// 4. 
const buttonByTag = document.getElementsByTagName("button");

buttonByTag[0].addEventListener("mouseover", function(event) {
    event.target.classList.add("hover");
})

// 5. 
const buttonByData = document.querySelectorAll('[data-animal="dog"]');

buttonByData[0].addEventListener("mouseout", function(event) {
    event.target.classList.remove("hover");
})

// 6. 
const animalListItems = document.querySelectorAll("li");

for (let index = 0; index < animalListItems.length; index++) {
    animalListItems[index].addEventListener("mouseover", function() {
        console.log(animalListItems[index].dataset.animal);
    });
}

// 7. 

const animal = "cow"; 

switch(animal) {
    case "cat":
        console.log("Meow");
        break; 
    
    case "cow":
        console.log("Moo");
        break; 

    case "bird": 
        console.log("Tweet")
        break;
    
    default: 
        console.log("Harrumpth");
}

// 8. 
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(theSheep) {
    console.log(theSheep);
});

// 9. 
function logTime() {
    console.log("hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }

    counter++;
}

let counter = 0; 

const intervalId = setInterval(logTime, 6000);

// 10. 
const container = document.querySelector('.container');

function updateText() {
    container.innerHTML = "Text updated";

    if(containerCounter === 0) {
        clearInterval(intervalTextId);
    }

    containerCounter++;
}

let containerCounter = 0; 

const intervalTextId = setInterval(updateText, 2000);
