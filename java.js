function Dice6(faces) {
    let rand = Math.floor (Math.random() * faces);
    if (rand == 0) rand ++;
    document.getElementById("rollResult").innerHTML = rand;
    return rand;
}

function Dice10(faces) {
    let rand = Math.floor (Math.random() * faces);
    if (rand == 0) rand ++;
    document.getElementById("rollResult").innerHTML = rand;
    return rand;
}
function testRollTheDice() {
    let success = true;
    const sixRoll = Dice6(6);
    if (sixRoll >=1 && sixRoll <= 6) success = true;
    const tenRoll = Dice10(10);
    if (tenRoll >= 1 && tenRoll <= 10) success =true;
    alert(success);
}