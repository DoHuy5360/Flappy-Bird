import { Canvas } from "./Canvas.js";
import { BirdE } from "./entities/obstruction/BirdE.js";
import { GroundE } from "./entities/obstruction/GroundE.js";
import { PipeE } from "./entities/obstruction/PipeE.js";
import { PlantE } from "./entities/obstruction/PlantE.js";
import { ScoreE } from "./entities/widget/ScoreE.js";
import { ControllE } from "./entities/widget/ControllE.js";
import { GameLobby } from "./entities/widget/GameLobby.js";
import { PlayGame } from "./entities/widget/actions/PlayGame.js";
import { SettingGame } from "./entities/widget/actions/SettingGame.js";
import { GameStatus } from "./entities/widget/GameStatus.js";
import { GameOver } from "./entities/widget/GameOver.js";
import { Game } from "./entities/widget/Game.js";
import { ObstructionE } from "./entities/widget/ObstructionE.js";
import { GameEvent } from "./entities/widget/GameEvent.js";
import { GameSetting } from "./entities/widget/GameSetting.js";
import { SaveSetting } from "./entities/widget/actions/SaveSetting.js";
const gameOverE = new GameOver(document.querySelector(".game_over"));
const groundE = new GroundE(document.querySelectorAll(".ground"), 30);
const canvas = new Canvas(document.getElementById("gameCanvas"), window.innerWidth, window.innerHeight - groundE.getHeight());
const birdE = new BirdE(canvas);
const bird = birdE.getBird();
const controllE = new ControllE();
const scoreE = new ScoreE(document.querySelector(".score"), 0);
const gameStatusE = new GameStatus(false, gameOverE, scoreE, canvas, bird, groundE);
const pipeE = new PipeE(canvas);
const plantE = new PlantE(canvas, groundE.getHeight());
const gameLobby = document.querySelector(".game_lobby");
const obstructionE = new ObstructionE(pipeE, plantE);
const gameE = new Game(canvas, bird, scoreE, gameStatusE, obstructionE.getOstruction());
const gameEventE = new GameEvent(controllE, gameStatusE, obstructionE, gameE, bird);
const gameLobbyE = new GameLobby(document.querySelector(".game_lobby"));
const gameSettingE = new GameSetting(document.querySelector(".game_setting"));
const playGameBtn = new PlayGame(document.querySelector(".start_game"), gameLobbyE, obstructionE, gameE, gameEventE);
playGameBtn.apply();
const settingGameBtn = new SettingGame(document.querySelector(".setting_game"), gameLobbyE, gameSettingE);
settingGameBtn.apply();
const saveSettingBtn = new SaveSetting(document.querySelector(".setting_save"), gameLobbyE, gameSettingE);
saveSettingBtn.apply();
const optionDoms = document.querySelectorAll(".setting_option_choice");
optionDoms.forEach((opt) => {
    opt.addEventListener("keydown", (e) => {
        e.preventDefault();
        const event = e;
        const dom = e.target;
        dom.value = event.key;
        switch (dom.getAttribute("data-action")) {
            case controllE.getJumpKey().getName():
                controllE.getJumpKey().setKey(event.key);
                break;
            default:
                break;
        }
    });
});
//# sourceMappingURL=script.js.map