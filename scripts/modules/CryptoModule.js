const CryptoModule = ( function(){

    const coins = [

        {
            name: "BITCOIN",
            projectStartYear: "2009",
            token: "BTC",
            consensusMechanism: "PROOF OF WORK",
            hasSmartContracts: "false",
            degreeOfAdoption: "HIGH",
            maximumSupply: "21000000",
            generation: "FIRST",
            img: "bitcoin.png"
        },
        {
            name: "ETHEREUM",
            projectStartYear: "2015",
            token: "Ether (ETH)",
            consensusMechanism: "PROOF OF WORK",
            hasSmartContracts: "true",
            degreeOfAdoption: "HIGH",
            maximumSupply: "0",
            generation: "SECOND",
            img: "ethereum.png"
        },
        {
            name: "CARDANO",
            projectStartYear: "2015",
            token: "ADA",
            consensusMechanism: "PROOF OF STAKE",
            hasSmartContracts: "true",
            degreeOfAdoption: "LOW",
            maximumSupply: "45000000000",
            generation: "THIRD",
            img: "cardano.png"
        },
        {
            name: "LITECOIN",
            projectStartYear: "2011",
            token: "LTC",
            consensusMechanism: "PROOF OF WORK",
            hasSmartContracts: "true",
            degreeOfAdoption: "LOW",
            maximumSupply: "84000000",
            generation: "FIRST",
            img: "litecoin.png"
        },
        {
            name: "RIPPLE",
            projectStartYear: "2012",
            token: "XRP",
            consensusMechanism: "?",
            hasSmartContracts: "false",
            degreeOfAdoption: "LOW",
            maximumSupply: "100000000000",
            generation: "FIRST",
            img: "ripple.jpg"
        },
        {
            name: "STELLAR",
            projectStartYear: "2014",
            token: "Lumen (XLM)",
            consensusMechanism: "?",
            hasSmartContracts: "true",
            degreeOfAdoption: "LOW",
            maximumSupply: "0",
            generation: "THIRD",
            img: "stellar.jpg"
        },
        {
            name: "SOLANA",
            projectStartYear: "2017",
            token: "SOL",
            consensusMechanism: "PROOF OF STAKE",
            hasSmartContracts: "true",
            degreeOfAdoption: "MEDIUM",
            maximumSupply: "0",
            generation: "THIRD",
            img: "solana.png"
        },
    ];

    // Get all coin-objects from coins-array
    const getAllCoins = () => coins;

    // Get all coins from coins-array by searchWord from user
    const getCoinsByWordInput = (searchWord) => {

        // coinsByWordInput array that contains the filtered objects
        const coinsByWordInput = coins.filter(coin => {

            // Returns coin-objects that contains values that includes the searchWord
            // val = value
            return Object.values(coin).some(val => val.includes(searchWord))
        })

        return coinsByWordInput;
    }

    // Public methods/functions that are accessible when you call on the Module
    return {getAllCoins, getCoinsByWordInput};

}() )

export default CryptoModule;