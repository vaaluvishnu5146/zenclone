import { useRef } from "react";
import "./App.css";
import { isPlayerOne } from "./utils/game_utils";
const WINNING_CHANCES = ["123", "132", "213", "231"];

function App() {
  const buttons = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  let count = 0;
  let PLAYER_ONE = [];
  let PLAYER_TWO = [];

  function handleGameClick(e) {
    const buttonId = e.target.id;

    if (buttonId) {
      count++;
      if (isPlayerOne(count)) {
        buttons[buttonId - 1].current.childNodes[1].innerText = "X";
        PLAYER_ONE.push(Number(e.target.id));
      } else {
        PLAYER_TWO.push(Number(e.target.id));
        buttons[buttonId - 1].current.childNodes[1].innerText = "O";
      }
      buttons[buttonId - 1].current.className += " no-pointer-events";
    }
    console.log(PLAYER_ONE, PLAYER_TWO);
  }

  return (
    <div className="app-container">
      <div className="tic-tac-toe-grid-container">
        <div
          className="game-button"
          id={"1"}
          onClick={handleGameClick}
          ref={buttons[0]}
        >
          <span className="button_identifier">1</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="2"
          onClick={handleGameClick}
          ref={buttons[1]}
        >
          <span className="button_identifier">2</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="3"
          onClick={handleGameClick}
          ref={buttons[2]}
        >
          <span className="button_identifier">3</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="4"
          onClick={handleGameClick}
          ref={buttons[3]}
        >
          <span className="button_identifier">4</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="5"
          onClick={handleGameClick}
          ref={buttons[4]}
        >
          <span className="button_identifier">5</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="6"
          onClick={handleGameClick}
          ref={buttons[5]}
        >
          <span className="button_identifier">6</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="7"
          onClick={handleGameClick}
          ref={buttons[6]}
        >
          <span className="button_identifier">7</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="8"
          onClick={handleGameClick}
          ref={buttons[7]}
        >
          <span className="button_identifier">8</span>
          <p className="button_text" id=""></p>
        </div>
        <div
          className="game-button"
          id="9"
          onClick={handleGameClick}
          ref={buttons[8]}
        >
          <span className="button_identifier">9</span>
          <p className="button_text" id=""></p>
        </div>
      </div>
    </div>
  );
}

export default App;
