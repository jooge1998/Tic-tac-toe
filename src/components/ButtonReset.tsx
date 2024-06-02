import React from "react"

export const ButtonReset = () => {
    return (
        <button onClick={() => {
            window.location.reload()
            localStorage.clear()
        }} className="bg-[#1E1E1E] border border-white text-white font-bold py-2 px-4 rounded-md my-4">
            Reset
        </button>
    )
}

