// Input Setup
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

// Output Setup
let output = {
    x: {
        start: -100,
        end: 100,
        current: 0,
    },
    y: {},
};

output.x.range = output.x.end - output.x.start;

function handleMouseMove(event) {
    //   Mouse X Input
    input.mouseX.current = event.pageX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    // Mouse Y Input
    input.mouseY.current = event.pageY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
    //   Calculate how much the X coordinate should change based on the current position of the mouse and add that to the output's starting position to determine how much the output should shift horizontally
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);

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