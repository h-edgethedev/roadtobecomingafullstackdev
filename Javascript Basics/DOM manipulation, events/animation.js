const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
    [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
    {
        duration: 5000, // Animation lasts 5 seconds
        // iterations: Infinity, // Loops indefinitely
        direction: "alternate", // Moves back and forth
        easing: "ease-in-out" // Smooth easing function
    }
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
    console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
    animation.play();
    console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
    animation.pause();
    console.log("You pause the animation");
});
// const textCanvas = document.getElementById("my-text-canvas");

// const textCanvasCtx = textCanvas.getContext("2d");

// // Set font family and size
// textCanvasCtx.font = "30px Arial";

// // Set text color
// textCanvasCtx.fillStyle = "crimson";

// // Draw the text
// textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);

const dialog = document.getElementById("modal")
const openButton = document.getElementById("open-modal-btn")

openButton.addEventListener("click", () => dialog.showModal())

const closeButton = document.getElementById("close-modal-btn")
closeButton.addEventListener("click", () => {
    dialog.close()
})

