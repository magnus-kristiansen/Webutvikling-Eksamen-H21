const CryptoQuestionsModule = ( function(){

    const questions = [

        {
            questionTxt: "What generation is Ethereum?",
            options: [
                {
                    optionTxt: "First",
                    isCorrect: false,
                },
                {
                    optionTxt: "Second",
                    isCorrect: true,
                },
                {
                    optionTxt: "Third",
                    isCorrect: false,
                },
            ]
        },
        {
            questionTxt: "When was the project start year of RIPPLE?",
            options: [
                {
                    optionTxt: "2012",
                    isCorrect: true,
                },
                {
                    optionTxt: "2014",
                    isCorrect: false,
                },
                {
                    optionTxt: "2011",
                    isCorrect: false,
                },
            ]
        },
        {
            questionTxt: "What consensus mechanism does Cardano use?",
            options: [
                {
                    optionTxt: "Proof of Work",
                    isCorrect: false,
                },
                {
                    optionTxt: "Proof of Stake",
                    isCorrect: true,
                },
                {
                    optionTxt: "It's not defined",
                    isCorrect: false,
                },
            ]
        },{
            questionTxt: "What is the degree of adoption for Solana?",
            options: [
                {
                    optionTxt: "High",
                    isCorrect: false,
                },
                {
                    optionTxt: "Medium",
                    isCorrect: true,
                },
                {
                    optionTxt: "Low",
                    isCorrect: false,
                },
            ]
        },
        {
            questionTxt: "What is Bitcoin's maximum supply?",
            options: [
                {
                    optionTxt: "21 000 000",
                    isCorrect: true,
                },
                {
                    optionTxt: "45 000 000 000",
                    isCorrect: false,
                },
                {
                    optionTxt: "100 000 000 000",
                    isCorrect: false,
                },
            ]
        },
    ];

    // Get all question objects from questions-array
    const getAllQuestions = () => questions;

    
    return {getAllQuestions};

}() )

export default CryptoQuestionsModule;