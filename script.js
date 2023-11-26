let clickCounter = 0;
let currentTextIndex = 0;
let texts = [
    "BRAIES LAKE<br>ITALY",
    "LUNGERN LAKE<br>SWITZERLAND",
    "WAKATIPU LAKE<br>NEW ZEALAND",
    "BENCH LAKE<br>UNITED STATES",
    "BEAUTIFUL LAKES<br>AROUND THE WORLD"
];

function addSpaceBetweenLetters(text) {
    let lines = text.split('<br>');

    let spacedLines = lines.map(line => line.split('').join('&nbsp;'));

    return spacedLines.join('<br>');
}

function rotateAndZoom() {
    const btn = document.querySelector('.itsabutton');
    btn.style.visibility = 'hidden';

    const img1 = document.querySelector('.image1');
    const img2 = document.querySelector('.image2');
    const img3 = document.querySelector('.image3');

    const txtH = document.querySelector('.txtHome');

    img1.classList.remove('rotate-zoom-img-1');
    img2.classList.remove('rotate-zoom-img-2');
    img3.classList.remove('rotate-zoom-img-3');

    clickCounter++;
    const currentImageNumber = clickCounter % 5;
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
    }, 400);

    img1.addEventListener('animationend', function() {
        img1.classList.remove('rotate-zoom-img-1');
        txtH.classList.remove('blurred');
        btn.style.visibility = 'visible';
    }, { once: true });
}