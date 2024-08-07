const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const count = document.querySelector("#count");
const changeVal = document.querySelector("#changeBy");
const resetBtn = document.querySelector("#reset");


incrementBtn.addEventListener('click', ()=>{
    const countVal = parseInt(count.innerText);
    const changeByValue = parseInt(changeVal.value);
    count.innerText = countVal + changeByValue;
    
    
})

decrementBtn.addEventListener('click', ()=>{
  
    const countVal = parseInt(count.innerText);
    const changeByValue = parseInt(changeVal.value);
    count.innerText = countVal - changeByValue;
})

resetBtn.addEventListener('click',()=>{
    count.innerText = 0;
})