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


const buildSuit = (suit) => {
    const deck = [];
    for(let i = 0; i < cards.length; i++){
        deck.push(`${cards[i]}-of-${suit}`);
    }
    return deck;
}

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

function Player(name) {
    this.name = name;
    this.hand = [];
}


const cards = ['Nine','Ten','Jack','Queen','King','Ace'];
const hearts = buildSuit('Hearts');
const diamonds = buildSuit('Diamonds');
const clubs = buildSuit('Clubs');
const spades = buildSuit('Spades');

const Cards = [...hearts, ...diamonds, ...spades, ...clubs];



// init game
const bill = new Player('Bill');
const kevin = new Player('Kevin');
const john = new Player('John');
const player = new Player('Brian');
const allPlayers = [bill, kevin, john, player];

shuffle(Cards);

// round
deal(allPlayers, 5);

// draw board
const makeCard = (text) => { 
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = text;
    card.onclick = () => {
        card.classList.toggle('selected');
        console.log(card.textContent);
    }
    return card;
}
const playerDiv = document.querySelector('#player1');
player.hand.forEach((card) => {
    playerDiv.prepend(makeCard(card));
});

console.log(player.hand);
//console.log(Cards);