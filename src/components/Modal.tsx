import React from 'react'

export default function Modal({ id, children, show }: any) {
    return (
        <div id={id} className={` ${!show ? 'hidden' : 'flex'} fixed top-0 left-0 right-0     overflow-y-auto md:inset-0 h-full justify-center items-center  bg-[#0B0B0B] `}>

            <div className={`  md:min-w-[448px] relative  border border-white rounded-lg  flex flex-col items-center justify-center p-4`}>
                {children}
            </div>
        </div>
    )
}
