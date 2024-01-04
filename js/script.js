let hole=document.querySelectorAll(".hole");
let kon=document.querySelectorAll(".kon");
hole.addEventListener("mouseenter",function(){
    display(),
})
function display(){
    kon.classList.add("d-flex");
    kon.classList.remove("d-none");
   
}