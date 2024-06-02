import React, { useEffect, useState } from "react";
import { Square } from "./Square";
import { openModal } from "../functions/modal";
import { checkWinner } from "../functions/game";


type SquareProps = {
    turn: string,
    setTurn: (value: string) => void,
    boardState: string[],
    setBoardState: (value: string[]) => void,
    // active?: boolean
  }
  

export const Board = ({ turn, setTurn, boardState, setBoardState }: SquareProps) => {

    const updateBoardState = (index: number, newValue: string) => {
      const newBoardState = [...boardState];
      newBoardState[index] = newValue;
      setBoardState(newBoardState);
  
      // guardar el estado del juego en el localStorage
      localStorage.setItem('boardState', JSON.stringify(newBoardState));
    };
  
  
    useEffect(() => { if (checkWinner(boardState)) openModal('modalwinner') }, [boardState])
  
  
    const handleTurn = (turn: string) => {
      if (turn === '❌') setTurn('⭕')
        else setTurn('❌')
  
    }
  
   
    return (
      <div className="grid grid-cols-3 gap-4 items-center justify-center mt-4">
  
        {boardState.map((value, i) =>
          <Square
            key={i}
            option={value}
            onClick={() => {
              handleTurn(turn)
              updateBoardState(i, turn)
            }}
  
          />
        )}
  
      </div>
    )
  }
  
  

