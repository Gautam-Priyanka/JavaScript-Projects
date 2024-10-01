let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click",function(){
    let li = document.createElement("li");
    
    li.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList = "delete";
    li.appendChild(delBtn);
    ul.appendChild(li);
    console.log(inp.value);
    inp.value = "";
});

/* let delBtns = document.querySelectorAll(".delete");
for(let delBtn of delBtns){
    delBtn.addEventListener("click",function(){
         let par = this.parentElement;
        par.remove(); 
        
        
    })
} 
 */

ul.addEventListener("click",function(event){
   // console.log(event.target); // now here target where we clicked it prints now we want to select whole list
   //console.log(event.target.nodeName); // now we know which element is getting target 
    if(event.target.nodeName == "BUTTON")
    {
        let listitem = event.target.parentElement;  //  here we are targeting parent for helping to delete the whole element with the help of event bubling
        console.log("deleted");
        listitem.remove();
        
        
    }
    else{
        console.log("not deleted");
    }
    
})