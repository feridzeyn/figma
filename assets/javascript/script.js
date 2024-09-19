let icon = document.querySelector("header .menu .icon");
let animation = document.querySelector(".navAnimation");
let cancel_icon = document.querySelector("header .navAnimation .animation-ul i");

icon.addEventListener("click", ()=>{
animation.style.display = "block";
document.body.classList.add("myStyle")
})
cancel_icon.addEventListener("click", ()=>{
    animation.style.display = "none";
    document.body.classList.remove("myStyle")
})