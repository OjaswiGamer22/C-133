st="";
objects= [];

function preload(){
img=loadImage("max.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd", ModelLoaded);
document.getElementById("heading").innerHTML="Status:  Detecting Objects";
}
function ModelLoaded(){
st=true;
console.log("Model Loaded");
objectdetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
objects=results;
}

function draw(){
image(img,0,0,640,420);
if(st!=""){
    for(i=0;i <objects.length;i++){
        document.getElementById("heading").innerHTML="Status:  Object Detected";
        fill("red");
        percent=floor((objects[i].confidence)*100);
        text(objects[i].label+"    "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}