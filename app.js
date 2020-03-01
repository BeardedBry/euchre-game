/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};


// /**
//  * Create cards for a suit
//  * @param  {String} suit The suit name.
//  * @return {Array}  Array of Card objects of the suit and value.
//  * @todo implement it to be this way.
//  */
// const buildSuit = (suit) => {
//     const deck = [];
//     for(let i = 0; i < cards.length; i++){
//         deck.push(`${cards[i]}-of-${suit}`);
//     }
//     return deck;
// }

const addToHand = (player, card, ammount) => {
    if(ammount < 1){
        return;
    }
    var index = Cards.indexOf(card);
    var chosenCard = Cards.splice(index, 1);
    player.hand.push(chosenCard);

    return addToHand(player, card, ammount-=1);
}

const randomCard = (cards) => {
    var len = cards.length;
    var randomIndex = Math.floor(Math.random() * Math.floor(len));
    return cards[randomIndex]; 
}

const deal = (playersArr, ammount) => {
 // playersArr === [brian, bobby, etc]
    playersArr.forEach(function(player){
        addToHand(player, randomCard, ammount);    
    });
}


class Suit {
    constructor(name){
        this.name = name;
        this.trump = false;
        this.nine = {
            name: 'Nine',
            suit: name,
            value: 9
        }
        this.ten = {
            name: 'Ten',
            suit: name,
            value: 10
        }
        this.jack = {
            name: 'Jack',
            suit: name,
            value: 11
        };
        this.queen = {
            name: 'Queen',
            suit: name,
            value: 12
        }
        this.king = {
            name: 'King',
            suit: name,
            value: 13
        }
        this.ace = {
            name: 'Ace',
            suit: name,
            value: 14
        }
    }

    getCards(){
        return [this.nine, this.ten, this.jack, this.queen, this.king, this.ace];
    }

    rightBower(){
        this.jack.value = 16;
    }

    leftBower(suit){
        this.jack.value = 15;
        this.jack.suit = suit;
    }
}

// class Card{
//     constructor(suit,value){
//         this.suit = suit.name;
//         this.trump = suit.trump;
//         this.value = value;
//     }
// }

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.isTurn = false;
    }

    playCard(cardName){

    }
}

class GameState {
    constructor(){
    }

    shuffleCards(){

    }

    reset(){
        Hearts = new Suit('Hearts');
        Diamonds = new Suit('Diamonds');
        Spades = new Suit('Spades');
        Clubs = new Suit('Clubs');
    }
}




// game initilization
var Hearts,Diamonds,Spades,Clubs;


// const cards = ['Nine','Ten','Jack','Queen','King','Ace'];
// const hearts = buildSuit('Hearts');
// const diamonds = buildSuit('Diamonds');
// const clubs = buildSuit('Clubs');
// const spades = buildSuit('Spades');

// const Cards = [...hearts, ...diamonds, ...spades, ...clubs];


// // init game
// const bill = new Player('Bill');
// const kevin = new Player('Kevin');
// const john = new Player('John');
// const player = new Player('Brian');
// const allPlayers = [player, bill, kevin, john];
// const allOpponents = [bill, kevin, john];

// shuffle(Cards);

// // round
// deal(allPlayers, 5);

// // draw board
// const makeCard = (text) => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.textContent = text;
//     card.onclick = () => {
//         card.classList.toggle('selected');
//         console.log(card.textContent);
//     }
//     return card;
// }

// const makeSmallCard = (text) => {
//     const card = document.createElement('span');
//     card.textContent = text;
//     card.style.display = "block";
//     return card;
// }

// const playerDiv = document.querySelector('#player1');
// const player2Div = document.querySelector('#player2');
// const player3Div = document.querySelector('#player3');
// const player4Div = document.querySelector('#player4');
// const playButton = document.querySelector('#play');

// const opponentDivs = [player2Div, player3Div, player4Div];


// player.hand.forEach((card) => {
//     playerDiv.prepend(makeCard(card));
// });

// for(let i = 0; i < allOpponents.length; i++){
//     allOpponents[i].hand.forEach((card)=>{
//         opponentDivs[i].prepend(makeSmallCard(card));
//     })
// }

// player2


//MVC


// Model
// handles data, ajax. 
// cares only about JSON or objects that come from the server.
// doesn't care about HTML

// Game Controller
// handles user input and talks between data and view.
// the mediator, without worrying about implementation details.


// View
// handles the DOM. or any front end. 
// can attach events but leaves event handling to the controller.
// Doesn't care about AJAX.

// class Model {
//     constructor(){}
// }


// class GameController {
//     constructor(config, model, view, players){
//         this.view = view;
//         this.model = model;
//         this.players = players; //array
//     }

//     initialize() {
        
//     }

// }


// class View {
//     constructor(){}
// }


// const game = new GameController(new Model(), new View());

