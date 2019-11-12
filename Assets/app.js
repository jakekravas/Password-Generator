// GET PASSWORD CRITERIA FROM USER
let passwordLength = document.querySelector("#pwLength");
let lowerChecked = document.querySelector("#lowerCheck");
let upperChecked = document.querySelector("#upperCheck");
let numberChecked = document.querySelector("#numberCheck");
let specialChecked = document.querySelector("#specialCheck");

// SETUP FUNCTIONS FOR EACH PIECE OF CRITERIA
function getRandomLower() {
    let randLower = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(randLower);
}

function getRandomUpper(){
    let randUpper = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(randUpper);
}

function getRandomNumber(){
    let randNumber = Math.floor(Math.random() * 10);
    return randNumber;
}

function getRandomSpecial(){
    let randSpecial = Math.floor(Math.random() * 14) + 33;
    return String.fromCharCode(randSpecial);
}