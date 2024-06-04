import React from "react"
import Modal from "./Modal"


//crear modal para mostrar el resultado
export const ModalWinner = ({ turn, onClickModal }: {turn: string, onClickModal: () => void}) => {
  return (

    <Modal id='modalwinner'>

      <h1 className='text-center text-3xl font-bold my-4'>¡Bien juagado!</h1>

      <div className='w-20 h-20 border-2 border-white rounded-md text-2xl flex items-center justify-center'>
        {turn !== '❌' ? '❌' : '⭕'}
      </div>

      <button className='my-8 w-max bg-[#1E1E1E] border border-white text-white font-bold py-2 px-4 rounded-md' onClick={() => onClickModal()}>
        Empezar de nuevo
      </button>
    </Modal>

  )
}
