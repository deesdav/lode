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
const paragraph = document.getElementById("paragraph");
const gameArea = document.getElementById("gameArea");

n00.onclick = () => {
    lod0.style.display = "block";
    n00.style.borderColor = "red";
    if (score.innerHTML == 0) {
        score.innerHTML++;
    }
}
n01.onclick = () => {
    if (score.innerHTML == 1) {
        lod1.style.display = "block";
        n01.style.borderColor = "red";

        score.innerHTML++;
    }
}
n03.onclick = () => {
    if (score.innerHTML == 2) {
        lod3.style.display = "block";
        n03.style.borderColor = "red";

        score.innerHTML++;
    }
}
n06.onclick = () => {
    if (score.innerHTML == 3) {
        lod6.style.display = "block";
        n06.style.borderColor = "red";

        score.innerHTML++;
    }
}
n13.onclick = () => {
    if (score.innerHTML == 4) {
        lod13.style.display = "block";
        n13.style.borderColor = "red";

        score.innerHTML++;
    }
}

n20.onclick = () => {
    if (score.innerHTML == 5) {
        lod20.style.display = "block";
        n20.style.borderColor = "red";

        score.innerHTML++;
    }
}
n24.onclick = () => {
    if (score.innerHTML == 6) {
        lod24.style.display = "block";
        n24.style.borderColor = "red";

        score.innerHTML++;
    }
}
n25.onclick = () => {
    if (score.innerHTML == 7) {
        lod25.style.display = "block";
        n25.style.borderColor = "red";

        score.innerHTML++;
    }
}
n30.onclick = () => {
    if (score.innerHTML == 8) {
        lod30.style.display = "block";
        n30.style.borderColor = "red";

        score.innerHTML++;
    }
}
n36.onclick = () => {
    if (score.innerHTML == 9) {
        lod36.style.display = "block";
        n36.style.borderColor = "red";

        score.innerHTML++;
    }
}
n40.onclick = () => {
    if (score.innerHTML == 10) {
        lod40.style.display = "block";
        n40.style.borderColor = "red";

        score.innerHTML++;
    }
}
n43.onclick = () => {
    if (score.innerHTML == 11) {
        lod43.style.display = "block";
        n43.style.borderColor = "red";

        score.innerHTML++;
    }
}
n52.onclick = () => {
    if (score.innerHTML == 12) {
        lod52.style.display = "block";
        n52.style.borderColor = "red";

        score.innerHTML++;
    }
}
n63.onclick = () => {
    if (score.innerHTML == 13) {
        lod63.style.display = "block";
        n63.style.borderColor = "red";

        score.innerHTML++;
    }
}
n64.onclick = () => {
    if (score.innerHTML == 14) {
        lod64.style.display = "block";
        n64.style.borderColor = "red";

        score.innerHTML++;
    }

    if (score.innerHTML == 15) {
        paragraph.innerHTML = `${"you won"}`;
        paragraph.style.display = "flex";
        gameArea.style.display = "none";

    }
}
paragraph.onclick = () => {
    window.location.reload();
}



