	/*Global Variables*/
	var correct = 0;
	var incorrect = 0;
	var timerQ = 10; //For timer that decrements every second, visually for user
	var timerA = 3; //For setTimeout
	var gameCounter = 0; //For keeping track of which question user sees
	var counter; //For set interval
	var rightOrWrong;
	var answeredYet = false;

	//Object that contains questions/answers*//
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
			"question": "Which duo played the overly sexually married lovers, Roger and Virginia Klarvin? Hint: Their most famous scene was in a hot tub",
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

	$("#start-button").on("click", function(){
		$(this).addClass("hide");
		$(".answers").removeClass("hide");
		$(".question").removeClass("hide");
		myTimer();
		game();
	});

	var test = function(){
		console.log("Test");
	}

	var game = function(){
		console.log(gameCounter);
		if (gameCounter===questions.length){
			displayScore();
			return false;
		} else {
			displayQuestion();
			console.log("After set interval");
		}
	}

	var displayQuestion = function(){
		console.log("displayQuestion: " + questions[gameCounter].question);
		$(".question").html(questions[gameCounter].question);
		for (var i=0; i<questions[gameCounter].options.length; i++){
			$("#answer" + i).attr("data-name", questions[gameCounter].options[i]).html(questions[gameCounter].options[i]);
		}
		counter = setInterval(myTimer, 1000);
	}

	var displayAnswer = function(){
		console.log("displayAnswer: " + questions[gameCounter].options[questions[gameCounter].answer]);
		rightOrWrongDisplay();
		$(".question").html("The correct answer is " + questions[gameCounter].answer + "!");
		$(".answers").empty();

	}

	var displayScore = function(){
		console.log("We made it to the end!");
		$(".question").html("Game Over! You got " + correct + " questions correct!");;
		$(".answers").empty();
	}


	function myTimer() {
		$("#timer").html(timerQ--);
		if (timerQ===-1){
			stop();
			displayAnswer();
			gameCounter++;
			setTimeout(game, timerA*1000);
		}	
	 };
	  
    function stop(){
    	clearInterval(counter);
    	timerQ=10;
    };

    $(".answers").on("click", function(){
    	var chosenAnswer = ($(this).attr("data-name")); 
    	if (chosenAnswer === questions[gameCounter].answer){
    		rightOrWrong = true;
    		correct++;
    	} else {
    		rightOrWrong = false;
    		incorrect++;
    	}
    	answeredYet = true;
    });

    function rightOrWrongDisplay(){
    	if (rightOrWrong===true){
    		$("#timer").html("You are correct!");
    	} else {
    		$("#timer").html("You are wrong, dummy!");
    	}
    };