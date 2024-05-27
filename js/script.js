document.addEventListener("DOMContentLoaded", function() {
    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const header = document.querySelector(".header");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            header.classList.toggle("open");
        });
    }
}); 

// Smooth scroll to sections (if needed)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(Link => {
    Link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});
