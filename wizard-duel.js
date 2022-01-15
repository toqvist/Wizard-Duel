//🧙👹🧞👻
//👿👺
//🌋🌳🌊
//💀🔮

//Confusingly, I call these: 🔥🌱💧 elements, (like earth, wind and fire): 
 function Element (symbol){
    this.symbol = symbol;
    this.name = genName();
    this.beats = genBeats();
    
    function genName (){ 
        if (symbol === "🔥") {
            return "fire";
        } else if (symbol === "🌱") {
            return "nature";
        } else if (symbol === "💧") {
            return "water";
        }
    };
    function genBeats (){
        if (symbol === "🔥") {
            return "🌱";
        } else if (symbol === "🌱") {
            return "💧";
        } else if (symbol === "💧") {
            return "🔥";
        }
    }
}

//Element buttons, player selects one and then the round starts.
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

    let newElement = new Element("🌱");
    console.log(newElement.symbol)
    console.log(newElement.beats)
    
    player.element = document.createElement("i");
    player.element.innerText = event.target.innerText;
    player.zone.append(player.element);

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