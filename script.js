// Smooth scrolling for section links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default if it's a hash link to a section on the same page
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Otherwise, let the link work normally
    });
});

// Form validation (only if form exists on page)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const message = document.getElementById('message')?.value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
}

// Image gallery lightbox (only if img-containers exist)
document.querySelectorAll('.img-container img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        lightbox.appendChild(imgElement);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});