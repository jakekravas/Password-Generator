// GET PASSWORD CRITERIA FROM USER
let passwordLength = document.querySelector("#pwLength");
let lowerChecked = document.querySelector("#lowerCheck");
let upperChecked = document.querySelector("#upperCheck");
let numberChecked = document.querySelector("#numberCheck");
let specialChecked = document.querySelector("#specialCheck");

// SETUP FUNCTIONS TO RANDOMLY GENERATE CHARACTER FOR EACH PIECE OF CRITERIA
function getRandomLower(){ //Randomly generates and returns a lowercase character
    let randLower = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(randLower);
}

function getRandomUpper(){ //Randomly generates and returns an uppercase character
    let randUpper = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(randUpper);
}

function getRandomNumber(){ //Randomly generates and returns a number
    let randNumber = Math.floor(Math.random() * 10);
    return randNumber;
}

function getRandomSpecial(){ //Randomly generates and returns a special character
    let randSpecial = Math.floor(Math.random() * 14) + 33;
    return String.fromCharCode(randSpecial);
}

// SETTING UP EVENT LISTENER FOR GENERATE BUTTON
document.querySelector("#btn-generate").addEventListener("click" , generatePassword); //Setting up event listener for when Generate button is clicked

function generatePassword(e){
    
    let pwArr = []; //Array to loop each randomly generated password character into
    let finalPassword; //Will later be a string version of pwArr
    let checkedArr = [lowerChecked.checked , upperChecked.checked , numberChecked.checked , specialChecked.checked]; //Array to log true/false boolean elements into so we know which boxes are checked
    let trueBoxes = []; //all true elements from checkedArr will be pushed into here with their checkedArr index as their value so we know which boxes to act upon
    let functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()]; //Uses values of trueBoxes to know which functions to run
    // let copyButton = document.querySelector("#copyButton");
    let noChecksAlert = document.querySelector("#noChecksAlert");
    let copyButton = document.querySelector("#copyButton");
    console.log(checkedArr);
    console.log(functArr);

    // GETTING INDEXES OF CHECKED BOXES
    for (i = 0; i < checkedArr.length; i++){
        if (checkedArr[i] === true) {
            trueBoxes.push(i);
        }
    }

    // FUNCTIONS FOR MULTIPLE BOX SELECTIONS

    //Taking care of password generation for when two boxes are selected
    function twoBoxesChecked(){
        var firstFunctCount = 0; //Represents number of times first function is ran
        var secondFunctCount = 0; //Represents number of times second function is ran
        for (var i = 0; i < passwordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()]; //Redeclaring functArr so it doesn't give us the same character each iteration
            var randFunctSelect = Math.random(); //Random number between 0 and 1
            if (randFunctSelect <= 0.5) { 
                pwArr.push(functArr[trueBoxes[0]]); //Runs function that randomly generates a character appropriate to the criteria of the first checked checkbox
                firstFunctCount++;
            } else {
                pwArr.push(functArr[trueBoxes[1]]); //Runs function that randomly generates a character appropriate to the criteria of the second checked checkbox
                secondFunctCount++;
            }
        }
        if (firstFunctCount === 0 || secondFunctCount === 0){
            pwArr = [];
            twoBoxesChecked();
        } //Ensuring that at least one character from each checked checkbox is included in the password
    };

    //Taking care of password generation for when three boxes are selected
    function threeBoxesChecked(){
        var firstFunctCount = 0; //Represents number of times first function is ran
        var secondFunctCount = 0; //Represents number of times second function is ran
        var thirdFunctCount = 0; //Represents number of times third function is ran
        for (var i = 0; i < passwordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()];
            var randFunctSelect = Math.random();
            if (randFunctSelect <= 0.33333) {
                pwArr.push(functArr[trueBoxes[0]]); //Runs function that randomly generates a character appropriate to the criteria of the first checked checkbox
                firstFunctCount++;
            } else if (randFunctSelect > 0.33333 && randFunctSelect < 0.66666) {
                pwArr.push(functArr[trueBoxes[1]]); //Runs function that randomly generates a character appropriate to the criteria of the second checked checkbox
                secondFunctCount++;
            } else {
                pwArr.push(functArr[trueBoxes[2]]); //Runs function that randomly generates a character appropriate to the criteria of the third checked checkbox
                thirdFunctCount++;
            }
        }
        if (firstFunctCount === 0 || secondFunctCount === 0 || thirdFunctCount == 0){
            pwArr = [];
            threeBoxesChecked();
        } //Ensuring that at least one character from each checked checkbox is included in the password
    };

    //Taking care of password generation for when four boxes are selected
    function fourBoxesChecked(){
        var firstFunctCount = 0; //Represents number of times first function is ran
        var secondFunctCount = 0; //Represents number of times second function is ran
        var thirdFunctCount = 0; //Represents number of times third function is ran
        var fourthFunctCount = 0; //Represents number of times fourth function is ran
        for (var i = 0; i < passwordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()];
            var randFunctSelect = Math.random();
            if (randFunctSelect <= 0.25) {
                pwArr.push(functArr[trueBoxes[0]]); //Runs function that randomly generates a character appropriate to the criteria of the first checked checkbox
                firstFunctCount++;
            } else if (randFunctSelect > 0.25 && randFunctSelect <= 0.5) {
                pwArr.push(functArr[trueBoxes[1]]); //Runs function that randomly generates a character appropriate to the criteria of the second checked checkbox
                secondFunctCount++;
            } else if (randFunctSelect > 0.5 && randFunctSelect <= 0.75) {
                pwArr.push(functArr[trueBoxes[2]]); //Runs function that randomly generates a character appropriate to the criteria of the third checked checkbox
                thirdFunctCount++;
            } else {
                pwArr.push(functArr[trueBoxes[3]]); //Runs function that randomly generates a character appropriate to the criteria of the fourth checked checkbox
                fourthFunctCount++;
            }
        }
        if (firstFunctCount === 0 || secondFunctCount === 0 || thirdFunctCount === 0 || fourthFunctCount === 0){
            pwArr = [];
            fourBoxesChecked();
        } //Ensuring that at least one character from each checked checkbox is included in the password
    };


    // IF NO BOXES ARE CHECKED
    if (trueBoxes.length === 0) {
        noChecksAlert.className = "alert alert-danger text-center py-1"; //Shows alert to user
        copyButton.className = "btn btn-outline-secondary disabled"; //Sets button to disabled
        copyButton.setAttribute("title" , ""); //Hides tooltip for clipboard button
    } else {
        noChecksAlert.className = "d-none"; //Sets alert to display:none
        copyButton.className = "btn btn-outline-secondary"; //Enables button
        copyButton.setAttribute("title" , "Copy to clipboard"); //Shows tooltip for clipboard button
    }

    // IF 1 BOX IS CHECKED
    if (trueBoxes.length === 1) {
        console.log(functArr[trueBoxes[0]]);
        for (var i = 0; i < passwordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()]; // Redeclaring functArr so it doesn't give us the same character for each iteration
            pwArr.push(functArr[trueBoxes[0]])
        }

    // IF 2 BOXES ARE CHECKED
    } else if (trueBoxes.length === 2) {
        twoBoxesChecked();

    // IF 3 BOXES ARE CHECKED
    } else if (trueBoxes.length === 3) {
        threeBoxesChecked();

    // IF ALL 4 BOXES ARE CHECKED
    } else {
        fourBoxesChecked();
    }

    // OUTPUTTING PASSWORD TO PAGE
    finalPassword = pwArr.join(""); //Converting password array (pwArr) into a string
    document.querySelector("#finalPassword").value = finalPassword; //Displaying password to page

    // ENABLING OPTION TO COPY PASSWORD
    copyButton.addEventListener("click" , copyPassword); //Setting up event listener for when copy (clipboard icon) button is clicked

    function copyPassword(e) {
        document.querySelector("#finalPassword").select(); //Selecting password text
        document.execCommand("Copy"); //Copying password text to clipboard
        e.preventDefault(); //Preventing page refresh when copy button is clicked
    }

    e.preventDefault(); //Preventing page refresh when generate button is clicked
};