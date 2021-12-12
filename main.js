x=0;
y=0;

function preload(){
    mustache = loadImage("https://i.postimg.cc/qvFYqvqd/m-1.png");
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized!');
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        console.log("nose x= " + x);
        console.log("nose y= " + y);
    }
}

function draw(){
    image(video , 0, 0 ,300 ,300);
    image(mustache , x-25 , y-4 , 50 ,35);
}

function takeSnapshot() {
    save("image.png");
}