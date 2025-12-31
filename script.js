const quizData = [
  {
    question: "Which stone was mainly used in Hoysala temples?",
    options: ["Granite", "Marble", "Soapstone", "Sandstone"],
    correct: 2
  },
  {
    question: "Hoysala temples are mainly located in which Indian state?",
    options: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Karnataka"],
    correct: 3
  },
  {
    question: "What is the common plan shape of Hoysala temples?",
    options: ["Circular", "Rectangular", "Star-shaped", "Octagonal"],
    correct: 2
  },
  {
    question: "Which dynasty built the Hoysala temples?",
    options: ["Chola", "Pallava", "Hoysala", "Vijayanagara"],
    correct: 2
  },
  {
    question: "Hoysala architecture flourished between which centuries?",
    options: ["8th–10th", "11th–14th", "15th–17th", "18th–19th"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("quizResult");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.innerText = `Q${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";
  resultEl.innerText = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.style.display = "block";
    btn.style.margin = "8px 0";
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].correct) {
    score++;
    resultEl.innerText = "✅ Correct!";
  } else {
    resultEl.innerText = "❌ Wrong!";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.innerText = "Quiz Completed 🎉";
    optionsEl.innerHTML = "";
    resultEl.innerText = `Your Score: ${score} / ${quizData.length}`;
  }
}

// load first question
loadQuestion();
