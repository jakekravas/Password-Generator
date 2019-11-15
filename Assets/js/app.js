// GETTING PASSWORD CRITERIA FROM USER
let desiredPasswordLength = document.querySelector("#pwLength"); //Accesses input tag with ID pwLength
let lowerChecked = document.querySelector("#lowerCheck"); //Accesses input tag with ID lowerCheck
let upperChecked = document.querySelector("#upperCheck"); //Accesses input tag with ID upperCheck
let numberChecked = document.querySelector("#numberCheck"); //Accesses input tag with ID numberCheck
let specialChecked = document.querySelector("#specialCheck"); //Accesses input tag with ID specialCheck
let noChecksAlert = document.querySelector("#noChecksAlert"); //Accesses div tag with ID noChecksAlert
let copyButton = document.querySelector("#copyButton"); //Accesses button tag with ID copyButton

function checkDesiredPwLength(){
    if (desiredPasswordLength.value < 8 || desiredPasswordLength.value > 128){
        copyButton.className = "btn btn-outline-secondary disabled"; //Disables copy button
        copyButton.setAttribute("title" , ""); //Hides tooltip for copy button
        finalPassword.value = ""; //Removes any previous password to avoid confusion
        checkDesiredPwLength();
    }
}

// SETTING UP FUNCTIONS TO RANDOMLY GENERATE CHARACTER FOR EACH PIECE OF CRITERIA
function getRandomLower(){ //Randomly generates and returns a lowercase character
    let randLower = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(randLower);
}

function getRandomUpper(){ //Randomly generates and returns an uppercase character
    let randUpper = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(randUpper);
}

function getRandomNumber(){ //Randomly generates and returns a numeric character
    let randNumber = Math.floor(Math.random() * 10);
    return randNumber;
}

function getRandomSpecial(){ //Randomly generates and returns a special character
    specialArr = []; //Array to loop special characters into
    function specialLoop(startPoint , endPoint , arr){
        for (var i = startPoint; i <= endPoint; i++){
            arr.push(String.fromCharCode(i)) //Appends character into array
        }
        return arr;
    }
    specialLoop(33, 47, specialArr); //Gets special characters from char numbers 33-47
    specialLoop(58, 64, specialArr); //Gets special characters from char numbers 58-64
    specialLoop(91, 96, specialArr); //Gets special characters from char numbers 91-96
    specialLoop(123, 126, specialArr); //Gets special characters from char numbers 123-126

    let randSpecial = specialArr[Math.floor(Math.random() * specialArr.length)]; //Randomly selects an element from specialArr
    return randSpecial;
}

// SETTING UP EVENT LISTENER FOR GENERATE BUTTON
document.querySelector("#btn-generate").addEventListener("click" , generatePassword); //Setting up event listener for when Generate button is clicked

function generatePassword(e){

    checkDesiredPwLength();
    let pwArr = []; //Array to loop each randomly generated password character into
    let finalPassword; //Will later be a string version of pwArr
    let checkedArr = [lowerChecked.checked , upperChecked.checked , numberChecked.checked , specialChecked.checked]; //Array to log true/false boolean elements into so we know which boxes are checked
    let trueBoxes = []; //All true elements from checkedArr will be pushed into here with their checkedArr index as their value so we know which boxes to act upon
    let functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()]; //Uses values of trueBoxes to know which functions to run

    // GETTING INDEXES OF CHECKED BOXES
    for (i = 0; i < checkedArr.length; i++){
        if (checkedArr[i] === true) {
            trueBoxes.push(i);
        }
    }

    // FUNCTIONS FOR WHEN MULTIPLE BOXES ARE CHECKED

    //Password generation function for when two boxes are checked
    function twoBoxesChecked(){
        var firstFunctCount = 0; //Number of times first function has ran
        var secondFunctCount = 0; //Number of times second function has ran
        for (var i = 0; i < desiredPasswordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()]; //Redeclaring functArr so it doesn't give us the same character each iteration
            var randFunctSelect = Math.random(); //Random number between 0 and 1
            if (randFunctSelect <= 0.5) { 
                pwArr.push(functArr[trueBoxes[0]]); //Runs function that randomly generates a character appropriate to the first checked checkbox
                firstFunctCount++;
            } else {
                pwArr.push(functArr[trueBoxes[1]]); //Runs function that randomly generates a character appropriate to the second checked checkbox
                secondFunctCount++;
            }
        }
        if (firstFunctCount === 0 || secondFunctCount === 0){
            pwArr = [];
            twoBoxesChecked();
        } //If pwArr doesn't include at least one character for each checked checkbox, the function runs again
    };

    //Password generation function for when three boxes are checked
    function threeBoxesChecked(){
        var firstFunctCount = 0; //Number of times first function has ran
        var secondFunctCount = 0; //Number of times second function has ran
        var thirdFunctCount = 0; //Number of times third function has ran
        for (var i = 0; i < desiredPasswordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()];
            var randFunctSelect = Math.random();
            if (randFunctSelect <= 0.33333) {
                pwArr.push(functArr[trueBoxes[0]]); //Runs function that randomly generates a character appropriate to the first checked checkbox
                firstFunctCount++;
            } else if (randFunctSelect > 0.33333 && randFunctSelect < 0.66666) {
                pwArr.push(functArr[trueBoxes[1]]); //Runs function that randomly generates a character appropriate to the second checked checkbox
                secondFunctCount++;
            } else {
                pwArr.push(functArr[trueBoxes[2]]); //Runs function that randomly generates a character appropriate to the third checked checkbox
                thirdFunctCount++;
            }
        }
        if (firstFunctCount === 0 || secondFunctCount === 0 || thirdFunctCount == 0){
            pwArr = [];
            threeBoxesChecked();
        } //If pwArr doesn't include at least one character for each checked checkbox, the function runs again
    };

    //Password generation function for when all four boxes are checked
    function fourBoxesChecked(){
        var firstFunctCount = 0; //Number of times first function has ran
        var secondFunctCount = 0; //Number of times second function has ran
        var thirdFunctCount = 0; //Number of times third function has ran
        var fourthFunctCount = 0; //Number of times fourth function has ran
        for (var i = 0; i < desiredPasswordLength.value; i++){
            functArr = [getRandomLower() , getRandomUpper() , getRandomNumber() , getRandomSpecial()];
            var randFunctSelect = Math.random();
            if (randFunctSelect <= 0.25) {
                pwArr.push(functArr[trueBoxes[0]]); //Runs function that randomly generates a character appropriate to the first checked checkbox
                firstFunctCount++;
            } else if (randFunctSelect > 0.25 && randFunctSelect <= 0.5) {
                pwArr.push(functArr[trueBoxes[1]]); //Runs function that randomly generates a character appropriate to the second checked checkbox
                secondFunctCount++;
            } else if (randFunctSelect > 0.5 && randFunctSelect <= 0.75) {
                pwArr.push(functArr[trueBoxes[2]]); //Runs function that randomly generates a character appropriate to the third checked checkbox
                thirdFunctCount++;
            } else {
                pwArr.push(functArr[trueBoxes[3]]); //Runs function that randomly generates a character appropriate to the fourth checked checkbox
                fourthFunctCount++;
            }
        }
        if (firstFunctCount === 0 || secondFunctCount === 0 || thirdFunctCount === 0 || fourthFunctCount === 0){
            pwArr = [];
            fourBoxesChecked();
        } //If pwArr doesn't include at least one character for each checked checkbox, the function runs again
    };


    // IF NO BOXES ARE CHECKED
    if (trueBoxes.length === 0) {
        noChecksAlert.className = "alert alert-danger text-center py-1"; //Shows alert to user
        copyButton.className = "btn btn-outline-secondary disabled"; //Disables copy button
        copyButton.setAttribute("title" , ""); //Hides tooltip for copy button
    } else {
        noChecksAlert.className = "d-none"; //Sets alert to display:none
        copyButton.className = "btn btn-outline-secondary"; //Enables copy button
        copyButton.setAttribute("title" , "Copy to clipboard"); //Shows tooltip for copy button
    }

    // IF 1 BOX IS CHECKED
    if (trueBoxes.length === 1) {
        for (var i = 0; i < desiredPasswordLength.value; i++){
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
    finalPassword = pwArr.join(""); //Converts password array (pwArr) into a string
    document.querySelector("#finalPassword").value = finalPassword; //Displays password to page

    // ENABLING OPTION TO COPY PASSWORD
    copyButton.addEventListener("click" , copyPassword); //Sets up event listener for when copy (clipboard icon) button is clicked

    function copyPassword(e) {
        document.querySelector("#finalPassword").select(); //Selects password text
        document.execCommand("Copy"); //Copies password text to clipboard
        e.preventDefault(); //Prevents page refresh when copy button is clicked
    }

    e.preventDefault(); //Prevents page refresh when Generate button is clicked
};