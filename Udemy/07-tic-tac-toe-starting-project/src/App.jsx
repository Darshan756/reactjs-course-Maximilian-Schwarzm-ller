import Player from "./components/Player"
import { useState } from 'react'
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "../winning-combinations"
import GameOver from "./components/GameOver"
import { use } from "react"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, Players) {
  let winner = null
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = Players[firstSquareSymbol]
    }
  }
  return winner
}
function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  //console.log(turns)
  for (const turn of gameTurns) {
    //  console.log(turn)
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}


function App() {
  const [players, setPLayer] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);
  //const [hasWinner,setHasWinner] = useState(false);
  //const [activePlayer,setActivePlayer] = useState('X')
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      //console.log(prevTurns)
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      //console.log(updatedTurns)
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChnage(symbol, newName) {
    setPLayer(prevPlayers => {

      return {
        ...prevPlayers,
        [symbol]: newName,

      }
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChnage} />
          <Player intialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChnage} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
