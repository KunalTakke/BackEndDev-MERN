
var buttonColors = ["red","blue","green","yellow"] // array of colors

var gamePattern = [] // appending the color pattern for the game 
var userClickedPattern = [] // appending the color pattern chosen by the user
var level = 0; // defining level
var first = true; 

$(document).on("keydown", function (){ // used to detect keypress for the first time
    if(first){
        nextSequence();
        $("h1").text("Level "+level)
    }
    first = false;
});

$(".btn").on("click",function (e){ // click function 
    console.log("You clicked a button with color "+e.target.id);
    console.log("gamePattern is "+gamePattern);
    var userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    // call check answer
    checkAnswer(userClickedPattern.length-1);
    console.log("called checkAnser");
});

function checkAnswer(currentLevel){ // check if the most recent answer is same as the gamePattern recent answer

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("Success");
        
        if(userClickedPattern.length === gamePattern.length){
            console.log("Sequence Match");
            console.log("Calling nextSequence");
            setTimeout(function (){
                nextSequence();
            },1000);    
        }
    }else{
        console.log("wrong");
        // play wrong audio sound
        var wrongAudio = new Audio("./sounds/wrong.mp3");
        wrongAudio.play();

        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();

        if(userClickedPattern.length == gamePattern.length){
            console.log("Sequence Finished");
        }else{
            console.log("Seq not finished");
        }
    }
}
// generate a random number from 0 to 3
function nextSequence(){
    userClickedPattern = []; // reinitilize the game
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber]; // Choosing random color
    gamePattern.push(randomChosenColour); // appending random chosen color into gamePattern array 

    // animating the button on selection 
    var randColor = $("#"+randomChosenColour);

    randColor.fadeOut(200);
    randColor.fadeIn(200);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
}


function playSound(name){ // plays sound for both click and while generating a random color 
    var btnClicked = new Audio("./sounds/"+name+".mp3");  
    btnClicked.play();
    // animatePress(name);
}


function animatePress(currentColor){ // function used to add .pressed class and remove it in order to render an animated functionality
    $("#"+currentColor).addClass("pressed");
        setTimeout(function (){
            $("#"+currentColor).removeClass("pressed");
        },100);
}

$("h1").text("Press A Key to Start"); // starting message



function startOver(){
    level = 0;
    gamePattern = [];
    first = true;
    // nextSequence();
}
