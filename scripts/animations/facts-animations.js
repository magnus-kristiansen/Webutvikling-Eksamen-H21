// *************** DOM Elements ***************
const cryptoBtn = document.querySelector(".crypto-btn");
const kanyeBtn = document.querySelector(".kanye-btn");



gsap.from(".facts-title", {
    y: -50,
    opacity: 0,
    duration: 0.5,
})

gsap.from(".choose-quiz-theme-title", {
    x: -80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

gsap.from(".kanye-btn", {
    x: -40,
    opacity: 0,
    duration: 0.5,
    delay: 1,
})

gsap.from(".crypto-btn", {
    x: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1.5,
})

// --- Animates theme section ---
const animateThemeSection = () => {

    gsap.from(".filter-title", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    })

    gsap.from(".drop-down-menu-container", {
        x: -250,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
    })

    gsap.from(".input-field-container", {
        x: -200,
        opacity: 0,
        duration: 0.5,
        delay: 1,
    })

    gsap.from(".chosen-theme-container", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
    })

    gsap.from(".filter-grid-divider", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        delay: 0,
    })

    gsap.from(".fact-grid", {
        x: -1000,
        opacity: 0,
        duration: 1.5,
        delay: 2,
    })
}

// --- Animates fact grid on scroll ---
gsap.from(".fact-grid", {
    scrollTrigger: {
        trigger: ".fact-grid",
        // 1. Position says what should happen when you enter the view
        // 2. Position says what should happen when leaving the view
        // 3. Position says what should happen when you have left the view and return
        // 4. Position says what should happen when scrolling past the start
        // Keywords: play, pause, resume, reverse, restart, reset, complete, none
        toggleAction: "restart pause restart pause",
        // Keeps track of scroll behavior. Can have delay instead of true
        scrub: true, 
        start: "0, 55%",
        end: "300px"
    },
    x: -400,
    opacity: 0.3,
    duration: 10,
})



// *************** On clicks ***************
kanyeBtn.onclick = animateThemeSection;
cryptoBtn.onclick = animateThemeSection;