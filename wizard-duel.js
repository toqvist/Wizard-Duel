//🧙👹🧞👻
//👿👺
//🌋🌳🌊
//💀🔮

//Confusingly, I call these: 🔥🌱💧 elements, (like earth, wind and fire): 
 function NaturalElement (htmlElement,symbol){
    this.htmlElement = htmlElement;
    this.symbol = symbol;
    this.name = genName();
    this.beats = genBeats();
    
    setHtmlSymbol(symbol);

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
    function setHtmlSymbol(sym){
        htmlElement.innerText = sym
    }
}

//Element buttons, player selects one and then the round starts.
const elementButtons = document.querySelector("div.elements");
elementButtons.addEventListener('click', duel);

//Player wizard object
let player = {
    wizard :  document.querySelector("i.player-wizard"),
    zone : document.querySelector("div.player-zone"),
    box : document.querySelector("div.player-box"),
    shield: 3,
}
//Opponent wizard object
let opponent = {
    wizard :  document.querySelector("i.opponent-wizard"),
    zone : document.querySelector("div.opponent-zone"),
    box : document.querySelector("div.opponent-box"),
    shield: 3,
}

function duel(event){

    player.natElement = new NaturalElement(document.createElement("i"), event.target.innerText)
    player.zone.append(player.natElement.htmlElement);

    opponent.natElement = new NaturalElement(document.createElement("i"), randomElement())
    opponent.zone.append(opponent.natElement.htmlElement);

    //Add class "animate" to all elements that should be animated.
    //Animatable elements could be stored in a list in wizard object, and then iterated over in a for loop.
    player.box.classList.add("animate")
    player.natElement.htmlElement.classList.add("animate");
    player.zone.classList.add("animate");

    opponent.box.classList.add("animate")
    opponent.natElement.htmlElement.classList.add("animate");
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