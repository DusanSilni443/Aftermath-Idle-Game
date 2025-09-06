window.onload = function() {
    let people = 1;
    let maxPeople = 1;
    let happiness = 50;
    let authority = 100;
    let food = 15;
    let water = 7;
    let logs = 0;
    let stone = 0;
    let firewood = 0;
    let tools = 0;
    let hut = 0;
    let farm = 0;
    let lumberyard = 0;
    let quarry = 0;

    function updateDisplay() {
        document.getElementById("changelogText").textContent = changelog;
        document.getElementById("people").textContent = people;
        document.getElementById("happiness").textContent = Math.floor(happiness)
        document.getElementById("authority").textContent = Math.floor(authority)
        document.getElementById("maxPeople").textContent = maxPeople;
        document.getElementById("food").textContent = Math.floor(food);
        document.getElementById("water").textContent = Math.floor(water);
        document.getElementById("logs").textContent = Math.floor(logs);
        document.getElementById("stone").textContent = Math.floor(stone)
        document.getElementById("firewood").textContent = Math.floor(firewood);
        document.getElementById("tools").textContent = Math.floor(tools);
        document.getElementById("hut").textContent = hut;
        document.getElementById("farm").textContent = farm;
        document.getElementById("lumberyard").textContent = lumberyard;
        document.getElementById("quarry").textContent = quarry;
    }

    function clampResources() {
    if (happiness < 0) happiness = 0
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
    if (quarry < 0) quarry = 0;
    }

    function consumption(){
        food -= people
        firewood -= people
        clampResources();
        updateDisplay();
    }
    setInterval(consumption, 4000)

function updateMood() {
    if (food < 1 || firewood < 1) {
        happiness -= 0.1;
    } else {
        if (happiness < 100) happiness += 0.05;
    }

    if (happiness < 0) happiness = 0;
    if (happiness > 100) happiness = 100;

    if (happiness === 0) {
        authority -= 0.5;
    }

    if (authority < 0) authority = 0;
    if (authority > 100) authority = 100;

    updateDisplay();

    if (authority === 0) {
        gameOver();
    }
}
setInterval(updateMood, 100);

function gameOver() {
    alert("Your authority has collapsed! The settlement has fallen...");
    document.getElementById("game").style.display = "none";
    document.getElementById("mainmenu").style.display = "block";
    document.getElementById("title").textContent = "Game Over";
    clearInterval(moodInterval);
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

    function buildHut() {
        if (logs > 9) {
            logs -= 10;
            hut += 1;
            maxPeople += 1;
            updateDisplay();
        } else {
            alert("You don't have enough materials!(10 Logs needed.)");
        }
        clampResources();
        updateDisplay();
    }

    function buildFarm() {
        if (logs > 4 && tools > 9) {
            logs -= 5
            tools -= 10
            farm += 1
        } else {
            alert("You dont have enough materials!(5 Logs & 10 Tools.)")
        }
        clampResources();
        updateDisplay();
    }

    function buildLumberYard() {
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

    function buildQuarry() {
        if (logs > 14 && stone > 74 && tools > 14) {
            logs -= 15;
            stone -= 75;
            tools -= 15;
            quarry += 1;
        } else {
            alert("You don't have enough materials to build a Quarry!(15 Logs & 75 Stone)")
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

        function produceFood() {
    food += farm;
    clampResources();
    updateDisplay();
    }
    setInterval(produceFood, 1000);

    function randomImmigration() {
        const chance = Math.random();
        if (chance < 0.2 && people < maxPeople) {
            people += 1;
            updateDisplay();
            alert("A new settler has arrived!");
        }
    }
    setInterval(randomImmigration, 20000);

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
        well: well,
        lumberyard: lumberyard,
        quarry: quarry,
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
            well = savedData.well,
            lumberyard = savedData.lumberyard;
            quarry = savedData.quarry;
            updateDisplay();
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
    document.getElementById("buildHut").addEventListener("click", buildHut);
    document.getElementById("buildFarm").addEventListener("click", buildFarm);
    document.getElementById("buildWell").addEventListener("click", buildWell);
    document.getElementById("buildLumberYard").addEventListener("click", buildLumberYard);
    document.getElementById("buildQuarry").addEventListener("click", buildQuarry);
    document.getElementById("saveBtn").addEventListener("click", saveGame);
    document.getElementById("loadBtn").addEventListener("click", loadGame);

    updateDisplay();
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
// Switch back to Menu
document.getElementById("backToMainMenu").addEventListener("click", function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("mainmenu").style.display = "block";
    document.getElementById("title").textContent = "Menu";
});
// Switch to Game
document.getElementById("showStartGame").addEventListener("click", function() {
    document.getElementById("mainmenu").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("title").textContent = "Game";
});
// Switch to Construction
document.getElementById("constructionTab").addEventListener("click", function() {
    document.getElementById("game").style.display = "none";
    document.getElementById("constructionWindow").style.display = "block";
    document.getElementById("title").textContent = "Construction";
});
//Switch back to Game
document.getElementById("backToGame").addEventListener("click", function() {
    document.getElementById("constructionWindow").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("title").textContent = "Game";
});

const changelog = `
MAJOR UPDATE-Indev:0.0.5 | 7.9.2025
-------------------
 ADDED:
-Settler, Happiness, Authority & Food Systems.
People Now Come To Your Settlement If You Have Space And Require Food To Not Be Upset.
If Happiness is 0 You Loose Authority And Lose The Game.
-Research(Scrapped for a future update)
-Transport(Scrapped for a future update)
-More Buildings: Quarry & Well

Content/Bug Fix Update-Indev:0.0.4 | 6.9.2025
--------------------
 ADDED:
-Save/Load System.
-More Items: Stone.
-Fixed Buildings & Tools.

Content Update-Indev:0.0.3 | 6.9.2025
--------------------
 ADDED:
-Buildings: Hut, Farm & Lumber yard.
-New Resource: Tools.

Content Update-Indev:0.0.2 | 6.9.2025
--------------------
 ADDED:
-Actions To The Game.

QoL Update - Indev:0.0.1 | 5.9.2025
--------------------
 ADDED:
-Change Log.
-More Buttons.
-More logic.

DEVELOPMENT STARTED: 5.9.2025
`;
