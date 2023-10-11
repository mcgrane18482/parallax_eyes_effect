// HTML Elements
const pupilsEl = document.getElementsByClassName('pupil')

// Input Setup - This tracks how far the mouse can move within the window
let input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// Output Setup - This determines how the pupils move. The range is much smaller because I want the pupil elements to move only within the eyeballs
let output = {
    x: {
        start: -75,
        end: 75,
        current: 0
    },
    y: {
        start: -75,
        end: 75,
        current: 0
    },
};

// Determine range for x and y axis
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

function handleMouseMove(event) {
    //   Mouse X Input
    input.mouseX.current = event.pageX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    // Mouse Y Input
    input.mouseY.current = event.pageY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    // Calculate how much the X and Y coordinates should change based on the current position of the mouse and add that to the output's starting position to determine how much the output should shift horizontally and vertically
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);

    // Apply output to pupil elements for horizontal and vertical movement
    for (const pupil of pupilsEl) {
        pupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`;
    }

    //   console.log('fraction X', input.mouseX.fraction)
    //   console.log('fraction Y', input.mouseY.fraction)
};

function handleResize() {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);