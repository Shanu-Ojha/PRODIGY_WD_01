window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333030';
    } else {
        navbar.style.backgroundColor = '#0e0d0d';
    }
});
