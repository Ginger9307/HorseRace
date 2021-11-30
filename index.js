function newRace() {
    horses = ["one", "two", "three", "four"];
    horsesOutput = [];
    for (i=0; i<horses.lengh; i++) {
        horsesOutput.push(horses[i] + <br/>)
    }
    return horsesOutput;
}
document.getElementById("names").innerHTML = newRace;
document.getElementById("test").innerHTML = "Test"