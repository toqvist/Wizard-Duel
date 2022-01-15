//🧙👹🧞👻
//👿👺
//🌋🌳🌊
//💀🔮
//Object
 //let element (symbol){
    symbol: 
    //Return true if it beats, otherwise false. Check if both false at round resolution to determine draw. 
    // function beats (e) {
    //     if (beats === e) {
    //         return true;
    //     }
    // }
//}

//Confusingly, I call these: 🔥🌱💧 elements, (like earth, wind and fire): 

//Element buttons
const elementButtons = document.querySelector("div.elements");
elementButtons.addEventListener('click', duel);

//These elements should probably be included in objects at this point
//Player elements
const playerWizard =  document.querySelector("i.player-wizard")
const playerZone = document.querySelector("div.player-zone");
const playerBox = document.querySelector("div.player-box")

//Opponent elements
const opponentWizard =  document.querySelector("i.opponent-wizard")
const opponentZone = document.querySelector("div.opponent-zone");
const opponentBox = document.querySelector("div.opponent-box")

//When shield is 0, the other wizard wins. 
let playerShield = 3;
let opponentShield = 3;

function duel(event){
    console.log(event)
    
    
    const playerElement = document.createElement("i");
    playerElement.innerText = event.target.innerText;
    playerZone.append(playerElement);

    const opponentElement = document.createElement("i");
    opponentElement.innerText = randomElement();
    opponentZone.append(opponentElement);

    playerBox.classList.add("animate")
    playerElement.classList.add("animate");
    playerZone.classList.add("animate");

    opponentBox.classList.add("animate")
    opponentElement.classList.add("animate");
    opponentZone.classList.add("animate");

    if (whoWinsRound(playerElement, opponentElement) === "Player") {
        opponentShield--;
    } else {
        playerShield--;
    }
    
}
//return player or opponent as string
function whoWinsRound (playerE, opponentE) {
    
    // if playerE.beats(opponentE) 
    // 🔥 beats 🌱
    // 💧 beats 🔥
    // 🌱 beats 💧
    // else if opponentE.beats(playerE)
    //else {return "draw"}

}


function randomElement () {
    //🔥🌱💧
    let randomNumber = Math.round(Math.random()*3)
    console.log(randomNumber)
    if(randomNumber === 1) {
        return "🔥"
    } else if (randomNumber === 2) {
        return "🌱"
    } else {
        return "💧"
    }
}

function randomWizard() {
    //🧙👹🧞👻
    let randomNumber = Math.round(Math.random()*4)
    console.log(randomNumber)
    if(randomNumber === 1) {
        return "🧙"
    } else if (randomNumber === 2) {
        return "👹"
    } else if (randomNumber == 3) {
        return "🧞"
    } else {
        return "👻"
    }

}