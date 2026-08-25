// HTML: <p id="text">Original text</p>
const paragraph = document.getElementById("text");

if (paragraph) {
  paragraph.textContent = "The content has been updated!";
  paragraph.style.color = "blue";
}
