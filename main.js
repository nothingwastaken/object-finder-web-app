var stati = " ";
video = "";
objects = [];

function preload(){
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
}

function setup(){
    canvas = createCanvas(550, 400);
    canvas.center();
}

function draw(){
    image(video,0,0, 500, 400)
    console.log(stati);
    if (stati != " "){
        objectDetector.detect(video, gotResult);
        for (i=0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: object detected.";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected is: " + objects.length;

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function Start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
    x = document.getElementById('input').value;
    console.log(x);
}

function modelLoaded(){
    stati = true;
    console.log(stati);
    console.log("working");
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
}