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

const gameOverE = new GameOver(document.querySelector(".game_over") as HTMLDivElement);
const groundE = new GroundE(
	document.querySelectorAll(".ground"),
	30 //* height
);
const canvas = new Canvas(
	document.getElementById("gameCanvas") as HTMLCanvasElement, //* dom
	window.innerWidth, //* width
	window.innerHeight - groundE.getHeight() //* height
);
const birdE = new BirdE(canvas);
const bird = birdE.getBird();
const controllE = new ControllE();
const scoreE = new ScoreE(document.querySelector(".score") as HTMLDivElement, 0);
const gameStatusE = new GameStatus(
	false, //* isGameOver
	gameOverE, //* gameOverScreen
	scoreE, //* gameScore
	canvas, //* canvas
	bird, //* birdE
	groundE //* groundE
);
const pipeE = new PipeE(canvas);
const plantE = new PlantE(canvas, groundE.getHeight());
const gameLobby = document.querySelector(".game_lobby") as HTMLDivElement;

const obstructionE = new ObstructionE(pipeE, plantE);
const gameE = new Game(
	canvas, //* canvas
	bird, //* birdE
	scoreE, //* scoreE
	gameStatusE, //* gameStatusE
	obstructionE.getOstruction() //* obstructions
);
const gameEventE = new GameEvent(
	controllE, //* controllE
	gameStatusE, //* gameStatusE
	obstructionE, //* obstructionE
	gameE, //* gameE
	bird //* bird
);
const gameLobbyE = new GameLobby(document.querySelector(".game_lobby") as HTMLDivElement);
const gameSettingE = new GameSetting(document.querySelector(".game_setting") as HTMLDivElement);
const playGameBtn = new PlayGame(
	document.querySelector(".start_game") as HTMLButtonElement,
	gameLobbyE,
	obstructionE,
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
const optionDoms = document.querySelectorAll(".setting_option_choice");
optionDoms.forEach((opt) => {
	opt.addEventListener("keydown", (e) => {
		e.preventDefault();
		const event = e as KeyboardEvent;
		const dom = e.target as HTMLInputElement;
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