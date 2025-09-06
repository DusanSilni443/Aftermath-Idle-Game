window.onload = function() {
    let people = 1;
    let food = 5;
    let water = 7;
    let logs = 0;
    let stone = 0;
    let firewood = 0;
    let tools = 0;
    let hut = 0;
    let farm = 0;
    let lumberyard = 0;

    function updateDisplay() {
        document.getElementById("people").textContent = people;
        document.getElementById("food").textContent = Math.floor(food);
        document.getElementById("water").textContent = Math.floor(water);
        document.getElementById("logs").textContent = Math.floor(logs);
        document.getElementById("stone").textContent = Math.floor(stone)
        document.getElementById("firewood").textContent = Math.floor(firewood);
        document.getElementById("tools").textContent = Math.floor(tools)
        document.getElementById("hut").textContent = hut
        document.getElementById("farm").textContent = farm
        document.getElementById("lumberyard").textContent = lumberyard
    }

    function clampResources() {
    if (food < 0) food = 0;
    if (water < 0) water = 0;
    if (logs < 0) logs = 0;
    if (stone < 0) stone = 0;
    if (firewood < 0) firewood = 0;
    if (tools < 0) tools = 0;
    if (people < 0) people = 0;
    if (hut < 0) hut = 0;
    if (farm < 0) farm = 0;
    if (lumberyard < 0) lumberyard = 0;
    }

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

    function chopWood() {
        logs += 1;
        clampResources();
        updateDisplay();
    }

    function collectStone() {
        stone += 1;
        clampResources();
        updateDisplay();
    }

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

    function craftTools() {
        if (logs > 0 && stone > 1) {
            logs -= 1;
            stone -= 2;
            tools += 1;
        } else {
            alert("You don't have enough materials!(1 Log & 2 Stone needed.)")
        }
        clampResources();
        updateDisplay();
    }

    function buyLumberYard() {
        if (logs > 39 && tools > 9) {
            logs -= 40;
            tools -= 10;
            lumberyard += 1;
        } else {
            alert("You dont have enough materials to build a Lumber Yard!(40 Logs & 10 Tools needed)")
        }
        clampResources();
        updateDisplay();
    }

    function produceLogs() {
    logs += lumberyard;
    clampResources();
    updateDisplay();
    }
    setInterval(produceLogs, 1000);

    function saveGame() {
    const gameData = {
        people: people,
        food: food,
        logs: logs,
        stone: stone,
        firewood: firewood,
        tools: tools,
        hut: hut,
        farm: farm,
        lumberyard: lumberyard,
    };
    localStorage.setItem('aftermathSave', JSON.stringify(gameData));
    alert("Game saved!");
    }

    function loadGame() {
        const savedData = JSON.parse(localStorage.getItem('aftermathSave'));
        if (savedData) {
            people = savedData.people;
            food = savedData.food;
            logs = savedData.logs;
            stone = savedData.stone;
            firewood = savedData.firewood;
            tools = savedData.tools;
            hut = savedData.hut;
            farm = savedData.farm;
            lumberyard = savedData.lumberyard;
            updateDisplay(); // refresh stats
            alert("Game loaded!");
        } else {
            alert("No save found!");
        }
    }

    // Link button
    document.getElementById("hunt").addEventListener("click", hunt);
    document.getElementById("collectWater").addEventListener("click", collectWater);
    document.getElementById("chopWood").addEventListener("click", chopWood);
    document.getElementById("collectStone").addEventListener("click", collectStone);
    document.getElementById("chopFireWood").addEventListener("click", chopFireWood);
    document.getElementById("craftTools").addEventListener("click", craftTools);
    document.getElementById("buyLumberYard").addEventListener("click", buyLumberYard);
    document.getElementById("saveBtn").addEventListener("click", saveGame);
    document.getElementById("loadBtn").addEventListener("click", loadGame);

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

document.getElementById("constructionTab").addEventListener("click", function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("constructionWindow").style.display = "block";
    document.getElementById("title").textContent = "Construction";
});

document.getElementById("backToGame").addEventListener("click", function() {
    document.getElementById("constructionWindow").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("title").textContent = "Game";
});
