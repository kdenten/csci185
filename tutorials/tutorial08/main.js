function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged(){
    const color = document.querySelector("#color").value;
    const size = document.querySelector("#size").value;
    const shape = document.querySelector("#shape").value;
    const outlineWidth = document.querySelector("#outlineWidth").value;
    const outlineColor = document.querySelector("#outlineColor").value;
    
    fill(color);
    stroke(outlineColor);
    strokeWeight(outlineWidth);

    if (shape === "circle") {
        circle(mouseX, mouseY, size); 
    } 
    
    else if (shape === "square") {
        square(mouseX, mouseY, size);
    }

     else  {
        const r = size / 2
            triangle(
                mouseX, mouseY - r,  // first point
                mouseX - r, mouseY + r,  // second point
                mouseX + r, mouseY + r,   // third point
            )
            }
}



/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/