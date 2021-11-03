const data = [
	{
		Word: "Mouth",
		Definition: "Secondary entry way that air can make its way into your lungs",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 1,
		Hint: "A hole in your face to eat 🍪s",
		Comment: "No comment, this is too easy 😀",
	},
	{
		Word: "Nose",
		Definition: "the main entry way for air to make its way into your lungs",
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
		Comment: "It allows air and food to go down the appropriate passages",
	},
	{
		Word: "Alveoli",
		Definition: "---",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 5,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Heart",
		Definition: "---",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 6,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Atherosclerosis",
		Definition: "---",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 6,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Esophagus",
		Definition: "---",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 7,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Neurons",
		Definition: "---",
		Subject: "Science",
		Topic: "Nervous System",
		Id: 8,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Stroke",
		Definition: "---",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 9,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Ligament",
		Definition: "---",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 10,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Osteoporosis",
		Definition: "---",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 11,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Obesity",
		Definition: "---",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 12,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Respiratory System",
		Definition: "---",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 13,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Circulatory System",
		Definition: "---",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 14,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Nervous System",
		Definition: "---",
		Subject: "Science",
		Topic: "Nervous System",
		Id: 15,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Musculoskeletal System",
		Definition: "---",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 16,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Asthma",
		Definition: "---",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 17,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Hypertension",
		Definition: "---",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 18,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Crohn's disease",
		Definition: "---",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 19,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Muscle that helps fill up the lungs",
		Definition: "---",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 20,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Disease that blocks oxygen from reaching the heart ♥️",
		Definition: "---",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 21,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Parts of the digestive system",
		Definition: "---",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 22,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Two places that supply/exchange oxygen and carbon dioxide",
		Definition: "---",
		Subject: "Science",
		Topic: "--- System",
		Id: 23,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Main function of the pancreas",
		Definition: "---",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 24,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Autonomic nervous system controls",
		Definition: "---",
		Subject: "Science",
		Topic: "Neural System",
		Id: 25,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Muscle that works in the opposite direction",
		Definition: "---",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 26,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Canadian food guide-how many servings of meat/alternative per day",
		Definition: "---",
		Subject: "Science",
		Topic: "Organ System",
		Id: 27,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Choose one of the 5 main organ systems and explain how it works",
		Definition: "---",
		Subject: "Science",
		Topic: "Organ System",
		Id: 28,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "Explain how 2 or more organ systems rely on each other to function",
		Definition: "---",
		Subject: "Science",
		Topic: "Organ System",
		Id: 29,
		Hint: "---",
		Comment: "---",
	},
	{
		Word: "The effect of the development of technology on our health and bodies",
		Definition: "---",
		Subject: "Science",
		Topic: "Organ System",
		Id: 30,
		Hint: "---",
		Comment: "---",
	},
];

let currentQuestion = "";

const definition = document.querySelector(".definition");
const formWord = document.querySelector(".form-word-answer");
const wordAnswer = document.querySelector(".word-answer");
const result = document.querySelector(".result");
const buttonHint = document.querySelector(".button-hint");
const hint = document.querySelector(".hint");
const next = document.querySelector(".next");
const details = document.querySelector("details");

let randomQuestion = data => {
	const rand = Math.floor(Math.random() * data.length);
	currentQuestion = data[rand];
	return data[rand];
};

function displayQuestion() {
	console.log(randomQuestion(data));
	const question = randomQuestion(data);
	definition.textContent = question.Definition;
	hint.textContent = question.Hint;
}

displayQuestion();

function checkAnswer(currentQuestion, guess) {
	const answer =
		currentQuestion.Word.toLowerCase() === guess.toLowerCase()
			? "TRUE"
			: "FALSE";
	result.textContent = answer;
}

function resetPage() {
	hint.textContent = "";
	currentQuestion = "";
	result.textContent = "";
	wordAnswer.value = "";
	details.open = false;
}

formWord.addEventListener("submit", function (e) {
	e.preventDefault();
	const guess = wordAnswer.value;
	checkAnswer(currentQuestion, guess);
});

next.addEventListener("click", function () {
	resetPage();
	displayQuestion();
});
