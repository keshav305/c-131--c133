img = "";
status = "";
object=[];
function preload() {
    img = loadImage('dog_cat.jpg')
}
function modelloaded() {
    console.log("modelloaded");
    status = true;
    objectDetector.detect(img, gotResult)
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results)
    object =results; 
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : object Detector ";
}
function draw() {
    image(img,0,0,640,424);
    if(status !=""){
        for(i = 0;i<object.length;i++){
            document.getElementById("status").innerHTML = "Status : object Detector ";
            
            fill('#FF0000')
            percent = floor(object[i].confidence *100)
            text(object[i].label +""+percent +"%",object[i].x,object[i].y);
            noFill();
            stroke('#FF0000');
            rect(object[i].x -90,object[i].y -20,object[i].width,object[i].height)
        }
    }
}

