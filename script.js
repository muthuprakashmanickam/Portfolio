document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';
});
document.getElementById('color-change-btn').addEventListener('click', function() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate a random color
    document.body.style.backgroundColor = randomColor;
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top-btn');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
