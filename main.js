const obj = document.getElementsByClassName("slides"); 
for(let i = 0; i != Number.parseInt(obj.length); i++){
    if(i % 2 == 0){
        obj[i].style.float = "left"
        obj[i].setAttribute("id", "toRight")
        continue; 
    }
    obj[i].style.float = "right"
    obj[i].setAttribute("id", "toLeft")
}