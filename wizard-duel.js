//🧙👹🧞👻👿👺🌋🌳🌊💀🔮

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

    //symbol är innerText av html-element som klickats på
    //om symbol är id av html-elementet och det alltid är 0, 1 eller 2
    // const arrayAvBeats = ["🌱", "💧", "🔥"]
    // this.beats = arrayAvBeats[symbol];
}


//Player wizard object
let player = {
    wizard :  document.querySelector("i.player.wizard"),
    zone : document.querySelector("div.player.zone"),
    box : document.querySelector("div.player-box"),
    shields: 3,
    shieldContainer : document.querySelector("div.player.shields"),
    name: "Player",
    
}
addShields(player.shieldContainer,player.shields)

//Opponent wizard object
let opponent = {
    wizard :  document.querySelector("i.opponent.wizard"),
    zone : document.querySelector("div.opponent.zone"),
    box : document.querySelector("div.opponent-box"),
    shields: 3,
    shieldContainer : document.querySelector("div.opponent.shields"),
}
addShields(opponent.shieldContainer,opponent.shields)

//Element buttons, player selects one and then the round starts.
const elementButtons = document.querySelector("div.elements");
elementButtons.addEventListener('click', duel);

//Announcer text that announces what's going on. 
const announcer = document.querySelector("p.announcer")

let gameRunning = true;
let animated = false;

//New game button
const newGameButton = document.querySelector("button.new-game");
newGameButton.addEventListener("click", newGame);

//Text box
const textBox = document.body.querySelector("input")
textBox.addEventListener("keydown", inputName)
const enterNameWrapper = document.body.querySelector("div.enter-name-wrapper")

//Character switcher for player wizard
player.box.addEventListener("click", changeWizard);

function duel(event){

    if (event.target.nodeName === "BUTTON") {

        if (gameRunning) {
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
    }

}
//return player or opponent as string
function resolveRound (playerE, opponentE) {

    if (playerE.beats == opponentE.symbol) {
        
        announcer.innerText = `${player.name} Wins Round!`
        announcer.style.color = "yellow"
  
        opponent.shields--;
        opponent.shieldContainer.querySelector("i.shield").remove();

        if (opponent.shields === 0) {
            playerWins();
        }

    } else if (opponentE.beats == playerE.symbol) {
        
        announcer.innerText = "Opponent Wins Round!"
        announcer.style.color = "red"
        
        player.shields--;
        player.shieldContainer.querySelector("i.shield").remove();
        
        if (player.shields === 0) {
            opponentWins();
        }

    } else {
        announcer.innerText = "Draw!"
        announcer.style.color = "yellow"
    }
}

function playerWins () {
    opponent.wizard.innerText = "💀"
    announcer.innerText = "You win!!!"
    confetti.start();
    
    endGameState();
}

function opponentWins () {
    player.wizard.innerText = "💀"
    announcer.innerText = "You lose."
    
    endGameState();
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

function addShields (shieldDiv,shields) {
    for (let i = 0; i < shields; i++) {
        shield = document.createElement("i")
        shieldDiv.append(shield)
        shield.innerText = "🔮";
        shield.classList.add("shield")
    }
}

function newGame () {
    confetti.stop();
    gameRunning = true;
    elementButtons.style.opacity = "100%"
    newGameButton.style.opacity = "0%";
    resetGameAssets();
}

function endGameState () {
    gameRunning = false;
    elementButtons.style.opacity = "30%"
    newGameButton.style.opacity = "100%";
    
}
function resetGameAssets() {
    resetAnimations();

    player.wizard.innerText = "🧙"
    opponent.wizard.innerText = randomWizard();
    
    //Clear shield assets
    let allShields = document.body.querySelectorAll("i.shield")
    for (const sh of allShields) {
        sh.remove();
    }
    //Add new shield assets
    player.shields = 3;
    addShields(player.shieldContainer,3);
    opponent.shields = 3;
    addShields(opponent.shieldContainer,3);

    announcer.innerText = "Choose your element!"
    announcer.style.color = "yellow"
}
function inputName (event) {
    if(event.key === "Enter" ) {
        submitName(textBox.value)
        textBox.style.opacity="0%"
        enterNameWrapper.style.opacity="0%"
    }
}
function submitName(input){ 
    
    if(input !=="") {
        player.name = input;
        const nameBar = document.body.querySelector("div.name-bar");
        const name = document.createElement("p")
        name.classList.add("name")
        nameBar.appendChild(name)
        name.innerText = player.name;
    }
}
function changeWizard() {
    let bool = true;
    while(bool) {
    let randWizard = randomWizard();
        if (player.wizard.innerText != randWizard) {
            bool = false;
            player.wizard.innerText = randWizard;
        }
    }
   
}