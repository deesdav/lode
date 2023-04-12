const lod0 = document.getElementById("lod0");
const lod1 = document.getElementById("lod1");
const lod3 = document.getElementById("lod3");
const lod6 = document.getElementById("lod6");
const lod13 = document.getElementById("lod13");
const lod20 = document.getElementById("lod20");
const lod24 = document.getElementById("lod24");
const lod25 = document.getElementById("lod25");
const lod30 = document.getElementById("lod30");
const lod36 = document.getElementById("lod36");
const lod40 = document.getElementById("lod40");
const lod43 = document.getElementById("lod43");
const lod52 = document.getElementById("lod52");
const lod63 = document.getElementById("lod63");
const lod64 = document.getElementById("lod64");


const n00 = document.getElementById("00");
const n01 = document.getElementById("01");
const n03 = document.getElementById("03");
const n06 = document.getElementById("06");
const n13 = document.getElementById("13");
const n20 = document.getElementById("20");
const n24 = document.getElementById("24");
const n25 = document.getElementById("25");
const n30 = document.getElementById("30");
const n36 = document.getElementById("36");
const n40 = document.getElementById("40");
const n43 = document.getElementById("43");
const n52 = document.getElementById("52");
const n63 = document.getElementById("63");
const n64 = document.getElementById("64");

const score = document.getElementById("score");
const timer = document.getElementById("timer");
const paragraph = document.getElementById("paragraph");
const gameArea = document.getElementById("gameArea");
const grid = document.getElementById("grid");
const start = document.getElementById("start");
const doubleclick = document.getElementById("doubleclick");
const infoBox = document.getElementById("info-box");
const play = document.getElementById("play");
const scoreText = document.getElementById("scoreText");
const timerText = document.getElementById("timerText");
const audio = document.getElementById("audio");
const headline = document.getElementById("headline");
const numbers = document.getElementById("numbers");
const letters = document.getElementById("letters");




play.onclick = () => {
    const myTimer = setInterval(() => {
        timer.innerHTML--;
        if (timer.innerHTML == 0) {
            paragraph.innerHTML = `${"you lost"}`;
            paragraph.style.display = "flex";
            paragraph.style.textDecorationColor = "red";
            gameArea.style.display = "none";
            infoBox.style.display = "none";
            audio.pause();
            audio.currentTime = 0;
        }
        if (score.innerHTML == 75) {
            paragraph.innerHTML = `${"you won"}`;
            paragraph.style.display = "flex";
            paragraph.style.textDecorationColor = "#00FFFF";
            gameArea.style.display = "none";
            infoBox.style.display = "none";
            clearInterval(timer);
            audio.pause();
            audio.currentTime = 0;
        }
        if (timer.innerHTML <= 10) {
            timer.style.color = "red";
        } else {
            timer.style.color = "black";
        }
    }, 1000);
    play.style.display = "none";
    grid.style.display = "block";
    start.style.display = "block";
    scoreText.style.display = "block";
    timerText.style.display = "block";
    infoBox.style.display = "flex";
    headline.style.fontSize = "50px";
    audio.play();

    changeColor();
}


n00.onclick = () => {
    lod0.style.display = "block";
    start.style.display = "none";
    doubleclick.style.display = "none";
    n00.style.borderColor = "red";
    score.style.color = "gold";
    score.style.textShadow = "3px 3px 1px black, 5px 5px 1px rgba(255,255,255,0.3)";
    if (score.innerHTML == 0) {
        score.innerHTML = 5;
       
    }
}
n01.onclick = () => {
    if (score.innerHTML >= 5 && score.innerHTML <=10){
        score.innerHTML = 10;
        lod1.style.display = "block";
    n01.style.borderColor = "red";
    }
    
}
n03.onclick = () => {
    if (score.innerHTML >= 10 && score.innerHTML <=10) {
        score.innerHTML =  15;
       
    lod3.style.display = "block";
    n03.style.borderColor = "red";
    }
}
n06.onclick = () => {
    if (score.innerHTML >= 15 && score.innerHTML <=20){
        score.innerHTML =  20;
        
        lod6.style.display = "block";
        n06.style.borderColor = "red";
    }

}
n13.onclick = () => {
    if (score.innerHTML >= 20 && score.innerHTML <=25) {
        score.innerHTML =  25;
       
        lod13.style.display = "block";
        n13.style.borderColor = "red";
    }
   
}

n20.onclick = () => {
    if (score.innerHTML >= 25 && score.innerHTML <=30){
        score.innerHTML =  30;
        
        lod20.style.display = "block";
        n20.style.borderColor = "red";
    }
   
}
n24.onclick = () => {
    if (score.innerHTML >= 30 && score.innerHTML <=35) {
        score.innerHTML =  35;
       
        lod24.style.display = "block";
        n24.style.borderColor = "red";
    }
   
}
n25.onclick = () => {
    if (score.innerHTML >= 35 && score.innerHTML <=40){
        score.innerHTML =  40;
        
        lod25.style.display = "block";
        n25.style.borderColor = "red";
    }
   
}
n30.onclick = () => {
    if (score.innerHTML >= 40 && score.innerHTML <=45) {
        score.innerHTML =  45;
       
        lod30.style.display = "block";
        n30.style.borderColor = "red";
    }
   
}
n36.onclick = () => {
    if (score.innerHTML >= 45 && score.innerHTML <=50){
        score.innerHTML =  50;
        
        lod36.style.display = "block";
        n36.style.borderColor = "red";
    }
  
}
n40.onclick = () => {
    if (score.innerHTML >= 50 && score.innerHTML <=55) {
        score.innerHTML =  55;
       
        lod40.style.display = "block";
        n40.style.borderColor = "red";
    }
  
}
n43.onclick = () => {
    if (score.innerHTML >= 55 && score.innerHTML <=60){
        score.innerHTML =  60;
        
        lod43.style.display = "block";
    n43.style.borderColor = "red";
    }
    
}
n52.onclick = () => {
    if (score.innerHTML >= 60 && score.innerHTML <=65) {
        score.innerHTML = 65;
       
        lod52.style.display = "block";
        n52.style.borderColor = "red";
    }
 
}
n63.onclick = () => {
    if (score.innerHTML >= 65 && score.innerHTML <=70){
        score.innerHTML =  70;
        
        lod63.style.display = "block";
        n63.style.borderColor = "red";
    }

}
n64.onclick = () => {
    if (score.innerHTML >= 70 && score.innerHTML <= 75) {
        score.innerHTML =  75;
       
        lod64.style.display = "block";
        n64.style.borderColor = "red";
    }
   
    if (score.innerHTML == 75) {
        paragraph.innerHTML = `${"you won"}`;
        paragraph.style.display = "flex";
        paragraph.style.textDecorationColor = "#00FFFF";
        gameArea.style.display = "none";
        infoBox.style.display = "none";
        clearInterval(timer);
        audio.pause();
        audio.currentTime = 0;
    }
}
paragraph.onclick = () => {
    window.location.reload();
}



