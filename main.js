function setup()
{
    canvas = createCanvas(550, 550)
    canvas.position( 560, 150 )
    
    video = createCapture(VIDEO)
    video.size(550,500)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw()
{
    background(255, 255, 255)
}

function modelLoaded()
{
    console.log("PoseNet model is loaded")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}