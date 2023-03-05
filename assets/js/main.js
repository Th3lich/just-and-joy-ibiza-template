window.addEventListener('load', function() {
    // Navbar
    let navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        navbar.classList.toggle('opacity-0', window.scrollY < 150);
    });

    if (document.documentElement.scrollTop > 0) {
        navbar.classList.remove('opacity-0');
    }

});