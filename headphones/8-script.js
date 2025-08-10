// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const menu = nav.querySelector("ul");

    // Create hamburger button
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Insert the hamburger into nav
    nav.insertBefore(hamburger, menu);

    // Toggle menu on click
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
});
