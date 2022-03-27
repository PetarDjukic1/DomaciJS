const questionContainer = document.getElementById('question-container');
const startButton = document.getElementById('start-btn');
const scoreNum = document.getElementById('score');
const scoreTxt = document.getElementById('score-txt');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let score = 0;

let shuffledQuestions, currentQuestionIndex
scoreNum.classList.add('hide');
scoreTxt.classList.add('hide');
startButton.addEventListener('click', startQuiz);



function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function resetState() {
  clearStatusClass(document.body);
 
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function startQuiz() {
  scoreTxt.classList.add('hide');
  scoreNum.classList.add('hide');
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
  score=0;
}



function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button);
  })
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}



function selectAnswer(e) {
  const selectedAnswer = e.target;
  const correct = selectedAnswer.dataset.correct;

  if(correct)
  {
    score++;
  }
  
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    if(correct)
    {
      currentQuestionIndex++;
      setNextQuestion();
    }
    else{
      scoreNum.classList.remove('hide');
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    if(score === questions.length)
    {
      scoreTxt.classList.add('hide');
      scoreNum.innerText = "ALL ANSWERS CORRECT!";
    }
    else
    {
      scoreTxt.classList.remove('hide');
      scoreNum.innerText = score +" out of "+questions.length;
    }
    }
  } else {
   
    scoreNum.classList.remove('hide');
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    scoreTxt.classList.add('hide');
    scoreNum.innerText = "ALL ANSWERS CORRECT!";
    
   
  }
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '21', correct: false }
    ]
  },
  {
    question: 'What rhymes with orange?',
    answers: [
      { text: 'Door Hinge', correct: true },
      { text: 'Porridge', correct: true },
      { text: 'Storage', correct: true },
      { text: 'Pancakes', correct: false }
    ]
  },
  {
    question: 'Correct answer is 5.',
    answers: [
      { text: '3', correct: false },
      { text: '5', correct: true },
      { text: '5!!!', correct: false },
      { text: '7', correct: false }
    ]
  },
  {
    question: 'Binary 101 is _ in decimal',
    answers: [
      { text: '7', correct: false },
      { text: '5', correct: true }
    ]
  }
]