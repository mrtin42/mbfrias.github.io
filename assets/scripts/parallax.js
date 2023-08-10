document.addEventListener("DOMContentLoaded", function () {
    const parallaxSections = document.querySelectorAll("#intro");

    window.addEventListener("scroll", function () {
        parallaxSections.forEach(function (section, index) {
            const scrollPosition = window.scrollY;
            section.style.backgroundPositionY = -(scrollPosition * 0.5) + "px"; // Adjust the factor for desired parallax effect
        });
    });
});
