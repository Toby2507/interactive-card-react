import React from 'react'
import front from '../images/bg-card-front.png'
import back from '../images/bg-card-back.png'
import cardLogo from '../images/card-logo.svg'
import { useGlobal } from '../context'

export const FrontImage = () => {
    const { cardNumber, name, expDateM, expDateY } = useGlobal();
    return (
        <figure className="top-24 left-8 absolute z-10 w-72 h-max my-12 mx-auto md:w-96 lg:top-[20%] lg:right-16 ">
            <img src={front} alt="front card" className='absolute top-0 left-0 w-full' />
            <img src={cardLogo} alt="card logo" className='absolute top-3 left-4 w-12 md:top-4 md:left-5 md:w-14' />
            <span className="absolute top-24 left-4 text-xl tracking-[2px] text-white md:top-32 md:left-5 md:text-2xl">{cardNumber}</span>
            <span className="absolute top-32 left-4 text-sm tracking-tight text-white md:top-44 md:left-5 md:text-base">{name}</span>
            <span className="absolute top-32 right-4 text-sm tracking-tight text-white md:top-44 md:right-5 md:text-base">{expDateM}/{expDateY}</span>
        </figure>
    )
}

export const BackImage = () => {
    const { cvc } = useGlobal();
    return (
        <figure className="top-0 right-8 absolute w-72 h-max my-12 mx-auto md:w-96 lg:top-[47%] lg:right-0 ">
            <img src={back} alt="front card" className='absolute top-0 left-0 w-full' />
            <span className="absolute top-[4.3rem] right-9 text-xs tracking-wider text-white md:top-[5.8rem] md:right-12 md:text-sm">{cvc}</span>
        </figure>
    )
}
