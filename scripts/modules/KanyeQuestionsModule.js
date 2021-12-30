const KanyeQuestionsModule = ( function(){

    const questions = [
        {
            questionTxt: "What's Kanye West's longest album?",
            options: [
                {
                    optionTxt: "The College Dropout",
                    isCorrect: false,
                },
                {
                    optionTxt: "DONDA",
                    isCorrect: true,
                },
                {
                    optionTxt: "Late Registration",
                    isCorrect: false,
                },
            ]
        },
        {
            questionTxt: "When did Late Registration release?",
            options: [
                {
                    optionTxt: "2006",
                    isCorrect: true,
                },
                {
                    optionTxt: "2005",
                    isCorrect: false,
                },
                {
                    optionTxt: "2004",
                    isCorrect: false,
                },
            ]
        },
        {
            questionTxt: "How long is The Life of Pablo?",
            options: [
                {
                    optionTxt: "68 minutes",
                    isCorrect: false,
                },
                {
                    optionTxt: "63 minutes",
                    isCorrect: false,
                },
                {
                    optionTxt: "66 minutes",
                    isCorrect: true,
                },
            ]
        },
        {
            questionTxt: "How many songs are on 808s and Heartbreak?",
            options: [
                {
                    optionTxt: "14",
                    isCorrect: false,
                },
                {
                    optionTxt: "12",
                    isCorrect: true,
                },
                {
                    optionTxt: "11",
                    isCorrect: false,
                },
            ]
        },
        {
            questionTxt: "Is Jesus Is King Certified platinum?",
            options: [
                {
                    optionTxt: "No",
                    isCorrect: true,
                },
                {
                    optionTxt: "Yes",
                    isCorrect: false,
                },
                {
                    optionTxt: "It's not even Gold",
                    isCorrect: false,
                },
            ]
        },
    ];

    // Get all question-objects from questions array
    const getAllQuestions = () => questions;

    
    return {getAllQuestions};

}() )

export default KanyeQuestionsModule;