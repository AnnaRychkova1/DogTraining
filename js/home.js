document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slider');
    const slideElements = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    let currentSlide = 0;

    // Функция для переключения слайда
    function changeSlide() {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Обработчик для стрелки влево
    leftArrow.addEventListener('click', function () {
        currentSlide = (currentSlide === 0) ? slideElements.length - 1 : currentSlide - 1;
        changeSlide();
    });

    // Обработчик для стрелки вправо
    rightArrow.addEventListener('click', function () {
        currentSlide = (currentSlide === slideElements.length - 1) ? 0 : currentSlide + 1;
        changeSlide();
    });
});
//for video

const videoContainer = document.querySelector('.block-we-offer');
const video = document.querySelector('.background-video-we-offer');

video.playbackRate = 0.5; // Воспроизведение на 50% медленнее

videoContainer.addEventListener('mouseenter', () => {
    video.play(); // Начать воспроизведение
});

videoContainer.addEventListener('mouseleave', () => {
    video.pause(); // Остановить воспроизведение
    video.currentTime = 0; // Вернуться к первому кадру
});
//2
const videoContainer2 = document.querySelector('.block-reviews');
const video2 = document.querySelector('.background-video-reviews');

// video2.playbackRate = 0.2; // Воспроизведение на 50% медленнее

videoContainer2.addEventListener('mouseenter', () => {
    video2.play(); // Начать воспроизведение
});

videoContainer2.addEventListener('mouseleave', () => {
    video2.pause(); // Остановить воспроизведение
    video2.currentTime = 0; // Вернуться к первому кадру
});
//2
const videoContainer3 = document.querySelector('.block-contacts');
const video3 = document.querySelector('.background-video-contacts');

// video3.playbackRate = 0.2; // Воспроизведение на 50% медленнее

videoContainer3.addEventListener('mouseenter', () => {
    video3.play(); // Начать воспроизведение
});

videoContainer3.addEventListener('mouseleave', () => {
    video3.pause(); // Остановить воспроизведение
    video3.currentTime = 0; // Вернуться к первому кадру
});

document.addEventListener('DOMContentLoaded', function () {
    // Получаем все элементы слайдов
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    let currentSlide = 0; // Индекс текущего слайда

    // Функция для переключения слайда
    function changeSlide() {
        // Перемещаем слайды на соответствующую позицию
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Обработчик для кнопки "влево"
    leftArrow.addEventListener('click', function () {
        currentSlide = (currentSlide === 0) ? slideElements.length - 1 : currentSlide - 1;
        changeSlide();
    });

    // Обработчик для кнопки "вправо"
    rightArrow.addEventListener('click', function () {
        currentSlide = (currentSlide === slideElements.length - 1) ? 0 : currentSlide + 1;
        changeSlide();
    });
});