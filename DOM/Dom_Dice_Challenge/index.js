// dice1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var attribute1 = "./images/dice"+randomNumber1+".png";

// dice2 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var attribute2 = "./images/dice"+randomNumber2+".png";

// change image 1 
var diceImage1 = document.querySelectorAll("img")[0];
diceImage1.setAttribute("src" , attribute1);

var diceImage2 = document.querySelectorAll("img")[1];
diceImage2.setAttribute("src",attribute2);


// decision
var heading =  document.querySelector("h1");
if(randomNumber1>randomNumber2){
    heading.innerHTML = "Player 1 wins !";
}else if(randomNumber1<randomNumber2){
    heading.innerHTML = "Player 2 wins !";
}else{
    heading.innerHTML = "Draw";
}

