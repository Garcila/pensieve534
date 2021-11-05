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
		Definition:
			"Small, spongy air sacks in your lungs that exchange the carbon dioxide and the oxygen",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 5,
		Hint: "Sponge Bob",
		Comment:
			"They are in the lungs and make the connection to the Circulatory System",
	},
	{
		Word: "Heart",
		Definition:
			"It is a muscle that is responsible for pumping blood to the body",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 6,
		Hint: "Pump",
		Comment: "It has four chambers",
	},
	{
		Word: "Atherosclerosis",
		Definition:
			"It is a type of disease that can block blood the from flowing in the arteries.  Build up of plaque",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 31,
		Hint: "plaque",
		Comment: "It is mostly made out of fat",
	},
	{
		Word: "Esophagus",
		Definition: "It is a tube that goes from your mouth to your stomach",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 7,
		Hint: "tube for food",
		Comment: "The food travels inside it via muscle contractions",
	},
	{
		Word: "Neurons",
		Definition:
			"Are the basic unit of the nervous system.  It transmits electrical signals to the brain ",
		Subject: "Science",
		Topic: "Nervous System",
		Id: 8,
		Hint: "information",
		Comment: "Sends information to the brain and back",
	},
	{
		Word: "Stroke",
		Definition:
			"When the arteries carrying blood to the brain get clogged, causing brain cell death",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 9,
		Hint: "Stress",
		Comment: "It is caused by stress, bad eating habits, lack of activity",
	},
	{
		Word: "Ligament",
		Definition: "They are tissues that secure joints (bone to bone) together",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 10,
		Hint: "stretchy elastic",
		Comment: "can get confused with connecting muscle to bone --> tendon",
	},
	{
		Word: "Osteoporosis",
		Definition: "It is a disease that weakens your bones",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 11,
		Hint: "females",
		Comment:
			"Happens more to females, and can be prevented by consuming calcium",
	},
	{
		Word: "Obesity",
		Definition: "Overweight",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 12,
		Hint: "fat",
		Comment: "Can be prevented by eating healthy foods and exercising ",
	},
	{
		Word: "Respiratory System",
		Definition:
			"mouth, nose, pharynx, epiglottis, trachea, bronchi, lungs, alveoli, diaphragm, ribs",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 13,
		Hint: "Breathe",
		Comment: "It oxygenates blood",
	},
	{
		Word: "Circulatory System",
		Definition:
			"Arteries, veins, heart (left atrium, left ventricle, right atrium, right ventricle, valves), capillaries",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 14,
		Hint: "Blood",
		Comment: "Pumps blood through your body",
	},
	{
		Word: "Nervous System",
		Definition: "Brain, spinal cord, neurons, nerves, receptors",
		Subject: "Science",
		Topic: "Nervous System",
		Id: 15,
		Hint: "Sensing",
		Comment: "Carries information to the brain and back",
	},
	{
		Word: "Musculoskeletal System",
		Definition: "muscles, joints, ligaments, tendons, bones",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 16,
		Hint: "strong",
		Comment: "It provides support and mobility",
	},
	{
		Word: "Asthma",
		Definition: "Its a condition that causes trouble breathing",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 17,
		Hint: "Abuelita",
		Comment: "Can happen to everybody",
	},
	{
		Word: "Hypertension",
		Definition: "When you have high blood pressure all the time (consistently)",
		Subject: "Science",
		Topic: "Circulatory System",
		Id: 18,
		Hint: "blood pressure",
		Comment:
			"Can be prevented by eating healthy, exercising regularly, get checkups",
	},
	{
		Word: "Crohn's disease",
		Definition: "Inflammation on the digestive system",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 19,
		Hint: "swollen",
		Comment: "---",
	},
	{
		Word: "Diaphragm",
		Definition: "Muscle that helps fill up the lungs",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 20,
		Hint: "flat pillow",
		Comment: "Separates the respiratory system from the digestive system",
	},
	{
		Word: "Coronary artery disease",
		Definition: "Disease that blocks oxygen from reaching the heart",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 21,
		Hint: "crown honorary",
		Comment: "The blockage is caused by a waxy material called plaque",
	},
	{
		Word: "Parts of the digestive system",
		Definition:
			"Mouth, salivary glands, esophagus, liver, stomach, gallbladder, pancreas, small intestine, large intestine, rectum, anus",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 22,
		Hint: "you know it... you got this",
		Comment: "It changes raw food into nutrients for the body",
	},
	{
		Word: "Alveoli and ?",
		Definition: "Two places that supply/exchange oxygen and carbon dioxide",
		Subject: "Science",
		Topic: "Respiratory System",
		Id: 23,
		Hint: "O2 and CO2",
		Comment: "Objective of the respiratory system",
	},
	{
		Word: "Main function of the pancreas",
		Definition:
			"Provides acids to the stomach/small intestine to help digest the food and regulates blood sugar",
		Subject: "Science",
		Topic: "Digestive System",
		Id: 24,
		Hint: "Acid",
		Comment: "It works together with the liver and the gallbladder",
	},
	{
		Word: "Autonomic nervous system controls",
		Definition:
			"Controls automatic functions such as heart beating and breathing",
		Subject: "Science",
		Topic: "Neural System",
		Id: 25,
		Hint: "Automatic",
		Comment: "Functions that happen on their own.  Voluntary vs Involuntary",
	},
	{
		Word: "Biceps and Triceps",
		Definition: "Muscle that works in the opposite direction",
		Subject: "Science",
		Topic: "Musculoskeletal System",
		Id: 26,
		Hint: "antagonist",
		Comment: "All muscles have antagonists",
	},
	{
		Word: "Canadian food guide-how many servings of meat/alternative per day",
		Definition: "1 to 3",
		Subject: "Science",
		Topic: "Organ System",
		Id: 27,
		Hint: "Three meals a day",
		Comment: "---",
	},
	{
		Word: "Choose one of the 5 main organ systems and explain how it works",
		Definition:
			"It all starts with the raw food you put in your mouth.  Once you put it in your mouth the salivary glands produce saliva and you chew it to help become a bolus and it goes to your esophagus.  The esophagus starts contractions to push the bolus down to the stomach.  Once in the stomach, it starts pounding the bolus in the stomach and add acids to dissolve it ito a chyme.  From the stomach it goes into the small intestine.  The pancreas, liver and gallbladder add more acids to help it dissolve and then it starts getting absorbed. Then in the large intestine finishes processing the food and produces the stool that goes out to the rectum.",
		Subject: "Science",
		Topic: "Organ System",
		Id: 28,
		Hint: "my presentation",
		Comment: "",
	},
	{
		Word: "Explain how 2 or more organ systems rely on each other to function",
		Definition: "The circulatory and the respiratory",
		Subject: "Science",
		Topic: "Organ System",
		Id: 29,
		Hint: "heart, lungs",
		Comment:
			"The lungs need the blood to be pumped from the heart and the heart needs the lungs to oxygenate the blood",
	},
	{
		Word: "The effect of the development of technology on our health and bodies",
		Definition:
			"Humans use more and more technology, stopping us from exercising",
		Subject: "Science",
		Topic: "Organ System",
		Id: 30,
		Hint: "my iPad - couch 🥔",
		Comment: "Exercise",
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
const truth = document.querySelector(".truth");

let randomQuestion = data => {
	const rand = Math.floor(Math.random() * data.length);
	currentQuestion = data[rand];
	return data[rand];
};

function displayQuestion() {
	const question = randomQuestion(data);
	definition.textContent = question.Definition;
	hint.textContent = question.Hint;
}

displayQuestion();

function checkAnswer(currentQuestion, guess) {
	const answer =
		currentQuestion.Word.toLowerCase() === guess.toLowerCase().trim()
			? "TRUE"
			: "FALSE";
	result.textContent = answer;
	console.log(answer);
	answer === "FALSE" ? (truth.textContent = currentQuestion.Word) : "";
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
