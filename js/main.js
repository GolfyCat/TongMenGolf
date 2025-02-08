document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const images = [
        'images/banner1.jpg',
        'images/banner2.jpg',
        'images/banner3.jpg',
        'images/banner4.jpg',
        'images/banner5.jpg',
        'images/banner6.jpg',
        'images/banner7.jpg',
        'images/banner8.jpg',
        'images/banner9.jpg',
        'images/banner10.jpg'
    ];

    const slidesContainer = document.querySelector('.slides');

    images.forEach((image) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url(${image})`;
        slidesContainer.appendChild(slide);
    });

    // 複製一份圖片以實現循環播放
    images.forEach((image) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url(${image})`;
        slidesContainer.appendChild(slide);
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });
        io.observe(target);
    };
    
    lazyImages.forEach(lazyLoad);
});

const images = [
    'images/banner11.png',
    'images/banner12.png',
    'images/banner13.png',
    'images/banner14.png',
    'images/banner15.jpg'
];

let currentImageIndex = 0;
const hero = document.querySelector('.hero');

function changeBackgroundImage() {
    hero.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000);
changeBackgroundImage();

