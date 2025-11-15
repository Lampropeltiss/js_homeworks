const textArea = document.getElementById("editor");
textArea.value = localStorage.getItem("savedText");

textArea.focus();
textArea.oninput = () => {
    localStorage.setItem("savedText", textArea.value);
}