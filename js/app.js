function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function () {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function () {
		$(".overlay").fadeOut(1000);
	});
}

function hotterOrColder(num){
	var lastNumber = parseInt($("#guessList li").last().text());
	if(Math.abs(randomNumber-num) <= Math.abs(randomNumber-lastNumber) && num != randomNumber){
		$("#feedback").text("Warmer");
		$("#feedback").css("background-color", "lightgreen");
	}
	else if(num == randomNumber){
		$("#feedback").text("You found it!");
		$("#feedback").css("background-color", "limegreen");
	}
	else {
		$("#feedback").text("Colder");
		$("#feedback").css("background-color", "grey");
	}
}

function hotOrColdInitial(num) {
	if (Math.abs(randomNumber - num) > 50) {
		$("#feedback").text("Very Cold");
		$("#feedback").css("background-color", "red");
	} else if (Math.abs(randomNumber - num) <= 50 && Math.abs(randomNumber - num) > 20) {
		$("#feedback").text("Cold");
		$("#feedback").css("background-color", "grey");
	} else if (Math.abs(randomNumber - num) <= 20 && Math.abs(randomNumber - num) > 10) {
		$("#feedback").text("Warm");
		$("#feedback").css("background-color", "lightgreen");
	} else if (Math.abs(randomNumber - num) <= 10 && randomNumber != num) {
		$("#feedback").text("Very Warm");
		$("#feedback").css("background-color", "green");
	} else {
		$("#feedback").text("You found it!");
		$("#feedback").css("background-color", "limegreen");
	}
}

function hotOrCold(num) {
	if ($("#guessList li").length == 0) {
		hotOrColdInitial(num);
	} else {
		hotterOrColder(num);
	}
}

function recieveInput() {
	$("form").submit(function (event) {
		if ($("input").first().val()) {
			hotOrCold(parseInt($("input").first().val()));
			$("#guessList").append(
				"<li>" +
				$("input").first().val() +
				"</li>"
			);
			guessCounter = parseInt($(".js-guess-count").text());
			guessCounter += 1
			$(".js-guess-count").text(guessCounter);
		}
		event.preventDefault();
	});
}

function newGame() {
	$(".js-new-game").click(function () {
		$(".js-guess-count").text("0");
		$("#guessList").empty();
		randomNumber = (1 + Math.floor(Math.random() * 100));
		$("#feedback").text("Make your Guess!");
		$("#feedback").css("background-color", "#cc324b");
	})
}

var randomNumber = (1 + Math.floor(Math.random() * 100));
// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function () {
	handleInstructionsModal();
	recieveInput();
	newGame();
});