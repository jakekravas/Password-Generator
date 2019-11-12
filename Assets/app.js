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

// SETUP GENERATE BUTTON EVENT LISTENER
document.querySelector("#btn-generate").addEventListener("click" , generatePassword);

function generatePassword(e){
    
    let pwArr = []; // Declaring password array to loop into
    let checkedArr = [lowerChecked.checked , upperChecked.checked , numberChecked.checked , specialChecked.checked];
    let trueBoxes = [];
    let functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()];
    console.log(checkedArr);
    console.log(functArr);

    // GETTING NUMBER AND INDEXES OF CHECKED BOXES
    for (i = 0; i < checkedArr.length; i++){
        // console.log(checkedArr[i]);
        if (checkedArr[i] === true) {
            trueBoxes.push(i);
        }
    }
    console.log(trueBoxes);

    e.preventDefault();
}