/* =========================================
   OPEN LETTER
========================================= */

const openLetterButton = document.getElementById("openLetter");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const songButton = document.getElementById("songButton");
const vinyl = document.querySelector(".vinyl");

openLetterButton.addEventListener("click", () => {

    // Scroll ke bagian surat
    document.querySelector(".intro").scrollIntoView({
        behavior: "smooth"
    });

    // Langsung memainkan lagu setelah tombol diklik
    music.play()
        .then(() => {

            musicButton.textContent = "❚❚";
            songButton.textContent = "❚❚ Pause Our Song";

            vinyl.classList.add("playing");

        })
        .catch(error => {

            console.log("Musik tidak dapat diputar:", error);

        });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* =========================================
   MUSIC
========================================= */




function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton.textContent = "❚❚";

        songButton.textContent = "❚❚ Pause Our Song";

        vinyl.classList.add("playing");

    } else {

        music.pause();

        musicButton.textContent = "▶";

        songButton.textContent = "▶ Play Our Song";

        vinyl.classList.remove("playing");

    }

}


musicButton.addEventListener("click", toggleMusic);

songButton.addEventListener("click", toggleMusic);


/* =========================================
   FINAL SURPRISE
========================================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const letterOverlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");


surpriseButton.addEventListener("click", () => {

    letterOverlay.classList.add("show");

    document.body.style.overflow = "hidden";

});


closeLetter.addEventListener("click", () => {

    letterOverlay.classList.remove("show");

    document.body.style.overflow = "";

});


/* =========================================
   CLICK OUTSIDE LETTER
========================================= */

letterOverlay.addEventListener("click", (event) => {

    if (event.target === letterOverlay) {

        letterOverlay.classList.remove("show");

        document.body.style.overflow = "";

    }

});


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        letterOverlay.classList.remove("show");

        document.body.style.overflow = "";

    }

});