
import React, {  useState } from 'react';

import ConfettiExplosion from 'react-confetti-explosion';

//components
import { OptionsGames } from './components/OptionsGame';
import { closedModal } from './functions/modal';
import { checkWinner } from './functions/game';
import { Board } from './components/Board';
import { ButtonReset } from './components/ButtonReset';
import { ModalWinner } from './components/ModalWinner';
import ModalTurn from './components/ModalTurn';

export const initialState = ['', '', '', '', '', '', '', '', '']


function App() {
  const boardstateLocalStorage = JSON.parse(localStorage?.getItem('boardState') || '[]')

  const [turn, setTurn] = useState<string>(localStorage.getItem('turn') ? localStorage.getItem('turn') || '⭕' : '⭕')
  const [boardState, setBoardState] = useState<string[]>(localStorage.getItem('boardState') ? checkWinner(boardstateLocalStorage) ? initialState : boardstateLocalStorage : initialState)


  function handleWinner() {
    closedModal('modalwinner');
    setBoardState(initialState)
    localStorage.clear()
  }
 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#242424] text-white">
      <h1 className="font-bold text-3xl">Tic tac toe</h1>
      <ButtonReset {...{ setBoardState }} />
      <Board {...{ turn, setTurn, boardState, setBoardState }} />
      <OptionsGames {...{ turn }} />

      {checkWinner(boardState) && <ConfettiExplosion />}
      <ModalWinner turn={turn} onClickModal={() => handleWinner()} />

      <ModalTurn showModal={boardState.every((value: any) => value.length === 0)} />
    </div>
  )
}


export default App
