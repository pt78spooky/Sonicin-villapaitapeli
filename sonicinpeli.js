var gameState = "start"

function changeValues1(){
    console.log("click1!");
    if(gameState == "lose"){
        document.getElementById("image").src = "startscreen.png";
        document.getElementById("button1").coords = "400,220,641,323";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "start";
    }
    else if(gameState == "win"){
        document.getElementById("image").src = "startscreen.png";
        document.getElementById("button1").coords = "400,220,641,323";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "start";
    }
    else if(gameState == "play"){
        console.log("HALOO?");
        document.getElementById("image").src = "losescreen.png";
        document.getElementById("button1").coords = "326,336,685,419";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "lose";
    }
    else if(gameState == "animation"){
        
    }
    else if(gameState == "start"){
        document.getElementById("image").src = "playscreen.png";
        document.getElementById("button1").coords = "409,225,552,308";
        document.getElementById("button2").coords = "390,340,586,443";
        gameState = "play";
    }
}
function changeValues2(){
    console.log("click2!");
    if(gameState == "play"){
        document.getElementById("image").src = "winscreen.png";
        document.getElementById("button1").coords = "382,370,682,439";
        document.getElementById("button2").coords = "0,0,0,0";
        gameState = "win";
    }
}
