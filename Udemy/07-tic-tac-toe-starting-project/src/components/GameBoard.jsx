
export default function GameBoard({onSelectSquare,board}){
   
  /*   const [gameBoard,setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map((innerArrays) => [...innerArrays])];
             updatedBoard[rowIndex][colIndex] = activePlayerSymbol
             return updatedBoard;
        } );
        onSelectSpuare()
    } */
    return (
        <ol id="game-board">
           {board.map((row,rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map(
                    (playerSymbol,colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex,colIndex) } disabled={playerSymbol !== null  }>{playerSymbol}</button></li>
                )
                    
                    }
            </ol>
           </li> )}
        </ol>
    )
}