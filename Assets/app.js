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
    let finalPassword;
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

    // WHEN NO BOXES ARE CHECKED
    if (trueBoxes.length === 0) {
        alert("Please check at least one box");
    }

    // WHEN 1 BOX IS CHECKED
    if (trueBoxes.length === 1) {
        console.log(functArr[trueBoxes[0]]);
        for (var i = 0; i < passwordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()]; // Re-declaring functArr so it doesn't give us the same character for each iteration
            pwArr.push(functArr[trueBoxes[0]])
            console.log(pwArr);
        }
    // WHEN 2 BOXES ARE CHECKED
    } else if (trueBoxes.length === 2) {
        for (var i = 0; i < passwordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()];
            var randFunctSelect = Math.random();
            console.log(randFunctSelect);
            if (randFunctSelect <= 0.5) {
                pwArr.push(functArr[trueBoxes[0]]);
            } else {
                pwArr.push(functArr[trueBoxes[1]]);
            }
        }
    }

    finalPassword = pwArr.join("");
    document.querySelector("#finalPassword").value = finalPassword;

    e.preventDefault();
}