
// Create a variable for anchor object
var page_2, page_3;
let bg;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage("./green_background.jpeg")
    // graph link
    page_2 = createA("./page_2/index.html","Wanna see a graph?", "_blank");     
    page_2.position(windowWidth/2 - 30, windowHeight/2);  

    // bubble link
    page_3 = createA("./page_3/index.html","Do you like circles?", "_blank");     
    page_3.position(windowWidth/2 - 30, windowHeight/2+20);   
}

function draw() {

    background(bg);
    // circle scope
    fill(255,255,255,0);
    ellipse(mouseX, mouseY, 40,40);

    fill(0);
    // vertical cross hair
    line(mouseX, mouseY + 20, mouseX, mouseY-20)
    
    // horizontal cross hair
    line(mouseX + 20, mouseY, mouseX - 20, mouseY)

}
