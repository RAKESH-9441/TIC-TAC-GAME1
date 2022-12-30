import React, { useState } from 'react';
import Square from './square';
import EmojiPicker from 'emoji-picker-react';
import "./App.css";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))

    const [isXTurn, setIsXTurn] = useState(true);

    const winner = () => {
        const winnerLogics = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogics) {
            const [a, b, c] = logic
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) { 
                return state[a] 
            }
        }
        return false
    }


    const playAgain = () => {
        setState(Array(9).fill(null))

    }

    const isWinner = winner();

    const handle = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn)
       
    }
    return (
        <div className="board">
            {isWinner ? (
                <>
                
                    {isWinner} : won the match  {" "}<br /><br /><button className='btn' onClick={playAgain}>play again</button>
                </>
            ) : (
                <>
                <h4>Player {isXTurn ? "X" : "O"} please move</h4>
                    <div className="board-row">
                        <Square onClick={() => handle(0)} value={state[0]} />
                        <Square onClick={() => handle(1)} value={state[1]} />
                        <Square onClick={() => handle(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handle(3)} value={state[3]} />
                        <Square onClick={() => handle(4)} value={state[4]} />
                        <Square onClick={() => handle(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handle(6)} value={state[6]} />
                        <Square onClick={() => handle(7)} value={state[7]} />
                        <Square onClick={() => handle(8)} value={state[8]} />
                    </div>
                </>
            )}
        </div>
    )
}
export default Board;