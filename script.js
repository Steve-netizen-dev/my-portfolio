console.log("My portfolio website is running!");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Aspiring Software Engineer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();