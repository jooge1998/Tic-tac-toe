import React from "react"
import { initialState } from '../App'

export const ButtonReset = ({setBoardState}: any) => {
    return (
        <button onClick={() => {
            setBoardState(initialState)
            localStorage.clear()
            //window.location.reload()
        }} className="bg-[#1E1E1E] border border-white text-white font-bold py-2 px-4 rounded-md my-4">
            Reset
        </button>
    )
}

