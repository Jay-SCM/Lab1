function Dice6(faces) { //function for 6 sided dice roll //
    let rand = Math.floor (Math.random() * faces);
    if (rand == 0) rand ++; // rnadom incriments starting from 0  //
    document.getElementById("rollResult").innerHTML = rand; // gets document id rollresult from html //
    return rand; // returns the result //
}

function Dice10(faces) { //function for 10 sided dice roll //
    let rand = Math.floor (Math.random() * faces);
    if (rand == 0) rand ++;
    document.getElementById("rollResult").innerHTML = rand;
    return rand;
}
function testRollTheDice() {  // function for  unit test on dice roll //
    let success = true;
    const sixRoll = Dice6(6); // constant set at 6 //
    if (sixRoll >=1 && sixRoll <= 6) success = true; // if statement no less than 1 no greater than 6 //
    const tenRoll = Dice10(10); // constant set at 10 //
    if (tenRoll >= 1 && tenRoll <= 10) success =true; // if statement no less than 1 no greater than 10 //
    alert(success); //uses alret to retun test succsess //
}