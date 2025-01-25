document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    menuBtn.addEventListener("click", () => {
        const isVisible = navLinks.style.display === "block";
        navLinks.style.display = isVisible ? "none" : "block";
    });
});
