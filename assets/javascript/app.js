
// audio File
var audio = new Audio('assets/audio/Game of Thrones.mp3');
    audio.play();

$(document).ready(function(){

    // Answer and question stored in an array
  var q1 = {
      	question: "Ned Stark's great sword and the ancestral sword of house Stark is named what?",
        choice1: "Oathbreaker",  
        choice2: "Longclaw",
        choice3: "Oathkeeper",
        choice4: "Ice",
        answer: "Ice",
       
     };

   var q2  = {
        question: "What is the sigil for House Targaryen?",
        choice1: "Direwolf",   
      	choice2: "Three headed dragon",
        choice3: "Golden lion",
        choice4: "A Hunting Eagle",
        answer: "Three headed dragon",
        
    };
  var q3 = {
       question: "Who is not a son or daughter of the Mad King?",
    	 choice1: "Viserys",   
       choice2: "Rhaegar",
       choice3: "Aegon",
       choice4: "Daenerys",
       answer: "Aegon",
       

     };
  var q4 = {
    	question: "What is the name of Jon's uncle who is a member of the Night's Watch?",
  	  choice1: "Brandon",
  	  choice2: "Benjen",
      choice3: "Rickard", 
      choice4: "Tyrion",
      answer: "Benjen",
      
    };
 var q5 = {
    	question: "Why was Jorah exiled from Westeros?",
    	choice1: "for selling slaves", 
    	choice2: "for killing poachers",
      choice3: "for pirating", 
      choice4: "for killing the Mad King",
      answer: "for selling slaves",
     

    };
  var q6 = {
      question: "What is the name of a person that can enter the minds of animals?",
      choice1: "Sellsword",
      choice2: "Grand Maester",
      choice3: "A warg",
      choice4: "A dwarf",
      answer: "A warg",
      
  };

var q7 = {
      question: "What is the name of Jon Snow's direwolf?",
      choice1: "Nymeria", 
      choice2: "Grey Wind",
      choice3: "Ghost",
      choice4: "Summer",
      answer: "Ghost",
      
  };

  var triviaQuestion = [q1,q2,q3,q4,q5,q6,q7];
 
  

 // variables list (Global)
  var questions = [];

  var num = 0;
  var time = 20;
  var numberCorrect = 0;
  var numberWrong = 0;
  var numTimeout = 0;

   // Timer Function for Each Question
  function nextquestion() {
    time = 20;
    counter = setInterval(increment, 1000);
    $(".timer").html("<h2>Time Remaining:" + time + "</h2>");
    $(".question").html(questions[num].question);
    $(".ans1").html(questions[num].choice1);
    $(".ans2").html(questions[num].choice2);
    $(".ans3").html(questions[num].choice3);
    $(".ans4").html(questions[num].choice4);
   
  };

  // Increment Function for Timer Countdown
  function increment() {
    time--
    $(".timer").html("<h2>Time Remaining: " + time + "</h2>")
    if (time == 0) {
      timeout();
      stop();
      $(".choice").empty();
    }
    else if (time < 10) {
      $(".timer").addClass("red");
      setTimeout(function(){$(".timer").removeClass("red")},500)
    };
  };

  // Clear Interval Stop Counter 
  function stop() {
    clearInterval(counter);
    num++;
    if (num == questions.length) {
      setTimeout(endgame,5000);
    }
    else {
      setTimeout(nextquestion,5000);
    };
  };

  // Message on HTML after Correct answer is choosen
  function correctanswer() {
    $(".question").html("<p>You are Correct!</p>");
  $('<img/>')
  .attr('src','assets/images/JSnow.gif')
  .appendTo('.question');
  };

  // Message on HTML after Wrong answer is choosen
  function wronganswer() {
    numberWrong++;
    $(".question").html("<p>WRONG <br> The correct answer was: " + questions[num].answer + "</p>");
   
   //--unable to load images in smaller sizes for wrong/correct answers(FIXED!!!)//

    $('<img/>')
  .attr('src','assets/images/Wildlings.gif')
  .appendTo('.question');
  };

  // [TimeOut] Message when time runs out!!
  function timeout() {
    numTimeout++;
    $(".question").html("<p>Time's up! <br> The correct answer was: " + questions[num].answer + "</p>");
    
  };

  // [EndGame] Message shown with added HTML for tally of number wrong, number correct, number questions not answered!
  function endgame() {
    $(".question").html("<h2>You got " + numberCorrect + " answers correct!</h2>"
       + "<h2>You got " + numberWrong + " Wrong</h2>" + "<h2>You didn't answer "  + numTimeout +  " questions</h2>");
    $(".choice").empty();
    $("timer").empty();
   
    num = 0;
    numberCorrect = 0;
    numberWrong = 0;
    numTimeout = 0;
    $("button").show();
  };
  $(".startButton").on("click",function(){
    questions = triviaQuestion;
    nextquestion();
    $("button").hide();
    audio.play();
  }) 

  // Click Functions for choosen [Correct] and [Wrong] answers choosen
  $(".choice").on("click", function() {

      if($(this).text() == questions[num].answer) {
        numberCorrect++;
        correctanswer();
        stop();
      }

      else {
        wronganswer();
        stop();
      };

      $(".choice").empty();

  });

  


});




