// *************** Imports ***************
import KanyeModule from "../modules/KanyeModule.js";
import CryptoModule from "../modules/CryptoModule.js";


// *************** DOM Elements ***************
const kanyeBtn = document.querySelector(".kanye-btn");
const cryptoBtn = document.querySelector(".crypto-btn");
const cryptoWordInput = document.querySelector(".crypto-word-input");
const kanyeWordInput = document.querySelector(".kanye-word-input");
let factsOutput = document.querySelector(".fact-grid");
let kanyeThemeSection = document.querySelector(".kanye-theme-section");
let cryptoThemeSection = document.querySelector(".crypto-theme-section");
let lengthSelectInput = document.querySelector(".length-select-input");
let consensusMechanismSelectInput = document.querySelector(".consensus-mechanism-select-input");


// Hide theme sections
cryptoThemeSection.style.display = "none";
kanyeThemeSection.style.display = "none";


// *************** Functions ***************
// --- Prints Kanye facts to HTML ---
let printKanyeFacts = (array) => {

    let isPlatinumHtmlTxt = "";
    let htmlTxt = "";

    // Goes through the albums array in KanyeModule
    array.forEach((album) => {

        // Checks if album is platinum
        switch (album.isPlatinum) {
            case "true":
                isPlatinumHtmlTxt = `${album.title} is a certified platinum album`;
                break;
        
            case "false":
                isPlatinumHtmlTxt = `${album.title} is NOT a certified platinum album`;
                break
        }

        htmlTxt += `
            <article class="fact-item box">
                <img class="fact-item__img" src="./images/covers/${album.img}">
                <div class="fact-item__content">
                    <p class="release-year">${album.releaseYear}</p>
                    <h4>${album.title}</h4>
                    <p><strong>Length:</strong> ${album.length} minutes</p>
                    <p><strong>Number of songs:</strong> ${album.numberOfSongs}</p>
                    <p>${isPlatinumHtmlTxt}</p>
                </div>
            </article> 
        `;
    })

    // Prints HTML-content to output in the HTML-document
    factsOutput.innerHTML = htmlTxt;
}

// --- Prints crypto facts to HTML ---
let printCryptoFacts = (array) => {

    let hasMaximumSupplyHtmlTxt = "";
    let hasSmartContractsHtmlTxt = "";
    let htmlTxt = "";
    
    // Goes through the coins array in CryptoModule
    array.forEach((coin) => {

        // Checks if coin has smart contracts
        switch (coin.hasSmartContracts) {
            case "true":
                hasSmartContractsHtmlTxt = `${coin.name} has smart contracts`;
                break;

            case "false":
                hasSmartContractsHtmlTxt = `${coin.name} does NOT have smart contracts`;
                break;
        }

        // Checks if coin has maximum supply | 0 = No upper limit
        if (coin.maximumSupply === "0") {

            hasMaximumSupplyHtmlTxt = `No upper limit`;
        } else {
    
            hasMaximumSupplyHtmlTxt = `${coin.maximumSupply}`;
        }

        htmlTxt += `
            <article class="fact-item box">
                <img class="fact-item__img" src="./images/crypto/${coin.img}">
                <div class="fact-item__content">
                    <p class="token">${coin.token}</p>
                    <h3>${coin.name}</h3>
                    <p>${coin.generation} generation</p>
                    <p><strong>Project start year:</strong> ${coin.projectStartYear}</p>
                    <p><strong>Consensus mechanism:</strong> ${coin.consensusMechanism}</p>
                    <p><strong>Degree of adoption:</strong> ${coin.degreeOfAdoption}</p>
                    <p><strong>Maximum supply:</strong> ${hasMaximumSupplyHtmlTxt}</p>
                    <p>${hasSmartContractsHtmlTxt}</p>
                </div>
            </article> 
        `;
    })

    // Prints HTML-content to output in the HTML-document
    factsOutput.innerHTML = htmlTxt;
}

// --- Changes theme to Kanye ---
let changeThemeToKanye = () => {

    cryptoThemeSection.style.display = "none";
    kanyeThemeSection.style.display = "initial";

    printKanyeFacts(KanyeModule.getAllAlbums());
}

// --- Changes theme to crypto ---
let changeThemeToCrypto = () => {

    kanyeThemeSection.style.display = "none";
    cryptoThemeSection.style.display = "initial";

    printCryptoFacts(CryptoModule.getAllCoins());
}

// --- Searches if a coin's values matches the user input ---
let searchByCryptoWordInput = () => {

    factsOutput.innerHTML = "";

    // The word that the user has entered in the input-field
    let searchWord = cryptoWordInput.value.toUpperCase();

    let coinsByWordInput = CryptoModule.getCoinsByWordInput(searchWord);

    // Calls on printCryptoFacts to print the filtered albumsByWordInput array
    printCryptoFacts( coinsByWordInput );
}

// --- Searches if an album's values matches the user input ---
let searchByKanyeWordInput = () => {

    factsOutput.innerHTML = "";

    // The word that the user has entered in the input-field
    let searchWord = kanyeWordInput.value.toUpperCase();

    // albumsByWordInput-array contains the filtered albums
    let albumsByWordInput = KanyeModule.getAlbumsByWordInput(searchWord)

    // Calls on printKanyeFacts to print the filtered albumsByWordInput array
    printKanyeFacts( albumsByWordInput );
}

// --- Searches if an album is longer or shorter than 1 hour ---
let searchByLengthSelect = () => {
    factsOutput.innerHTML = "";

    let albumsByLength = KanyeModule.getAllAlbums().filter(album => {

        switch (lengthSelectInput.value) {
            case "Longer than 1 hour":
                return parseInt(album.length) > 60;
                break;

            case "Shorter than 1 hour":
                return parseInt(album.length) < 60;
                break;

            case "":
                return KanyeModule.getAllAlbums();
                break;
        }
    })

    printKanyeFacts(albumsByLength)
}

// --- Searches if a coin uses Proof of Work or Proof of Stake as consensus mechanism ---
let searchByConsensusMechanismSelect = () => {
    factsOutput.innerHTML = "";

    let coinsByConsensusMechanism = CryptoModule.getAllCoins().filter(coin => {

        if (consensusMechanismSelectInput.value === "") {

            return CryptoModule.getAllCoins();
        }

        return coin.consensusMechanism === consensusMechanismSelectInput.value.toUpperCase();
    })

    printCryptoFacts(coinsByConsensusMechanism)
}

// *************** Event listeners ***************
consensusMechanismSelectInput.addEventListener("input", searchByConsensusMechanismSelect);
lengthSelectInput.addEventListener("input", searchByLengthSelect);
cryptoWordInput.addEventListener("input", searchByCryptoWordInput);
kanyeWordInput.addEventListener("input", searchByKanyeWordInput);
kanyeBtn.addEventListener("click", changeThemeToKanye);
cryptoBtn.addEventListener("click", changeThemeToCrypto);