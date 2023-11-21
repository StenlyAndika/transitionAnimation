let clickCounter = 0;

        function rotateAndZoom() {
            const layer1 = document.querySelector('.layer1');
            const layer2 = document.querySelector('.layer2');
            const layer3 = document.querySelector('.layer3');

            layer1.classList.remove('rotate-zoom-layer-1');
            layer2.classList.remove('rotate-zoom-layer-2');
            layer3.classList.remove('rotate-zoom-layer-3');

            clickCounter++;
            const currentImageNumber = clickCounter % 4;
            const backgroundImage = `${currentImageNumber + 1}.jpg`;
            layer3.style.backgroundImage = `url("${backgroundImage}")`;

            // Rotate layer3 first
            layer3.classList.add('rotate-zoom-layer-3');

            // After a delay, rotate layer2
            setTimeout(() => {
                layer2.style.backgroundImage = `url("${backgroundImage}")`;
                layer2.classList.add('rotate-zoom-layer-2');
            }, 200);

            // After a delay, rotate layer1
            setTimeout(() => {
                layer1.style.backgroundImage = `url("${backgroundImage}")`;
                layer1.classList.add('rotate-zoom-layer-1');
            }, 200);

            // Listen for the end of the animation on layer3
            layer3.addEventListener('animationend', function() {
                layer3.classList.remove('rotate-zoom-layer-3');
            }, { once: true });

            // Listen for the end of the animation on layer2
            layer2.addEventListener('animationend', function() {
                layer2.classList.remove('rotate-zoom-layer-2');
            }, { once: true });

            // Listen for the end of the animation on layer
            layer1.addEventListener('animationend', function() {
                layer1.classList.remove('rotate-zoom-layer-1');
            }, { once: true });
        }