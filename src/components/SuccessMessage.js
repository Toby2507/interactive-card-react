import React from 'react'
import icon from '../images/icon-complete.svg'
import { useGlobal } from '../context'

const SuccessMessage = () => {
    const { resetAction } = useGlobal()
    return (
        <section className="justify-self-center flex flex-col space-y-8 items-center">
            <img src={icon} alt="rounded check svg" />
            <div className="flex flex-col space-y-2 items-center">
                <h1 className="text-xl text-veryDarkViolet uppercase tracking-wider font-medium">thank you!</h1>
                <p className="text base text-darkGrayishViolet">We've added your card details</p>
            </div>
            <button className="w-full py-4 bg-veryDarkViolet rounded-lg text-lg text-white text-center font-semibold capitalize tracking-wider" onClick={resetAction}>continue</button>
        </section>
    )
}

export default SuccessMessage