let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        nav.classList.add("nav-hidden");
    } else {
        // Scrolling up
        nav.classList.remove("nav-hidden");
    }
    lastScrollY = window.scrollY;
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("ul");
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        nav.classList.add("nav-list-hidden");
    } else {
        // Scrolling up
        nav.classList.remove("nav-list-hidden");
    }
    lastScrollY = window.scrollY;
});

function toggleModal() {
    const modal = document.getElementById("nav-modal");
    const navList = document.querySelector(".nav-list");

    // Check screen width to decide behavior
    if (window.innerWidth <= 768) {
        modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    } else {
        // Do nothing for larger screens
        navList.style.display = "flex";
    }
}

document.getElementById('menu-icon').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});