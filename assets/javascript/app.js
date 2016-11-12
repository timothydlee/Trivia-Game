$(document).ready(function(){

	/*Global Variables*/
	var correct = 0;//Counter to keep track of correct answers
	var incorrect = 0;//Counter to keep track of incorrect answers
	var timerQ = 10; //For timer that decrements every second, visually for user
	var timerA = 3; //For setTimeout
	var gameCounter = 0; //For keeping track of which question user sees
	var counter; //For set interval
	var rightOrWrong; //Boolean that keeps track of whether the selected answer is correct or not
	var answeredYet = false; //Boolean that keeps track of whether or not a user has selected an answer to move forward

	//Object that contains questions/answers//
	var questions = [
		{
			"answer": "Christopher Walken",
			"question": "Which multiple-time host had the famous need for more cowbell?",
			"options": ["Alec Baldwin", "Steve Martin", "Tom Hanks","Christopher Walken"]
		},
		{
			"answer": "Kate McKinnon",
			"question": "Which cast member received fame for her impressions of Justin Bieber and Hillary Clinton?",
			"options": ["Tina Fey", "Kate McKinnon", "Vanessa Bayer", "Amy Poehler", ]
		},
		{
			"answer": "Will Ferrell and Rachel Dratch",
			"question": "Which duo played the overly sexually married lovers, Roger and Virginia Klarvin? Hint: Their most famous scene was in a hot tub...",
			"options": ["Will Ferrell and Rachel Dratch", "Fred Armisen and Tina Fey", "Darrell Hammond and Amy Poelher", "Jason Sudeikis and Abby Elliott"]
		},
		{
			"answer": "Darrell Hammond",
			"question": "Which cast member played Sean Connery as Will Ferrell's nemesis in Celebrity Jeopardy?",
			"options": ["Jimmy Fallon", "Jim Breuer", "David Spade", "Darrell Hammond"]
		},
		{
			"answer": "Chris Parnell",
			"question": "Who is Andy Samberg's rapping counterpart in the Digital Short - Lazy Sunday, a song about the Chronicles of Narnia?",
			"options": ["Chris Parnell", "Tracy Morgan", "Horatio Sanz",  "Seth Meyers"]
		},
		{
			"answer": "Spartans",
			"question": "In the recurring skit of bumbling male and female high school cheerleaders, Will Ferrell and Cheri Oteri cheer for what team  mascot?",
			"options": ["Tigers", "Warriors", "Spartans", "Deers"]
		},
		{
			"answer": "In a van down by the river",
			"question": "Where does Chris Farley's character, Matt Foley, the motivational speaker, live?",
			"options": ["200 miles away", "Down the street", "1601 Pennsylvania Avenue", "In a van down by the river"]
		},
		{
			"answer": "MacGruber",
			"question": "What character did Will Forte spin off to its own full length feature film?",
			"options": ["MacGruber", "Tim Calhoun", "Jeff Montgomery, sex offender", "George Bush"]
		}
	];

	//Start button - upon click, removes start button, displays question and multiple 
	//choice answers and enters into game function	
	$("#start-button").on("click", function(){
		$(this).addClass("hide"); //Hides start button
		$(".answers").removeClass("hide"); //Removes class that hides this element
		$(".question").removeClass("hide"); //Removes class that hides this element
		myTimer(); //Starts timer
		game();//Game function begins
	});

	//Recursive function that handles skeleton of the game operation
	var game = function(){
		//End scenario - only displays score when game counter is the same value as the 
		//length of the questions array (ie runs through all the questions)
		if (gameCounter===questions.length){
			displayScore();
			return false;
		} else {
			//Unless game has ended, display the question
			displayQuestion();
		}
	};

	//Display the question function
	var displayQuestion = function(){
		//Setting an interval that calls myTimer function every 1 second
		counter = setInterval(myTimer, 1000);
		//Displays the question at the same index position as the gameCounter's value
		$(".question").html(questions[gameCounter].question);
		//Dynamically generates the answer choices for each question, setting an
		//attribute of data-name equal to the string contained in the option that is being generated.
		for (var i=0; i<questions[gameCounter].options.length; i++){
			$("#answer" + i).attr("data-name", questions[gameCounter].options[i]).html(questions[gameCounter].options[i]);
		}
	};

	//Display answer function after either time runs out or the user selects an answer
	var displayAnswer = function(){
		//Displays whether or not the answer is correct by referencing this function
		rightOrWrongDisplay();
		//Informs the user of the correct answer
		$(".question").html("The correct answer is " + questions[gameCounter].answer + "!");
		//Empties the answer choices
		$(".answers").empty();
		//Boolean set to its default - meant to be the condition to check whether or not any answer has been selected has been made
		answeredYet = false;
	};

	//Displays score when all questions have been rendered
	var displayScore = function(){
		//Empties #timer div where timer was displaying
		$("#timer").empty();
		//Setting a variable to hold the unanswered questions
		var unanswered = (questions.length - incorrect - correct);
		//Displays right, wrong and unanswered question stats
		$(".question").html("<p> Game Over!</p>" + "<p> Correct: " + correct + "</p><p>Incorrect: " + incorrect +"</p>" + "<p>Unanswered: " + unanswered + "</p>");
		//Empties answer choices area for aesthetics.
		$(".answers").empty();
		//Allowing reset button to be displayed
		$("#reset-button").removeClass("hide");
	};


	//Timer function that also made game proceed between questions and answers
	function myTimer() {
		$("#timer").html(timerQ--);
		//Set condition to -1 because the clock was resetting 1 second too early despite logic. Also it checks if any answere has been chosen.
		if (timerQ===-1||answeredYet===true){
			//Stop the counter
			stop();
			//Once the timer is 0 or the user selects an answer, the timer stops, and the answer is displayed
			displayAnswer();
			//Increments gameCounter to move on to the next question
			gameCounter++;
			//Resetting rightOrWrong
			rightOrWrong = false;
			//The displayAnswer page will display for 3 seconds before timing out and entering back into the game function again.
			setTimeout(game, timerA*1000);
		}	
	 };
	 
	//Stops the interval 
    function stop(){
    	clearInterval(counter);
    	//resets timerQ to 10 (seconds);
    	timerQ=10;
    };

    //When an answer is selected, regardless of the correctness of the answer, this happens:
    $(".answers").on("click", function(){
    	//Chosen answer gets assigned the attribute data-name which corresponds with the answer
    	//choices as done in the dyanmic generation of the list of options 
    	var chosenAnswer = ($(this).attr("data-name")); 
    	//If the user's chosen answer equals the string of the correct answer, then rightorwrong is true.
    	if (chosenAnswer === questions[gameCounter].answer){
    		rightOrWrong = true;
    		//Increments correct answers
    		correct++;
    	//Otherwise, it's wrong
    	} else {
    		rightOrWrong = false;
    		//Incorrect counter increments
    		incorrect++;
    	}
    	//Resetting the value to be reused.
    	answeredYet = true;
    });

    //Displays whether the answer selcted was correct.
    function rightOrWrongDisplay(){
    	if (rightOrWrong===true){
    		$("#timer").html("Correct!");
    	} else {
    		$("#timer").html("Wrong, dummy!");
    	}
    };

    //Resets game
    function reset(){
    	correct = 0;
		incorrect = 0;
		timerQ = 10;
		timerA = 3; 
		gameCounter = 0;
		counter; 
		rightOrWrong;
		answeredYet = false;
		$("#reset-button").addClass("hide");
		$(".answers").removeClass("hide");
		$(".question").removeClass("hide");
		myTimer();
		game();
    };
    //Action that handles the click function on the reset button
    //Calls reset function that clears the game and starts over.
    $("#reset-button").on("click", function(){
    	reset();
    });
});