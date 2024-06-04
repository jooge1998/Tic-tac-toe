
import React from 'react'

export const OptionsGames = ({ turn }: { turn: string }) => {

    return (
      <div className="flex mt-6 justify-center w-full gap-4">
        <span className={` ${turn === '❌' ? 'bg-blue-200 ' : ''} text-4xl p-2 rounded-md`}>
          ❌
        </span>
        <span className={` ${turn === '⭕' ? 'bg-blue-200' : ''} text-4xl p-2 rounded-md`}>
          ⭕
        </span>
      </div>
    )
  }