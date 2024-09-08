   // Skrypt dla Hamburger Menu -->
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Skrypt dla galerii zdjęć
    const images = [
        'images/image1.jpg', // Zmień na ścieżki do właściwych zdjęć
        'images/image2.jpg',
        'images/image3.jpg',
        'images/header.jpg'
    ];
    let currentImageIndex = 0;

    function changeImage(direction) {
        currentImageIndex += direction;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        document.getElementById('current-image').src = images[currentImageIndex];
    }
