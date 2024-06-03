import React from "react"


export const Square = ({ option, onClick }) => {
    return (
      <button
        disabled={option === '❌' || option === '⭕'}
        // onClick={() => handleTurn(turn)}
        onClick={onClick}
        className="h-28 w-28 border-2 text-4xl border-white rounded-md hover:bg-[#1E1E1E] cursor-pointer disabled:cursor-not-allowed" >
        {option}
      </button>
    )
  }
  