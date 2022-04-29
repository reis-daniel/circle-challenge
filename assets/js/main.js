// Variablen
const container = document.getElementById("main");
const headline = document.getElementById("headline");
const circleHalfTop = document.querySelectorAll(".circle-half-top");
const circleHalfBottom = document.querySelectorAll(".circle-half-bottom");
const circles = document.querySelectorAll(".circle");
const circleList = [];
let position;

// Liste aller Kreise um eine Liste beider Halbkreise in der richtigen Reihenfolge zu erhalten.

circles.forEach(function (elem, i) {
  // Liste mit dem jeweiligen Gegenstück
  circleList.push([circleHalfTop[i], circleHalfBottom[i]]);

  // EventListener für Top-Row -> Bei changeColor() zieht er sich die Farbe des angeklickten Halbkreises und des jeweiligen Halbkreises der Bottom-Row.
  // Die Farben werden dem Main-Container und der Headline zugewiesen.

  circleHalfTop[i].addEventListener("click", function changeColor() {
    position = i;
    const bgStyle = getComputedStyle(circleList[i][0]).backgroundColor;
    container.style.backgroundColor = bgStyle;
    const fontStyle = getComputedStyle(circleList[i][1]).backgroundColor;
    headline.style.color = fontStyle;
  });

  // Gegenstück für die Bottom-Row.

  circleHalfBottom[i].addEventListener("click", function changeColor() {
    position = i;
    const bgStyle = getComputedStyle(circleList[i][1]).backgroundColor;
    container.style.backgroundColor = bgStyle;
    const fontStyle = getComputedStyle(circleList[i][0]).backgroundColor;
    headline.style.color = fontStyle;
  });
});
