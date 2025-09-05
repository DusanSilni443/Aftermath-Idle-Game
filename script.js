
// Switch to Change Log
document.getElementById("showChangelog").addEventListener("click", function() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("changelog").style.display = "block";
    document.getElementById("title").textContent = "Change Log";
});

// Switch back to Menu
document.getElementById("backToMenu").addEventListener("click", function() {
    document.getElementById("changelog").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("title").textContent = "Menu";
});

document.getElementById("backToMainMenu").addEventListener("click", function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("title").textContent = "Menu";
});

document.getElementById("showStartGame").addEventListener("click", function() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("title").textContent = "Game";
});
