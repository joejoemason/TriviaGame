let Question = function



    let questions = [
        let score = 0;

{
    prompt: "What college did Michael Jordan attend?\n(a) Mississippi State\n\
        (b) Indiana University\n (c) Georgia State\n (d) University of North Carolina",
        answer: "a"
},
{
    prompt: "What college did Michael Jordan attend?\n(a) Mississippi State\n\
        (b) Indiana University\n (c) Georgia State\n (d) University of North Carolina",
        answer: "a"
},
{
    prompt: "What college did Michael Jordan attend?\n(a) Mississippi State\n\
        (b) Indiana University\n (c) Georgia State\n (d) University of North Carolina",
        answer: "a"
},

{
    prompt: "What college did Michael Jordan attend?\n(a) Mississippi State\n\
        (b) Indiana University\n (c) Georgia State\n (d) University of North Carolina",
        answer: "a"
},


{
    prompt: "What college did Michael Jordan attend?\n(a) Mississippi State\n\
        (b) Indiana University\n (c) Georgia State\n (d) University of North Carolina",
        answer: "a"
},
    ]


// let questions = [question1, question2, question3, question4, question5]

// console.log(questions)

for (let d = 0; d < questions.length; d++) {
    let response = window,.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct");
        else {
            alert("Wrong!");
        }
    }
    alert("you got " + score + "/" + questions.length);

    // console.log(question5.answer[d])
