// function to use sound files according to the key pressed or button clicked
function makeSound(key){
    switch(key){
        case 'w':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case 'a':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case 's':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case 'd':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        case 'j':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case 'k':
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;

        case 'l':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        default:
            console.log(key);
        break;

    }

}
// look for click event 
var btn = document.querySelectorAll(".drum");
for(var i = 0;i<btn.length;i++){
    btn[i].addEventListener("click",function (){ // anonymous function
            
        var btnName = this.innerHTML;
        makeSound(btnName);        
        addAnimation(btnName);
    });
}


// look for keypress
document.addEventListener("keydown",function(eventPress){
    makeSound(eventPress.key);
    addAnimation(eventPress.key);
});

// animating keypress
function addAnimation(passedBtn){
    var gotcha = document.querySelector("."+passedBtn);
    gotcha.classList.add("pressed");

    setTimeout(function (){
        gotcha.classList.remove("pressed");
    }, 100);
    
}