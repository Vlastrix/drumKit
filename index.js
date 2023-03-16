
// Normal function

// document.querySelector("button").addEventListener("click", handleClick)

// function handleClick() {
//     alert("I got clicked.");
// }

// Anonymous function, the same normal function but without the name.

// document.querySelector("button").addEventListener("click", function() {
//     alert("I got clicked.");
// })

//////////////////////////////////////////////////////

// My way of doing it (I don't even know how I did it)

// for (const button of document.querySelectorAll(".drum")) {
//     button.addEventListener("click", function() {
//         alert("I got clicked!");
//     })
// }

// Other way of doing it with a while loop

// var v = 0;
// while (v < 7) {
//     document.querySelectorAll(".drum")[v].addEventListener("click", function() {
//         alert("I got clicked!");
//     })
//     v++;
// }

// Function for checking what to play

function whatToPlay(key) {
    switch (key) {
        case "w":
            var tom1Audio = new Audio("sounds/tom-1.mp3");
            tom1Audio.play();
        break;
        case "a":
            var tom2Audio = new Audio("sounds/tom-2.mp3");
            tom2Audio.play();
        break;
        case "s":
            var tom3Audio = new Audio("sounds/tom-3.mp3");
            tom3Audio.play();
        break;
        case "d":
            var tom4Audio = new Audio("sounds/tom-4.mp3");
            tom4Audio.play();
        break;
        case "j":
            var snareAudio = new Audio("sounds/snare.mp3");
            snareAudio.play();
        break;
        case "k":
            var crashAudio = new Audio("sounds/crash.mp3");
           crashAudio.play();
        break;
        case "l":
            var kick2Audio = new Audio("sounds/kick-bass.mp3");
            kick2Audio.play();
        break;
    }
}

// Button Animation

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


// Detecting clicks from mouse to play sound.

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        const buttonClicked = this.textContent;
        whatToPlay(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

// Detecting Key Presses on keyboard to play sound.

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    whatToPlay(keyPressed);
    buttonAnimation(keyPressed);
});

