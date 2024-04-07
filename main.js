function toggleMenu() {
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function() {
    // Select the slidingText element
    const slidingText = document.getElementById("title");

    // Trigger the animation by adding a CSS class
    slidingText.classList.add("slide-up");

    // You can also remove the class to reset the animation if needed
    setTimeout(() => {
        slidingText.classList.remove("slide-up");
    }, 5000); // Adjust the duration as needed
});