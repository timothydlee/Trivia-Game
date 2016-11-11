console.log("Is this working")
	/*Global Variables*/
	var correct = 0;
	var incorrect = 0;
	var timerQ = 10;
	var timerA = 3;
	var counter = 0;
	var rightOrWrong = true;
	var gameCounter = -1;
	var answeredYet = true;
	var flag;

	/*Object that contains questions/answers*/
	var questions = [
		{
			"answer": "3",
			"question": "Which multiple-time host had the famous need for more cowbell?",
			"options": ["Alec Baldwin", "Steve Martin", "Tom Hanks","Christopher Walken"]
		},
		{
			"answer": "Kate McKinnon",
			"question": "Which cast member received fame for her impression of Justin Bieber and Hillary Clinton?",
			"options": ["Tina Fey", "Kate McKinnon", "Vanessa Bayer", "Amy Poehler", ]
		},
		{
			"answer": "Will Ferrell and Rachel Dratch",
			"question": "Which duo played the overly sexually married lovers, Roger and Virginia Klarvin? Hint: their most famous scene was in a hot tub",
			"options": ["Will Ferrell and Rachel Dratch", "Fred Armisen and Tina Fey", "Darrell Hammond and Amy Poelher", "Jason Sudeikis and Abby Elliott"]
		},
		{
			"answer": "Darrell  Hammond",
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
			"answer": "In a van, down by the river",
			"question": "Where does Chris Farley's character, Matt Foley, the motivational speaker, live?",
			"options": ["200 miles away", "Down the street", "1601 Pennsylvania Avenue", "In a van down by the river"]
		},
		{
			"answer": "MacGruber",
			"question": "What character did Will Forte spin off to its own full length feature film?",
			"options": ["MacGruber", "Tim Calhoun", "Jeff Montgomery, sex offender", "George Bush"]
		}
	];

	//TIMER STUFF
	function runQ(){
		counter = setInterval(decrementQ, 1000);
    };

    function decrementQ(){
        timerQ--;
        $('#timer').html('<h2>' + timerQ + '</h2>');
        if (timerQ === 0){
            stop();
        }
    };

    function runA(){
		counter = setInterval(decrementA, 1000);
    };

    function decrementA(){
        timerA--;
        $("#timer").html("");
        if (timerA === 0){
            stop();
        }
    };

    function stop(){
    	clearInterval(counter);
    };
	
    function rightOrWrongDisplay(){
    	if (rightOrWrong===true){
    		$("#timer").html("You are correct!");
    	} else {
    		$("#timer").html("You are wrong, dummy!");
    	}
    };

    console.log(questions[counter].options[questions[counter].answer]);

	$("#start-button").on("click", function(){
		$(this).addClass("hide");
		$(".answers").removeClass("hide");
		$(".question").removeClass("hide");
		game();
	});

	var game = function(){
		gameCounter++
		// if (gameCounter + 1> questions.length){
		// 	displayScore();
		// } else {
		// 	displayQuestion(counter);
		// 	displayAnswer(counter);
		// }
		// gameCounter++;
		// game();
	}

	var displayScore = function(){
		console.log("placeholding");
	}

	var displayQuestion = function(counter){
		$(".question").html(questions[counter].question);
		$("#answer0").html(questions[counter].options[0]);
		$("#answer1").html(questions[counter].options[1]);
		$("#answer2").html(questions[counter].options[2]);
		$("#answer3").html(questions[counter].options[3]);
	}

	var displayAnswer = function(counter){
		runA();
		var questionsArray = questions[counter].options;
		$("#timer").html(rightOrWrong);
		if (timer===0){
			$("#question").html("The correct answer is " + questions[counter].options[questions[counter].answer] + "!");
		} else {
			return;
		}
	}




	// var displayQuestion = function(x){
	// 	runQ();
	// 	console.log("Before the while");
	// 	if (timerQ !== 0 || answeredYet !== true) {
	// 		console.log("after the while");
	// 		$(".question").html(questions[x].question);
	// 		$("#answer0").html(questions[x].options[0]);
	// 		$("#answer1").html(questions[x].options[1]);
	// 		$("#answer2").html(questions[x].options[2]);
	// 		$("#answer3").html(questions[x].options[3]);
	// 	} else if (timerQ === 0 || answeredYet === true){
	// 		displayAnswer(x);
	// 	}
	// };

	// var displayAnswer = function(x){
	// 	run(timerA);
	// 	while (timerA>0){
	// 		$("#timer").html(questions[x].answer);
	// 		$(".question").html("Right");
	// 		$(".answers").html("");
	// 		answeredYet = true;
	// 	}
	// };

	// var displayEnd = function(){
	// 	console.log("show results")
	// };

	// $(".answers").on("click", function(){
	// 	answeredYet=true;
	// });
