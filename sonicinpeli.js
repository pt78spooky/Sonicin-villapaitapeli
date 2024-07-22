const canvas = document.querySelector("#gameCanvas");
const ctx = canvas.getContext("2d");
var video = document.getElementById("video");

var gameState = "start";

video.addEventListener("play", () => {
    function step() {
      ctx.drawImage(video, -116.5, 0, 933, canvas.height);
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

function changeValues1(){
    if(gameState == "lose" || gameState == "win"){
        document.getElementById("image").src = "startscreen.png";
        document.getElementById("button1").coords = "400,220,641,323";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "start";
    }
    else if(gameState == "play"){
        document.getElementById("image").src = "losescreen.png";
        document.getElementById("button1").coords = "326,336,685,419";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "lose";
    }
    else if(gameState == "animation"){
        document.getElementById("image").src = "winscreen.png";
        document.getElementById("button1").coords = "382,370,682,439";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "win";
    }
    else if(gameState == "start"){
        document.getElementById("image").src = "playscreen.png";
        document.getElementById("button1").coords = "409,225,552,308";
        document.getElementById("button2").coords = "390,340,586,443";
        gameState = "play";
    }
}
function changeValues2(){
    if(gameState == "play"){
        document.getElementById("image").src = "";
        document.getElementById("button1").coords = "0,0,0,0";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "animation";
        document.getElementById("gameCanvas").style.visibility = "visible";
        video.play();
        video.onended = function (e) {
            document.getElementById("gameCanvas").style.visibility = "hidden";
            changeValues1();
        }
    }
}
