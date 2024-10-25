

let countEl = document.getElementById("count-el")
console.log(countEl);

let count = 0; //initializer
function increment(){
    count +=1;
    countEl.innerText = count;
}
let saveEl = document.getElementById("save-el");
function save(){
    let countStr = count +" - ";
    saveEl.textContent += countStr //innerText does not work very well here, so better we use textContent instead
    countEl.textContent = 0 //set the number of passengers to 0 every time i press save
    count = 0;
}



