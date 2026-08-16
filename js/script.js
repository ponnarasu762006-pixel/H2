/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💜", "💗", "💖", "💓"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 700);


/* =========================
   BIRTHDAY COUNTDOWN
========================= */

/*
   Change this date to his actual birthday.

   Example:
   August 25, 2026

   Format:
   "August 25, 2026 00:00:00"
*/

const birthdayDate =
    new Date("May 28, 2027 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthdayDate - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    const daysElement =
        document.getElementById("days");

    if (daysElement) {

        if (difference > 0) {

            document.getElementById("days").innerText =
                String(days).padStart(2, "0");

            document.getElementById("hours").innerText =
                String(hours).padStart(2, "0");

            document.getElementById("minutes").innerText =
                String(minutes).padStart(2, "0");

            document.getElementById("seconds").innerText =
                String(seconds).padStart(2, "0");

        } else {

            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
        }
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================
   BIRTHDAY SURPRISE
========================= */

function birthdaySurprise() {

    const message =
        document.getElementById("birthdayReveal");

    if (message) {
        message.classList.add("show");
    }

    createConfetti();
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "❤️",
        "✨",
        "💕",
        "💝",
        "💖",
        "🫶"
    ];

    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3000 + 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}


/* =========================
   PHOTO GALLERY
========================= */

document.querySelectorAll(".photo-card img")
.forEach(image => {

    image.addEventListener("click", function () {

        const modal =
            document.getElementById("imageModal");

        const modalImage =
            document.getElementById("modalImage");

        if (modal && modalImage) {

            modalImage.src = this.src;

            modal.classList.add("show");
        }

    });

});


function closeImage() {

    const modal =
        document.getElementById("imageModal");

    if (modal) {
        modal.classList.remove("show");
    }

}


/* =========================
   MUSIC PLAYER
========================= */

function toggleMusic() {

    const music =
        document.getElementById("music");

    if (!music) return;

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}


/* =========================
   FINAL SURPRISE
========================= */

function finalSurprise() {

    const message =
        document.getElementById("finalMessage");

    if (message) {

        message.classList.add("show");

        createConfetti();

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    }

}