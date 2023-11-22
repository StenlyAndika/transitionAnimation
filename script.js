let clickCounter = 0;
let currentTextIndex = 0;
let texts = [
    "LAGO DI BRAIES<br>ITALY",
    "LAKE LUNGERN<br>SWITZERLAND",
    "PYRAMID LAKE<br>NEVADA",
    "WELKOM<br>TU MAI WEBSITE"
];

function addSpaceBetweenLetters(text) {
    let lines = text.split('<br>');

    let spacedLines = lines.map(line => line.split('').join('&nbsp;'));

    return spacedLines.join('<br>');
}

function rotateAndZoom() {
    const img1 = document.querySelector('.image1');
    const img2 = document.querySelector('.image2');
    const img3 = document.querySelector('.image3');

    const txtH = document.querySelector('.txtHome');

    img1.classList.remove('rotate-zoom-img-1');
    img2.classList.remove('rotate-zoom-img-2');
    img3.classList.remove('rotate-zoom-img-3');

    clickCounter++;
    const currentImageNumber = clickCounter % 4;
    const backgroundImage = `${currentImageNumber + 1}.jpg`;
    img3.src = backgroundImage;
    txtH.classList.add('blurred');

    img3.classList.add('rotate-zoom-img-3');

    img3.addEventListener('animationend', function() {
        img3.classList.remove('rotate-zoom-img-3');
    }, { once: true });

    setTimeout(() => {
        img2.src = backgroundImage;
        img2.classList.add('rotate-zoom-img-2');
        txtH.innerHTML = addSpaceBetweenLetters(texts[currentTextIndex]);
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }, 200);

    img2.addEventListener('animationend', function() {
        img2.classList.remove('rotate-zoom-img-2');
    }, { once: true });

    setTimeout(() => {
        img1.src = backgroundImage;
        img1.classList.add('rotate-zoom-img-1');
    }, 200);

    img1.addEventListener('animationend', function() {
        img1.classList.remove('rotate-zoom-img-1');
        txtH.classList.remove('blurred');
    }, { once: true });
}