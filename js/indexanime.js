document.addEventListener('DOMContentLoaded', function() {
    // After the DOM has loaded, trigger the animation
    setTimeout(function() {
        animateSection();
    }, 500); // Adjust the delay as needed
});

function animateSection() {
    var animatedSection = document.getElementById('footer-main');
    animatedSection.style.bottom = '-55vh'; // Move the section to the top
    var animatedSection2 = document.getElementById('footer');
    animatedSection2.style.height = '26vh'; // Move the section to the top
    var animatedSection3 = document.getElementById('animate');
    animatedSection3.style.marginBottom = '55vh'; // Move the section to the top
    var animatedSection4 = document.getElementById('ani-l');
    animatedSection4.style.width = '250px'; // Move the section to the top
}
