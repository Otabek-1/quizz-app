const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        answer: "Hydrogen"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "600,000 km/s", "1,000,000 km/s"],
        answer: "300,000 km/s"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Gold", "Iron", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "What year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1923"],
        answer: "1912"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultModal = document.getElementById('resultModal');
const resultContainer = document.getElementById('result');
const closeModal = document.getElementById('closeModal');

function loadQuiz() {
    quizContainer.innerHTML = '';
    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            <div class="options">
                ${item.options.map((option) => `
                    <label class="option">
                        <input type="radio" name="q${index}" value="${option}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateResults() {
    const answers = quizData.map((item, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        return selectedOption ? selectedOption.value : '';
    });

    const score = answers.reduce((acc, answer, index) => {
        return answer === quizData[index].answer ? acc + 1 : acc;
    }, 0);

    resultContainer.innerHTML = `Your score is ${score} out of ${quizData.length}`;
    resultModal.style.display = 'flex'; // Show the modal
}

submitButton.addEventListener('click', calculateResults);

closeModal.addEventListener('click', () => {
    resultModal.style.display = 'none'; // Hide the modal
});

// Close modal if user clicks outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === resultModal) {
        resultModal.style.display = 'none';
    }
});

loadQuiz();
