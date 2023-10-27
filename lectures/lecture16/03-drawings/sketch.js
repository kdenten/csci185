function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    // fill("teal")
    // circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
    // fill('hotpink')
    // rect(30, 20, 55, 55);

    // fill('red')
    // circle(550, 150, 125)

    // fill('black')
    // circle(550, 150, 50)

    // fill('hotpink')
    // rect(50, 60, 20, 60)

    // fill('yellow')
    // line(100, 150, 200)

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve

    drawCreature(200, 300, 'yellow');
    drawCreature(400, 600, 'hotpink');
    drawCreature(30, 40, 'purple');
    drawCreature(56, 106, 'red');

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature(x, y, color) {
    fill(color);
    circle(x, y, 80);

    
}