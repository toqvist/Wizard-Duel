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


//Player wizard object
let player = {
    wizard :  document.querySelector("i.player-wizard"),
    zone : document.querySelector("div.player.zone"),
    box : document.querySelector("div.player-box"),
    shield: 3,
    shieldHtmlElement: document.querySelector("i.player-shields")

}
//Opponent wizard object
let opponent = {
    wizard :  document.querySelector("i.opponent-wizard"),
    zone : document.querySelector("div.opponent.zone"),
    box : document.querySelector("div.opponent-box"),
    shield: 3,
}

//Element buttons, player selects one and then the round starts.
const elementButtons = document.querySelector("div.elements");
elementButtons.addEventListener('click', duel);

const announcer = document.querySelector("p.announcer")
//const shieldsSymbol 
let animated = false;

function duel(event){

    if (animated) {
        resetAnimations();
    }
    

    player.natElement = new NaturalElement(document.createElement("i"), event.target.innerText)
    player.zone.append(player.natElement.htmlElement);

    opponent.natElement = new NaturalElement(document.createElement("i"), randomElement())
    opponent.zone.append(opponent.natElement.htmlElement);

    animate();

    resolveRound(player.natElement,opponent.natElement)

}
//return player or opponent as string
function resolveRound (playerE, opponentE) {

    if (playerE.beats == opponentE.symbol) {
        
        announcer.innerText = "Player Wins Round!"
        opponent.shield--;


    } else if (opponentE.beats == playerE.symbol) {
        
        announcer.innerText = "Opponent Wins Round!"
        player.shield--;
        

    } else {
        announcer.innerText = "Draw!"
    }

}
//Add class "animate" to all elements that should be animated.
//Suggestion: Animatable elements could be stored in a list in wizard object, and then iterated over in a for loop.
function animate () {
    player.box.classList.add("animate")
    player.natElement.htmlElement.classList.add("animate");
    player.zone.classList.add("animate");

    opponent.box.classList.add("animate")
    opponent.natElement.htmlElement.classList.add("animate");
    opponent.zone.classList.add("animate");
    
    animated = true;
}

function resetAnimations() {
    player.box.classList.remove("animate")
    player.natElement.htmlElement.classList.remove("animate");
    player.zone.classList.remove("animate");

    opponent.box.classList.remove("animate")
    opponent.natElement.htmlElement.classList.remove("animate");
    opponent.zone.classList.remove("animate");

    removeHtmlElements();
    animated = false;
}

function removeHtmlElements() {
    player.natElement.htmlElement.remove();
    opponent.natElement.htmlElement.remove();
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

function generateShieldString (shields) {
    let string = "";
    for (let i=0; i < shields; i++) {
        string += "🔮";
    }
}