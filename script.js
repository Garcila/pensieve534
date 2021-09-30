const data = [
	{
		Word: "Mouth",
		Definition:
			"Secondary entry way that air can make its way into your lungs",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 1,
		Hint: "A hole in your face to eat 🍪s",
		Comment: "No comment, this is too easy 😀",
	},
	{
		Word: "Nose",
		Definition:
			"the main entry way for air to make its way into your lungs",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 2,
		Hint: "The bump on your face with two holes",
		Comment:
			"It has mucous and cilia that filter the air of toxins before it reaches your lungs",
	},
	{
		Word: "Pharynx",
		Definition: "It is the throat",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 3,
		Hint: "Also known as throat",
		Comment:
			"The section in the neck that starts at the end of the nasal cavity and ends at the beginning of the trachea and esophagus opening",
	},
	{
		Word: "Epiglottis",
		Definition:
			"Is a flap of elastic cartilage that divides the openings of the trachea and esophagus",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 4,
		Hint: "Rhymes with I need to go to the pottys ",
		Comment:
			"It allows air and food to go down the appropriate passages",
	},
];

let currentQuestion = '';

const definition = document.querySelector('.definition');
const formWord = document.querySelector('.form-word-answer');
const wordAnswer = document.querySelector('.word-answer');
const result = document.querySelector('.result');
const buttonHint = document.querySelector('.button-hint');
const hint = document.querySelector('.hint');
const next = document.querySelector('.next');
const details = document.querySelector('details');

let randomQuestion = (data) => {
  const rand = Math.floor(Math.random()* data.length);
  currentQuestion= data[rand];
  return data[rand];
}

function displayQuestion() {
	console.log(randomQuestion(data))
	const question = randomQuestion(data);
	definition.textContent = question.Definition;
	hint.textContent = question.Hint;
}

displayQuestion();

function checkAnswer(currentQuestion, guess){
   const answer = currentQuestion.Word.toLowerCase() === guess.toLowerCase() ? 'TRUE' : 'FALSE';
   result.textContent = answer;
}

function resetPage() {
	hint.textContent = '';
	currentQuestion = '';
	result.textContent = '';
	wordAnswer.value = '';
	details.open =false
}

formWord.addEventListener('submit', function(e) {
	e.preventDefault();
	const guess = wordAnswer.value;
	checkAnswer(currentQuestion, guess)
});

next.addEventListener('click', function() {
	resetPage();
	displayQuestion();
});
