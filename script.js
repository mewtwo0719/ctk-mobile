var menu = document.querySelector(".menu")
var main = document.querySelector(".wrapper")
var menuShow = false;
function showMenu(){
    if(!menuShow){
    menu.classList.remove("hide");
    main.classList.add("inactive");
    menuShow = true;
}else{
    menu.classList.add("hide");
    main.classList.remove("inactive");
    menuShow = false;
}
}