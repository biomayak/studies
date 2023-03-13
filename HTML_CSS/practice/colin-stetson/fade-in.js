window.addEventListener('load', function() {
    const element = document.querySelector('.page');
    setTimeout(function() {
        element.classList.add('page--active');
    }, 5000); // Delay the fade-in effect for 1 second (1000 milliseconds)
});