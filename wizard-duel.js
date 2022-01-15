//🧙👹🧞👻
//👿👺
//🌋🌳🌊
//💀🔮
//Object
 //function element (symbol){
    //this.symbol = symbol;
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

let player = {
    wizard :  document.querySelector("i.player-wizard"),
    zone : document.querySelector("div.player-zone"),
    box : document.querySelector("div.player-box"),
    shield: 3,
}

let opponent = {
    wizard :  document.querySelector("i.opponent-wizard"),
    zone : document.querySelector("div.opponent-zone"),
    box : document.querySelector("div.opponent-box"),
    shield: 3,
}

function duel(event){
    console.log(event)
    
    player.element = document.createElement("i");
    player.element.innerText = event.target.innerText;
    player.zone.append(player.element);

    // const opponentElement = document.createElement("i");
    // opponentElement.innerText = randomElement();
    // opponent.zone.append(opponentElement);

    opponent.element = document.createElement("i");
    opponent.element.innerText = randomElement();
    opponent.zone.append(opponent.element);

    player.box.classList.add("animate")
    player.element.classList.add("animate");
    player.zone.classList.add("animate");

    opponent.box.classList.add("animate")
    opponent.element.classList.add("animate");
    opponent.zone.classList.add("animate");

    if (whoWinsRound(player.element, opponent.element) === "Player") {
        opponent.shield--;
    } else {
        player.shield--;
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