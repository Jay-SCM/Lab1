function DiceR(faces) {
    let rand = Math.floor (Math.random() * faces);
    if (rand == 0) rand ++;
    document.getElementById("rollResult").innerHTML = rand;
    return rand;
}
function testRollTheDice() {
    let success = true;
    const sixRoll = DiceR(6);
    if (sixRoll >=1 && sixRoll <= 6) success = true;
    const tenRoll = DiceR(10);
    if (tenRoll >= 1 && tenRoll <= 10) success =true;
    alert(success);
}