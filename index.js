var readlineSync= require("readline-sync");
var UserName= readlineSync.question("May I know your name please ")
var score=0;

var msg= 'Welcome '+ UserName
console.log(msg + " Let us test how well you know Vishal")

function quiz(question,answer)
{
var userAnswer= readlineSync.question(question);

if(userAnswer=== answer)
{
  console.log("you are correct!")
  score++;
 }
else {
  console.log("Sorry,you are wrong!")
  score--;
}
 console.log("Score is: ",score )
 console.log("----------------")
}

//var objectquestionone={ 
  //question: "Where do Vishal live?"
  //answer: "Guna"
//}

//var objectquestiontwo={
  //question: "Am I currently working"
  //answer: "Yes"
//}

//Array creation
var questions=[{
  question: "Where do Vishal live? ",
  answer: "Guna"
  },
  {question: "Is Vishal currently working? ",
  answer: "Yes"},
  {question: "Vishal's favourite Sport? ",
  answer: "Basketball"}

  ]

for( var i=0; i<questions.length; i++)
{
  var currentquestion=questions[i];
  quiz(currentquestion.question,currentquestion.answer)
}

console.log("Hurrayy! Your Final Score is ", score);


 



