canvas = "";



function setup(){
    canvas  = createCanvas(500,400);
    canvas.center();
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw (){
    image(img,0,0,500,400);
    fill("red");
    text("DOG",100,60);
    noFill();
    stroke("blue");
    rect(90,40,200,350);
    text("CAT",260,120);
    noFill();
    stroke("blue");
    rect(250,100,200,300);

}