var questionInput = document.querySelector('#input-q');
var questionOutput = document.querySelector('#user-q');

var randomQPlaceholder = document.querySelector('#random-q-place');
var randomPrompt = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes - definitely",
"You may rely on it",
"As I see it, yes.",
"Most likely",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful.",];


document.querySelector('#get-answer-btn').addEventListener("click", function() {
      var eightBall = document.querySelector('#eight-ball');
      var responseSection = document.querySelector('.response');
      responseSection.classList.remove('hidden');
      eightBall.parentNode.replaceChild(responseSection, eightBall);
      questionOutput.innerHTML = questionInput.value;
      randomQPlaceholder.innerHTML = randomPrompt[Math.floor(Math.random() * randomPrompt.length)];

});

document.querySelector('#clear').addEventListener("click", function () {
  var form = document.querySelector(".myForm");
  form.reset();
})
