const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const title1 = document.getElementById('title-1')
let counter = 0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  title1.classList.add('hide')
  endButton.classList.add('hide')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion(shuffledQuestions, currentQuestionIndex)
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(child => {
    setStatusClass(child, child.dataset.correct) 
  })
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    endButton.classList.remove('hide')
    endButton.innerText = 'Restart'
    //startButton.innerText = 'Restart '+counter
    //startButton.classList.remove('hide')
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
    counter++
  }
}

function clearStatusClass(element) {
  element.classList.remove('wrong')
  element.classList.remove('correct')
}
const questions = [
  {
    question: 'Which is the highest peak in Bulgaria?',
    answers: [
      { text: 'Botev Peak', correct: false},
      { text: 'Musala', correct: true}
    ]
  },
  {
    question: 'Which is the national flower of China?',
    answers: [
      { text: 'The plum blossom', correct: true},
      { text: 'The rose', correct: false }
    ]
  },
  {
    question: 'When does the Japanese Sakura tree bloom?',
    answers: [
      { text: 'The end of March', correct: true },
      { text: 'The beginning of April', correct: false }
    ]
  },
  {
    question: 'What is Belgium best known for?',
    answers: [
      { text: 'Chocolate, French fries', correct: true },
      { text: 'Zucchini', correct: false }
    ]
  },
  {
    question: 'Which word is in Korean?',
    answers: [
      { text: '사랑', correct: true },
      { text: '愛', correct: false }
    ]
  },
  {
    question: 'Whose dish is Kimchi?',
    answers: [
      { text: 'Chinese', correct: false },
      { text: 'Korean', correct: true }
    ]
  },
  {
    question: 'Which country is part of the Council of Europe?',
    answers: [
      { text: 'Switzerland', correct: true },
      { text: 'Belarus', correct: false }
    ]
  },
  {
    question: '20% of the Italian territory is mountainous.',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  },
  {
    question: 'Which country is known for the most archaeological museums?',
    answers: [
      { text: 'Spain', correct: false },
      { text: 'Greece', correct: true }
    ]
  },
  {
    question: 'Lublin is a city in...?',
    answers: [
      { text: 'Poland', correct: true },
      { text: 'Ukraine', correct: false }
    ]
  }
]
