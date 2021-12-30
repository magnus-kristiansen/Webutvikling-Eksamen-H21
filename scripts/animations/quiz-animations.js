// *************** DOM Elements ***************
const submitUserNameBtn = document.querySelector(".submit-user-name-btn");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const submitBtn = document.querySelector(".submit-btn");
const kanyeThemeBtn = document.querySelector(".kanye-theme-btn");
const cryptoThemeBtn = document.querySelector(".crypto-theme-btn");


gsap.from(".name-input-title", {
    y: -50,
    opacity: 0,
    duration: 0.7,
})

gsap.from(".name-input-subtitle", {
    x: -80,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
})

gsap.from(".user-name-input-container", {
    x: -80,
    opacity: 0,
    duration: 0.7,
    delay: 0.5,
})

gsap.from(".submit-user-name-btn", {
    y: -16,
    opacity: 0,
    duration: 0.4,
    delay: 1.3,
})

// --- Animates choose theme section ---
const animateChooseThemeSection = () => {

    gsap.from(".choose-theme-title", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        delay: 0.3
    })
    
    gsap.from(".choose-theme-subtitle", {
        x: -80,
        opacity: 0,
        duration: 0.5,
        delay: 1,
    })

    gsap.from(".kanye-theme-btn", {
        opacity: 0,
        duration: 1.8,
        delay: 1.3,
    })

    gsap.from(".crypto-theme-btn", {
        opacity: 0,
        duration: 1.8,
        delay: 1.7,
    })
}

// --- Animates quiz section ---
const animateQuizSection = () => {

    gsap.from(".quiz-section", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    })
}

// --- Animates quiz results section ---
const animateQuizResultsSection = () => {

    gsap.from(".quiz-results-output", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    })

    gsap.from(".submit-btn", {
        x: -200,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
    })
}




// *************** On clicks ***************
submitUserNameBtn.onclick = animateChooseThemeSection;
nextQuestionBtn.onclick = animateQuizSection;
submitBtn.onclick = animateQuizResultsSection;
kanyeThemeBtn.onclick = animateQuizSection;
cryptoThemeBtn.onclick = animateQuizSection;