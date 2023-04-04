const multiChoice = document.querySelector("#multi-choice");
const checkbox = document.querySelector('#checkbox')
const paragraph = document.querySelector('#paragraph')
const answerArea = document.querySelector('.answer-area');
const allQuestions = document.querySelector('.all-questions');

let questions = [
    {
        question: "What is your name?",
        answerType: "multiple",
        answer: ["Damian", 'Jon', 'Peter','Alex']
    },
    {
        question: "What is your age?",
        answerType: "checkbox",
        answer: ["10", '15', '20','25']
    },
    {
        question: "What is your country?",
        answerType: "paragraph",
        answer: ""
    }
]

function renderQuestions() {
    allQuestions.innerHTML = ``
    for (let i = 0; i < questions.length; i++){
        let questionContainer = document.createElement('div')
        questionContainer.classList.add(`question-container`)
        questionContainer.setAttribute('id', `qc-${i + 1}`)
        
        // div to store question text and edit button
        let questionCont = document.createElement('div')
        questionCont.classList.add('question-cont')
        
        // creating elemnt for question text
        let questionText = document.createElement('h3')
        questionText.classList.add('question')
        questionText.innerHTML = questions[i]['question']
        
        questionCont.appendChild(questionText)

        let answerType = document.createElement('div')
        answerType.classList.add('answer-type')
        if (questions[i]['answerType'] == 'multiple') {
            // Loop on options if the answer type is multiple choice
            for (let j = 0; j < questions[i]['answer'].length; j++){
                let option = document.createElement('div')
                option.classList.add('multi-choice')
                option.innerHTML = `<div><input type="radio" name="q${i+1}" id="q${i+1}" value="${questions[i]['answer'][j]}" required > 
                ${questions[i]['answer'][j]}</div>
                
                `
                answerType.appendChild(option)
            }
        }
        if (questions[i]['answerType'] == 'checkbox') {
            for (let j = 0; j < questions[i]['answer'].length; j++){
                let option = document.createElement('div')
                option.classList.add('checkbox')
                option.innerHTML = `<div><input type="checkbox" name="q${i+1}" id="q${i+1}" value="${questions[i]['answer'][j]}"> 
                <label for="vehicle1">${questions[i]['answer'][j]}</label>
                </div>
                `
                answerType.appendChild(option)
            }
        } if (questions[i]['answerType'] == 'paragraph') {
            let option = document.createElement('div')
            option.classList.add('para-textarea');
            option.innerHTML = `
            <textarea name="q${i + 1}" id="q${i + 1}" cols="70" rows="5"></textarea>`
            answerType.appendChild(option)
        }
        questionContainer.appendChild(questionCont)
        questionContainer.appendChild(answerType)
       
        allQuestions.appendChild(questionContainer)
    }
    
}
renderQuestions()

function validateForm(event) {
    event.preventDefault();
    let answerType = document.querySelectorAll('.answer-type');
    
    answerType.forEach(element => {
        let type = element.firstChild.classList.value
        console.log(element)
        if (type === 'checkbox') {
            console.log(element.childNodes)
        }
    });
    
}





