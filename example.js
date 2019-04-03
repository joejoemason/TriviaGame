let question1 = {
    theQuestion: "What college did Michael Jordan attend?",
    answers: ["Mississippi State",
        "Indiana University",
        "Georgia State",
        "University of North Carolina"
    ],
    correctAnswer: 3


}
let question2 = {
    theQuestion: "Question two",
    answers: ["option 2-1",
        "option 2-2",
        "option 2-3",
        "option 2-4"
    ],
    correctAnswer: 2


}

let question3 = {
    theQuestion: "Question three",
    answers: ["option 3-1",
        "option 3-2",
        "option 3-3",
        "option 3-4"
    ],
    correctAnswer: 1


}

let question4 = {
    theQuestion: "Question four",
    answers: ["option 4-1",
        "option 4-2",
        "option 4-3",
        "option 4-4"
    ],
    correctAnswer: 0



}

let question5 = {
    theQuestion: "Question five",
    answers: ["option 5-1",
        "option 5-2",
        "option 5-3",
        "option 5-4"
    ],
    correctAnswer: 3
}

let questions = [question1, question2, question3, question4, question5]

console.log(questions)

for (let d = 0; d < question5.answers.length; d++) {
    console.log(question5.answers[d])

}