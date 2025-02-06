document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.hidden');
    const audio = document.getElementById("backgroundMusic");
    let currentIndex = 0;

    function fadeInOut() {
        if (currentIndex < fadeElements.length) {
            const currentElement = fadeElements[currentIndex];

            currentElement.classList.add('show');

            if (currentIndex === 3) {
                document.body.style.transition = "background-color 2s ease";
                document.body.style.backgroundColor = "red";
            }

            if (currentIndex === fadeElements.length - 2) {
                setTimeout(() => {
                    currentIndex++;
                    fadeInOut();
                }, 2000);
                return;
            }

            if (currentIndex === fadeElements.length - 1) {
                setTimeout(() => {
                    audio.play();
                }, 2000);
                return;
            }

            setTimeout(() => {
                currentElement.classList.remove('show');
                currentElement.classList.add('hide');

                setTimeout(() => {
                    currentIndex++;
                    fadeInOut();
                }, 500);
            }, 5000);
        }
    }

    fadeInOut();
});