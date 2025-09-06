<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aftermath: Idle Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Main Menu</h1>
<div id="mainmenu">
    <button id="showChangelog">Change Log</button>
    <button id="showStartGame">Start Game</button>
    <h6>Game Version: Indev 0.0.2</h6>
    <h5>Game Developed by: Xen Researcher Dusan</h5>
</div>

<div id="game" style="display: none;">
    <button id="backToMainMenu">Back</button>
    <button id="saveBtn">Save</button>
    <button id="loadBtn">Load</button>
    <p>People: <span id="people">1</span></p>
    <p>Food: <span id="food">5</span></p>
    <button class="tooltip" id="hunt">
        Hunt
        <span class="tooltiptext">Gives 1 food per click.</span>
    </button>
    <p>Water: <span id="water">7</span></p>
    <button class="tooltip" id="collectWater">
        Collect Water
        <span class="tooltiptext">Gives 1 water per click.</span>
    </button>
    <p>Logs: <span id="logs">0</span></p>
    <button class="tooltip" id="chopWood">
        Chop Down Trees
        <span class="tooltiptext">Gives 1 wood per click.</span>
    </button>
    <p>Fire Wood: <span id="firewood">0</span></p>
    <button id="chopFireWood">Chop Logs into Fire Wood</button>
    <p>Tools: <span id="tools">0</span></p>
    <button class="tooltip" id="craftTools">
        Craft Tools
        <span class="tooltiptext">Crafts 1 tool per click.</span>
    </button>
    <p>CONSTRUCTION</p>
    <button id="constructionTab">Construction</button>
</div>

</div>

<div id="changelog" style="display: none;">
    <button id="backToMenu">Back</button>
    <h2>Change Log</h2>
    <ul>
        <li>MAJOR UPDATE-Indev:0.0.4 – Added Save/Load System, More Items, Fixed Buildings & Tools!</li>
        <li>Content Update-Indev:0.0.3 – Added Buildings and Tools To The Game!</li>
        <li>Content Update-Indev:0.0.2 – Added Actions To The Game!</li>
        <li>Minor Update-Indev:0.0.1 – Added The Change Log & More Buttons!</li>
        <li>STARTED DEVELOPMENT :P</li>
    </ul>
</div>

<div>
    <div id="constructionWindow" style="display:none;">
    <h2>Buildings</h2>
    <p>Build a house, a farm, or a workshop!</p>
    <button id="buyHouse">House: <span>0</span></button>
    <button id="buyFarm">Farm: <span>0</span></button>
    <button id="buyLumberYard">Lumber Yard: <span>0</span></button>
    <button id="backToGame">Back</button>
</div>
<script src="script.js"></script>
</body>
</html>
