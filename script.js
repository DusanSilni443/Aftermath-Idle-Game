// This goes inside your <script.js> or wherever your JS logic is
window.onload = function() {
    let people = 0;
    let food = 5;
    let water = 7;
    let logs = 0;
    let firewood = 0;

    function updateDisplay() {
        document.getElementById("people").textContent = people;
        document.getElementById("food").textContent = Math.floor(food);
        document.getElementById("water").textContent = Math.floor(water);
        document.getElementById("logs").textContent = Math.floor(logs);
        document.getElementById("firewood").textContent = Math.floor(firewood);
    }

    function clampResources() {
    if (food < 0) food = 0;
    if (water < 0) water = 0;
    if (logs < 0) logs = 0;
    if (firewood < 0) firewood = 0;
    if (people < 0) people = 0;
    }

    // Resource action: Hunt
    function hunt() {
        food += 1;
        clampResources();
        updateDisplay();
    }

    function collectWater() {
        water += 1;
        clampResources();
        updateDisplay();
    }

    // Resource action: Chop Wood
    function chopWood() {
        logs += 1;
        clampResources();
        updateDisplay();
    }

    // Resource action: Chop Fire Wood
    function chopFireWood() {
        if (logs > 0) {
            firewood += 4;
            logs -= 1;
        } else {
            alert("You don't have any logs to chop!")
        }
        clampResources();
        updateDisplay();
    }

    // Link button
    document.getElementById("hunt").addEventListener("click", hunt)
    document.getElementById("collectWater").addEventListener("click", collectWater)
    document.getElementById("chopWood").addEventListener("click", chopWood);
    document.getElementById("chopFireWood").addEventListener("click", chopFireWood);

    updateDisplay(); // initialize display
};

// Switch to Change Log
document.getElementById("showChangelog").addEventListener("click", function() {
    document.getElementById("mainmenu").style.display = "none";
    document.getElementById("changelog").style.display = "block";
    document.getElementById("title").textContent = "Change Log";
});

// Switch back to Menu
document.getElementById("backToMenu").addEventListener("click", function() {
    document.getElementById("changelog").style.display = "none";
    document.getElementById("mainmenu").style.display = "block";
    document.getElementById("title").textContent = "Menu";
});

document.getElementById("backToMainMenu").addEventListener("click", function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("mainmenu").style.display = "block";
    document.getElementById("title").textContent = "Menu";
});

document.getElementById("showStartGame").addEventListener("click", function() {
    document.getElementById("mainmenu").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("title").textContent = "Game";
});
