status = ""
video = ""

function preload(){
    video = createCapture(VIDEO);
    video.size(600,400);
    video.hide();
}

function setup(){
    canvas = createCanvas(550, 400);
    canvas.center();
}

function draw(){
    image(video,0,0, 550, 400)
}

function Start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    x = document.getElementById('input').value;
    console.log(x);
}

function modelLoaded(){
    status = true;
    console.log("working");
}