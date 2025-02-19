// array of colors
buttonColors = ["red","blue","green","yellow"] 

gamePattern = [] // appending the color pattern for the game 
userClickedPattern = [] // appending the color pattern for the user


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    // animating the button on selection 
    var randColor = $("#"+randomChosenColour);

    randColor.fadeOut(200);
    randColor.fadeIn(200);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
}

$(".btn").on("click",function (e){
    var userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});

function playSound(name){
    var btnClicked = new Audio("./sounds/"+name+".mp3");  
    btnClicked.play();
}


function animatePress(currentColor){
    $(".btn").on("click",function (e){
        e.addClass("pressed");
        
    })
}
$(".btn").on("click",function (e){
    $(e.target).addClass("pressed");
    setTimeout(function (){
        $(e.target).removeClass("pressed");
    },100)
    
})


$("h1").text("Press A Key to Start"); // starting message
var level = 0;
$(document).on("keydown", function (){
    nextSequence();
   
});
userClickedPattern.length-1; // last index of user clicked pattern
function checkAnswer(currentLevel){
    
}
