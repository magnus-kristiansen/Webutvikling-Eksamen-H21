// *************** Imports ***************
import CryptoQuestionsModule from "../modules/CryptoQuestionsModule.js";
import KanyeQuestionsModule from "../modules/KanyeQuestionsModule.js";


// *************** DOM Elements ***************
let nextQuestionBtn = document.querySelector(".next-question-btn");
let chooseThemeSection = document.querySelector(".choose-theme-section");
let quizSection = document.querySelector(".quiz-section");
const kanyeThemeBtn = document.querySelector(".kanye-theme-btn");
const cryptoThemeBtn = document.querySelector(".crypto-theme-btn");
const submitBtn = document.querySelector(".submit-btn");
let questionTxtOutput = document.querySelector(".question-txt-output");
let messageOutput = document.querySelector(".message-output");
const evaluateBtn = document.querySelector(".evaluate-btn");
let quizResultsOutput = document.querySelector(".quiz-results-output");
let quizResultsSection = document.querySelector(".quiz-results-section");
let nameInputSection = document.querySelector(".name-input-section");
const userNameInput = document.querySelector("#user-name-input");
const submitUserNameBtn = document.querySelector(".submit-user-name-btn");
let userNameMessageOutput = document.querySelector(".user-name-message-output");
let themeOutput = document.querySelector(".theme-output");

// The option buttons
const option1Btn = document.getElementById("option-1-btn");
const option2Btn = document.getElementById("option-2-btn");
const option3Btn = document.getElementById("option-3-btn");





// Hide quiz sections
quizSection.style.display = "none"
chooseThemeSection.style.display = "none";
quizResultsSection.style.display = "none";





// *************** Variables ***************
// Current question | Used to define the index number in the questions-array
let currentQuestion = 0;

// The user's points, User gets 1 point for each correct answer
let userPoints = 0;

// The button and option that the user selected
let selectedBtn = "";
let selectedOption = "";

// The questions-variable is the reference to the questions-array in a question-module
let questions = "";





// *************** Functions ***************
// --------- Prints new question ---------
const printNewQuestion = () => {

    // --- Resets display of buttons, sections, outputs etc. ---
    const resetDisplay = () => {
        nextQuestionBtn.style.display = "none";
        submitBtn.style.display = "none";
        quizResultsSection.style.display = "none";
        evaluateBtn.style.display = "block"
        messageOutput.style.display = "none";
        userNameMessageOutput.style.display = "none";

    }

    // --- Prints option buttons ---
    const printOptionBtns = () => {

        // Providing option text 
        option1Btn.innerHTML = questions[currentQuestion].options[0].optionTxt;
        option2Btn.innerHTML = questions[currentQuestion].options[1].optionTxt;
        option3Btn.innerHTML = questions[currentQuestion].options[2].optionTxt;
        
        
        // Providing the true or false value to the options
        option1Btn.value = questions[currentQuestion].options[0].isCorrect;
        option2Btn.value = questions[currentQuestion].options[1].isCorrect;
        option3Btn.value = questions[currentQuestion].options[2].isCorrect;
    }

    // --- Prints the question text ---
    const printQuestionTxt = () => {

        questionTxtOutput.innerHTML = `${questions[currentQuestion].questionTxt}`;
    }

    // --- Resets option buttons so that none are selected ---
    const resetOptionBtns = () => {

        option1Btn.style.display = "inline-block";
        option2Btn.style.display = "inline-block";
        option3Btn.style.display = "inline-block";

        option1Btn.style.backgroundColor = "#f2f4f5";
        option1Btn.style.color = "#000000"
        option1Btn.style.border = "1px solid #c4ccd4";
        
        option2Btn.style.backgroundColor = "#f2f4f5";
        option2Btn.style.color = "#000000"
        option2Btn.style.border = "1px solid #c4ccd4";

        option3Btn.style.backgroundColor = "#f2f4f5";
        option3Btn.style.color = "#000000"
        option3Btn.style.border = "1px solid #c4ccd4";
    }

    // --- Shows the option that the user selected ---
    const showSelectedOption = () => {

        // Show selection for op1
        option1Btn.addEventListener("click", () => {
            option1Btn.style.backgroundColor = "#ffffff";
            option1Btn.style.border = "2px solid #7c8994";
            
            option2Btn.style.backgroundColor = "#f2f4f5";
            option2Btn.style.border = "1px solid #c4ccd4"

            option3Btn.style.backgroundColor = "#f2f4f5";
            option3Btn.style.border = "1px solid #c4ccd4";

            selectedOption = option1Btn.value;
            
            selectedBtn = option1Btn;
        })

        // Show selection for op2
        option2Btn.addEventListener("click", () => {
            option1Btn.style.backgroundColor = "#f2f4f5";
            option1Btn.style.border = "1px solid #c4ccd4";

            option2Btn.style.backgroundColor = "#ffffff";
            option2Btn.style.border = "2px solid #7c8994";

            option3Btn.style.backgroundColor = "#f2f4f5";
            option3Btn.style.border = "1px solid #c4ccd4";
            
            selectedOption = option2Btn.value;
        })

        // Show selection for op3
        option3Btn.addEventListener("click", () => {
            option1Btn.style.backgroundColor = "#f2f4f5";
            option1Btn.style.border = "1px solid #c4ccd4";
            
            option2Btn.style.backgroundColor = "#f2f4f5";
            option2Btn.style.border = "1px solid #c4ccd4";

            option3Btn.style.backgroundColor = "#ffffff";
            option3Btn.style.border = "2px solid #7c8994";
            
            selectedOption = option3Btn.value;
        })
    }



    // Resets display of buttons, sections, outputs etc.
    resetDisplay();

    // Prints option buttons
    printOptionBtns();

    // Prints the question text
    printQuestionTxt();

    // Resets option buttons so that none are selected
    resetOptionBtns()

    // Shows the option that the user selected
    showSelectedOption();

    // Increases the currentQuestion count
    currentQuestion++;
}

// --- Shows the section where user can choose theme ---
const showChooseThemeSection = () => {

    if (userNameInput.value == "") {

        userNameMessageOutput.style.display = "block";
        userNameMessageOutput.innerHTML = "You have to enter a name";

    } else {
        nameInputSection.style.display = "none";
        chooseThemeSection.style.display = "block";

        addNewUserToLocalStorage();
    }
}

// --- Shows the quiz section ---
function showQuizSection() {

    chooseThemeSection.style.display = "none";
    quizSection.style.display = "block";

    printNewQuestion();
}

// --- Changes to Kanye questions ---
const changeToKanyeQuestions = () => {

    questions = KanyeQuestionsModule.getAllQuestions();

    themeOutput.innerHTML = "<strong>Current theme:</strong> Kanye West's discography"

    showQuizSection();
}

// --- Changes to Crypto questions ---
const changeToCryptoQuestions = () => {

    questions = CryptoQuestionsModule.getAllQuestions();

    themeOutput.innerHTML = "<strong>Current theme:</strong> Cryptocurrencies"

    showQuizSection();
}

// --- Adds new user to local storage ---
const addNewUserToLocalStorage = () => {

    // Parse any JSON previously stored in allEntries
    let existingUsers = JSON.parse(localStorage.getItem("allUsers"));
    
    if(existingUsers == null) {

        existingUsers = [];
    }

    let user = {
        name: userNameInput.value,
        points: userPoints
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Save allEntries back to local storage
    existingUsers.push(user);
    
    localStorage.setItem("allUsers", JSON.stringify(existingUsers));
};

// --- Checks if selected option is correct ---
const evaluateOption = () => {

    if (selectedOption == "true") {

        messageOutput.style.display = "block";
        messageOutput.innerHTML = "TRUE";
        messageOutput.style.color = "#2E8B57";
        messageOutput.style.backgroundColor = "#EBFCF3";

        evaluateBtn.style.display = "none"

        userPoints++;

    } else {
        
        messageOutput.style.display = "block";
        messageOutput.innerHTML = "FALSE";
        messageOutput.style.color = "#CE1447";
        messageOutput.style.backgroundColor = "#FBECF3";

        evaluateBtn.style.display = "none"
    }

    if (currentQuestion < questions.length) {

        nextQuestionBtn.style.display = "inline-block";
    } else {
        
        nextQuestionBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    }

}

// --- Shows quiz results and every users' points ---
const showQuizResults = () => {

    quizSection.style.display = "none";
    quizResultsSection.style.display = "block";

    updateLocalStorage();

    const existingUsers = JSON.parse(localStorage.getItem("allUsers"))

    let htmlTxt = "";

    existingUsers.forEach(user => {

        htmlTxt += `<p><strong>${user.name}</strong>: ${user.points} / ${currentQuestion} points<p>`
    });

    quizResultsOutput.innerHTML = htmlTxt;
}

// --- Updates LocalStorage with how many points the user got ---
const updateLocalStorage = () => {

    const existingUsers = JSON.parse(localStorage.getItem("allUsers"));
    
    let user = JSON.parse(localStorage.getItem("user"));

    user.points = userPoints;

    // Goes to last object in array in existingUsers | Removes 1 object | Adds user-object
    existingUsers.splice(-1, 1, user);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("allUsers", JSON.stringify(existingUsers));
}







// *************** Event listeners ***************
submitBtn.addEventListener("click", showQuizResults);
submitUserNameBtn.addEventListener("click", showChooseThemeSection);

evaluateBtn.addEventListener("click", evaluateOption);
nextQuestionBtn.addEventListener("click", printNewQuestion);

kanyeThemeBtn.addEventListener("click", changeToKanyeQuestions);

cryptoThemeBtn.addEventListener("click", changeToCryptoQuestions);