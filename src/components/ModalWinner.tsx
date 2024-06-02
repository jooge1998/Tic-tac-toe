import React from "react"

//crear modal para mostrar el resultado
export const ModalWinner = ({ turn, onClickModal }: any) => {
    return (
      <div id='modalwinner' className={`  fixed top-0 left-0 right-0   hidden  overflow-y-auto md:inset-0 h-full max-h-full justify-center items-center  bg-[#0B0B0B] `}>
  
        <div className={`  md:min-w-[448px] relative  max-h-full border border-white rounded-lg  flex flex-col items-center justify-center p-4`}>
  
          <h1 className='text-center text-3xl font-bold my-4'>¡Bien ganado!</h1>
  
          <div className='w-20 h-20 border-2 border-white rounded-md text-2xl flex items-center justify-center'>
            {turn !== '❌' ? '❌' : '⭕'}
          </div>
  
          <button className='my-8 w-max bg-[#1E1E1E] border border-white text-white font-bold py-2 px-4 rounded-md' onClick={() => onClickModal()}>
            Empezar de nuevo
          </button>
  
        </div>
      </div>
  
  
  
    )
  }
  