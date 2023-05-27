let nav = document.getElementsByTagName("nav")[0];
let toggle = document.getElementsByClassName("toggle")[0];

toggle.addEventListener("click",() => {
    nav.classList.toggle("active");
});