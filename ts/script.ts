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
import { CloudE } from "./entities/obstruction/CloudE.js";

const gameOverE = new GameOver(document.querySelector(".game_over") as HTMLDivElement);
const groundE = new GroundE(
	document.querySelectorAll(".ground"),
	30 //* height
);
const cloudE = new CloudE(
	document.querySelectorAll(".tray"),
);
const canvasE = new Canvas(
	document.getElementById("gameCanvas") as HTMLCanvasElement, //* dom
	window.innerWidth, //* width
	window.innerHeight - groundE.getHeight() //* height
);
const birdE = new Bird(
	50, //* x
	canvasE.getHalfHeight(), //* y
	30, //* width
	30, //* height
	1, //* gravity
	0, //* velocity
	-15, //* initialJumpHeight
	"yellow", //* color
	"angryBird.svg", //* imagePath
	{
		jump: {
			key: "bird-jump",
			value: "ArrowUp",
		},
	} //* actions
);
const localStorageE = new LocalStorage(birdE);
localStorageE.apply();
const replayPressE = new ReplayPress(document.querySelector(".key_jump") as HTMLDivElement, birdE);
const scoreE = new ScoreE(document.querySelector(".score") as HTMLDivElement, 0);
const gameStatusE = new GameStatus(
	false, //* isGameOver
	gameOverE, //* gameOverScreen
	scoreE, //* gameScore
	canvasE, //* canvas
	birdE, //* birdE
	groundE //* groundE
);
const pipeE = new PipeE(canvasE);
const plantE = new PlantE(canvasE, groundE);

const obstructionE = new ObstructionE(gameStatusE, pipeE, plantE);

const gameE = new Game(
	canvasE, //* canvas
	birdE, //* birdE
	scoreE, //* scoreE
	gameStatusE, //* gameStatusE
	obstructionE //* obstructions
);
const gameEventE = new GameEvent(
	canvasE, //* canvasE
	groundE, //* groundE
	cloudE, //* cloudE
	birdE, //* birdE
	gameStatusE, //* gameStatusE
	gameE //* gameE
);
const gameLobbyE = new GameLobby(document.querySelector(".game_lobby") as HTMLDivElement);
const gameSettingE = new GameSetting(document.querySelector(".game_setting") as HTMLDivElement);
const playGameBtn = new PlayGame(
	document.querySelector(".start_game") as HTMLButtonElement,
	gameStatusE,
	gameLobbyE,
	gameE,
	gameEventE
);
playGameBtn.apply();
const settingGameBtn = new SettingGame(
	document.querySelector(".setting_game") as HTMLButtonElement,
	gameLobbyE,
	gameSettingE
);
settingGameBtn.apply();
const saveSettingBtn = new SaveSetting(
	document.querySelector(".setting_save") as HTMLButtonElement,
	gameLobbyE,
	gameSettingE
);
saveSettingBtn.apply();
const setBirdJumpKey = new SellectBirdJumpKey(
	document.querySelector("#bird-jump") as HTMLInputElement,
	birdE,
	replayPressE
);
setBirdJumpKey.apply();
