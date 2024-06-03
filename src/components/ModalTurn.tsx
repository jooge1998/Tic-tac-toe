import React from 'react'
import Modal from './Modal'
import { closedModal } from '../functions/modal'

export default function ModalTurn({ showModal }: any) {
    return (

        <Modal id='modalturn' show={showModal}>

            <h1 className='text-center text-3xl font-bold my-4'>¿Qué pieza quieres jugar?</h1>


            <div className='flex items-center justify-center gap-4'>
                <button className='my-8 w-max bg-[#1E1E1E] border border-white text-white font-bold py-2 px-4 rounded-md' onClick={() => {
                    localStorage.setItem('turn', '⭕')
                    closedModal('modalturn')
                }}>
                    ⭕
                </button>

                <button className='my-8 w-max bg-[#1E1E1E] border border-white text-white font-bold py-2 px-4 rounded-md' onClick={() => {
                    localStorage.setItem('turn', '❌')
                    closedModal('modalturn')
                }}>
                    ❌
                </button>

            </div>

        </Modal>
    )
}
