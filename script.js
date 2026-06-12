// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    // Toggle navigation drawer on click
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Simple micro-interaction for accessibility toggle feedback
        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕"; // Close sign when expanded
        } else {
            menuToggle.innerHTML = "☰"; // Hamburger sign when collapsed
        }
    });

    // Close menu automatically if screen is resized to desktop size
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navLinks.classList.remove("active");
            menuToggle.innerHTML = "☰";
        }
    });
});