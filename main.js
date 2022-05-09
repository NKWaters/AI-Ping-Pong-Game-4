rightWristX = "";
rightWristY = "";
scoreRightWrist = "";

function setup() {
    canvas = createCanvas(480, 380)
    canvas.center();
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
   image(video, 0, 0, 480, 380);

   if(scoreRightWrist > 0.2) {
       fill("#FF0000");
       stroke("#FF0000");
       circle(rightWristX, rightWristY, 30);
   }
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results) {
    if(results.length > 0) {
       rightWristX = results[0].pose.rightWrist.x;
       rightWristY = results[0].pose.rightWrist.y;
       scoreRightWrist = results[0].pose.keypoints[10].score;
    }
}