const main = () => {
	shuffle()
}
const cards = [
	'Ace of Spades',
	'2 of Spades',
	'3 of Spades',
	'4 of Spades',
	'5 of Spades',
	'6 of Spades',
	'7 of Spades',
	'8 of Spades',
	'9 of Spades',
	'10 of Spades',
	'Jack of Spades',
	'Queen of Spades',
	'King of Spades',
	'Ace of clubs',
	'2 of clubs',
	'3 of clubs',
	'4 of clubs',
	'5 of clubs',
	'6 of clubs',
	'7 of clubs',
	'8 of clubs',
	'9 of clubs',
	'10 of clubs',
	'Jack of clubs',
	'Queen of clubs',
	'King of clubs',
	'Ace of Hearts',
	'2 of Hearts',
	'3 of Hearts',
	'4 of Hearts',
	'5 of Hearts',
	'6 of Hearts',
	'7 of Hearts',
	'8 of Hearts',
	'9 of Hearts',
	'10 of Hearts',
	'Jack of Hearts',
	'Queen of Hearts',
	'King of Hearts',
	'Ace of Diamonds',
	'2 of Diamonds',
	'3 of Diamonds',
	'4 of Diamonds',
	'5 of Diamonds',
	'6 of Diamonds',
	'7 of Diamonds',
	'8 of Diamonds',
	'9 of Diamonds',
	'10 of Diamonds',
	'Jack of Diamonds',
	'Queen of Diamonds',
	'King of Diamonds'
]

const shuffle = () => {
	// for i from n - 1 down to 1 do:
	for (let i = 0; i < cards.length; i++) {
		const j = Math.floor(Math.random() * cards.length)
		console.log(cards[j])
		let temp = cards[i]
		cards[i] = cards[j]
		cards[j] = temp
	}
}

const drawCard = () => {
	document.querySelector('.shown-cards').textContent = cards.pop()
	document.querySelector('.shown-cards-2').textContent = cards.pop()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.display-card').addEventListener('click', drawCard)
