const multiChoice = document.querySelector("#multi-choice");
const checkbox = document.querySelector('#checkbox')
const paragraph = document.querySelector('#paragraph')
const answerArea = document.querySelector('.answer-area');
const addQuest = document.querySelector('#add-quest');
const allQuestions = document.querySelector('.all-questions');



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

        let editQuest = document.createElement('button')
        editQuest.setAttribute('id', `edit-questText-${questions[i]}`)
        editQuest.classList.add('edit-questText')
        editQuest.textContent = `Edit Question`
        
        questionCont.appendChild(questionText)
        questionCont.appendChild(editQuest)

        let answerType = document.createElement('div')
        answerType.classList.add('answer-type')
        if (questions[i]['answerType'] == 'multiple') {
            // Loop on options if the answer type is multiple choice
            for (let j = 0; j < questions[i]['answer'].length; j++){
                let option = document.createElement('div')
                option.classList.add('multi-choice')
                option.innerHTML = `<div><input type="radio" name="q${i+1}" id="q${i+1}" value="${questions[i]['answer'][j]}"> 
                ${questions[i]['answer'][j]}</div>
                <div class="choice-btns">
                <button type="button" class="edit-option" id="edit-option-${i}${j}">Edit</button>
                <button type="button" class="remove-option" id="remove-option-${i}${j}">Remove</button>
                </div>
                `
                answerType.appendChild(option)
            }
        }
        if (questions[i]['answerType'] == 'checkbox') {
            for (let j = 0; j < questions[i]['answer'].length; j++){
                let option = document.createElement('div')
                option.classList.add('checkbox')
                option.innerHTML = `<div><input type="checkbox" name="q${i+1}" id="q${i+1}" value="${questions[i]['answer'][j]}"> 
                ${questions[i]['answer'][j]}</div>
                <div class="choice-btns">
                <button type="button" class="edit-option" id="edit-option-${i}${j}">Edit</button>
                <button type="button" class="remove-option" id="remove-option-${i}${j}">Remove</button>
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

function createMultiChoice(event) {
    // event.preventDefault();
    
}

multiChoice.addEventListener('click', function(event){
    let option = document.createElement('div')
    option.classList.add('multi-choice')
    option.innerHTML = `<input type="radio" name="q1" id="q1" value="Option 1"> 
    <input type="text" placeholder="write the option here">
    <button type="button" id="remove-option-1a">Remove</button>
    `
    answerArea.appendChild(option)
})

addQuest.addEventListener('click', function (event) {
    event.preventDefault();
    let questionContainer = document.createElement('div')
    questionContainer.classList.add('question-container')
    questionContainer.innerHTML = `
    <textarea name="quest" id="quest" class = "quest-text-inp" cols="30" rows="3" placeholder = "Type your Question here"></textarea>
                <div class="answer-type">
                    <button type="button" id="multi-choice">Multiple Choice</button>
                    <button type="button" id="checkbox">Checkbox</button>
                    <button type="button" id="paragraph">Paragraph</button>
                </div>
                
                <div class="answer-area"></div>
    `
    allQuestions.appendChild(questionContainer)
})

const removeOptions = document.querySelectorAll('.remove-option')
// Foreach loop to traverse over remove option elements
removeOptions.forEach(element => {
    element.addEventListener('click', function (event) {
        console.log(event.target.parentNode.parentNode)
        event.target.parentNode.parentNode.remove();
    })
});

const editOptions = document.querySelectorAll('.edit-option');
editOptions.forEach(element => {
    element.addEventListener('click', function (event) {
        newText = prompt("Enter new option: ")
        optionID = event.target.id
        // fetched position of hyphen
        hyphenIndex = optionID.lastIndexOf('-')
        console.log(hyphenIndex);
        // sliced the ID to get question number and option number combination from edit-option-ID
        questOption = optionID.slice(hyphenIndex + 1);
        console.log(questOption);
        optionNum = questOption % 10;
        questNum = Math.floor(questOption / 10);
        console.log(questNum, optionNum);
        questions[questNum]['answer'][optionNum] = newText
        renderQuestions();
        // console.log(event.target.parentNode.parentNode)
        // element.target.parentNode.value(newText);
        // element.parentNode.textContent = newText;
    })
})

