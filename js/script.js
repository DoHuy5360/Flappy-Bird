import { Canvas } from "./Canvas.js";
import { GroundE } from "./entities/obstruction/GroundE.js";
import { PipeE } from "./entities/obstruction/PipeE.js";
import { PlantE } from "./entities/obstruction/PlantE.js";
import { ScoreE } from "./entities/widget/ScoreE.js";
import { GameLobby } from "./entities/widget/GameLobby.js";
import { PlayGame } from "./entities/widget/actions/gameLobby/PlayGame.js";
import { SettingGame } from "./entities/widget/actions/gameLobby/SettingGame.js";
import { GameStatus } from "./entities/widget/GameStatus.js";
import { GameOver } from "./entities/widget/GameOver.js";
import { Game } from "./entities/widget/Game.js";
import { ObstructionE } from "./entities/widget/ObstructionE.js";
import { GameEvent } from "./entities/widget/GameEvent.js";
import { GameSetting } from "./entities/widget/GameSetting.js";
import { SaveSetting } from "./entities/widget/actions/gameSetting/SaveSetting.js";
import { Bird } from "./entities/obstruction/Bird.js";
import { SellectBirdJumpKey } from "./entities/widget/actions/gameSetting/SellectBirdJumpKey.js";
import { LocalStorage } from "./entities/widget/LocalStorage.js";
import { ReplayPress } from "./entities/widget/actions/gameOver/ReplayPress.js";
const gameOverE = new GameOver(document.querySelector(".game_over"));
const groundE = new GroundE(document.querySelectorAll(".ground"), 30);
const canvasE = new Canvas(document.getElementById("gameCanvas"), window.innerWidth, window.innerHeight - groundE.getHeight());
const birdE = new Bird(50, canvasE.getHalfHeight(), 30, 30, 1, 0, -15, "yellow", "angryBird.svg", {
    jump: {
        key: "bird-jump",
        value: "ArrowUp"
    }
});
const localStorageE = new LocalStorage(birdE);
localStorageE.apply();
const replayPressE = new ReplayPress(document.querySelector(".key_jump"), birdE);
const scoreE = new ScoreE(document.querySelector(".score"), 0);
const gameStatusE = new GameStatus(false, gameOverE, scoreE, canvasE, birdE, groundE);
const pipeE = new PipeE(canvasE);
const plantE = new PlantE(canvasE, groundE);
const obstructionE = new ObstructionE(pipeE, plantE);
const gameE = new Game(canvasE, birdE, scoreE, gameStatusE, obstructionE.getOstruction());
const gameEventE = new GameEvent(canvasE, birdE, gameStatusE, obstructionE, gameE);
const gameLobbyE = new GameLobby(document.querySelector(".game_lobby"));
const gameSettingE = new GameSetting(document.querySelector(".game_setting"));
const playGameBtn = new PlayGame(document.querySelector(".start_game"), gameLobbyE, obstructionE, gameE, gameEventE);
playGameBtn.apply();
const settingGameBtn = new SettingGame(document.querySelector(".setting_game"), gameLobbyE, gameSettingE);
settingGameBtn.apply();
const saveSettingBtn = new SaveSetting(document.querySelector(".setting_save"), gameLobbyE, gameSettingE);
saveSettingBtn.apply();
const setBirdJumpKey = new SellectBirdJumpKey(document.querySelector("#bird-jump"), birdE, replayPressE);
setBirdJumpKey.apply();
//# sourceMappingURL=script.js.map