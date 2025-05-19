let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const navList = document.getElementById('nav-list'); 

    if (window.scrollY > lastScrollY) {
        nav.classList.add("nav-hidden");
        if (navList.style.display === 'flex') { 
            navList.style.display = 'none';
        }
    } else {
        nav.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("ul");
    if (window.scrollY > lastScrollY) {
        nav.classList.add("nav-list-hidden");
    } else {
+        nav.classList.remove("nav-list-hidden");
    }
    lastScrollY = window.scrollY;
});

function toggleModal() {
    const modal = document.getElementById("nav-modal");
    const navList = document.querySelector(".nav-list");

    if (window.innerWidth <= 768) {
        modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    } else {
        navList.style.display = "flex";
    }
}

document.getElementById('menu-icon').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', function(event) {
    const navList = document.getElementById('nav-list');
    const menuIcon = document.getElementById('menu-icon');

    if (navList.style.display === 'flex') {
        
        if (!navList.contains(event.target) && event.target !== menuIcon) {
            navList.style.display = 'none'; 
        }
    }
});