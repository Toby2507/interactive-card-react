import React from 'react'
import { useGlobal } from '../context'
import SuccessMessage from './SuccessMessage'

const CreationForm = () => {
    const { name, cardNumber, expDateM, expDateY, cvc, isError: { show, types }, isValid, alterCardNumber, alterName, alterExpDateM, alterExpDateY, alterCvc, submitAction } = useGlobal();
    const [key, setKey] = React.useState(null)
    const handleNumber = e => {
        let number = e.target.value;
        if (number.trim().length < 20) { alterCardNumber(number, key); }; setKey(null)
    }
    const handleDate = e => {
        let { name, value } = e.target;
        if (value.replace('0', '').length < 3) { name === 'month' ? alterExpDateM(value, key) : alterExpDateY(value, key); }; setKey(null)
    }
    const handleCvc = e => {
        let cvc = e.target.value;
        if (cvc.replaceAll('0', '').length < 4) { alterCvc(cvc, key); }; setKey(null)
    }
    const handleSubmit = e => {
        e.preventDefault();
        submitAction(); setKey(null)
    }

    const inputBorder = 'w-full bg-lightGrayishViolet p-[1px] rounded-lg focus-within:bg-activeInput';
    const inputBorderError = 'w-full bg-errorRed p-[1px] rounded-lg focus-within:bg-activeInput';
    const errorClass = "text-errorRed text-sm font-medium font-secondary"
    const labelClass = "uppercase font-semibold tracking-wider text-lg text-veryDarkViolet"
    const inputClass = "w-full px-4 py-2 rounded-lg text-veryDarkViolet font-semibold placeholder:text-lg placeholder:font-normal focus:outline-none"

    if (isValid) return <SuccessMessage />
    return (
        <form action="" className='flex flex-col space-y-8 lg:mr-20' onSubmit={handleSubmit}>
            <div className="w-full flex flex-col space-y-2">
                <label htmlFor="name" className={labelClass}>cardholder name</label>
                <div className={(show && types.includes('name')) ? inputBorderError : inputBorder}><input type="text" className={inputClass} placeholder='e.g. Jane Appleseed' value={name} onChange={e => alterName(e.target.value)} /></div>
                {(show && types.includes('name')) && (<p className={errorClass}>Provide a name</p>)}
            </div>
            <div className="w-full flex flex-col space-y-2">
                <label htmlFor="cardNumber" className={labelClass}>card number</label>
                <div className={(show && types.includes('number')) ? inputBorderError : inputBorder}><input type="text" id='cardNumber' className={inputClass} placeholder='e.g. 1234 5678 9123 0000' value={cardNumber} onChange={handleNumber} onKeyDown={e => setKey(e.key)} /></div>
                {(show && types.includes('number')) && (<p className={errorClass}>Wrong format, numbers only</p>)}
            </div>
            <div className="flex space-x-4 items-center w-full">
                <div className="w-full flex flex-col space-y-2">
                    <label id="expDate" className={labelClass}>exp. date (MM/YY)</label>
                    <div className="flex-1 flex space-x-2">
                        <div className={(show && types.includes('month')) ? inputBorderError : inputBorder}><input type="number" name='month' className={inputClass} placeholder='MM' aria-labelledby='expDate' min='01' max='12' value={expDateM} onChange={handleDate} onKeyDown={e => setKey(e.key)} /></div>
                        <div className={(show && types.includes('year')) ? inputBorderError : inputBorder}><input type="number" name='year' className={inputClass} placeholder='YY' aria-labelledby='expDate' min='22' value={expDateY} onChange={handleDate} onKeyDown={e => setKey(e.key)} /></div>
                    </div>
                    {(show && types.includes('month' || 'year')) && (<p className={errorClass}>Neither can be blank</p>)}
                </div>
                <div className="w-full flex flex-col space-y-2">
                    <label htmlFor="name" className={labelClass}>cvc</label>
                    <div className={(show && types.includes('cvc')) ? inputBorderError : inputBorder}><input type="text" className={inputClass} placeholder='e.g. 123' value={cvc} onChange={handleCvc} onKeyDown={e => setKey(e.key)} /></div>
                    {(show && types.includes('cvc')) && (<p className={errorClass}>Can't be blank</p>)}
                </div>
            </div>
            <button type='submit' className="w-full py-4 bg-veryDarkViolet rounded-lg text-lg text-white text-center font-semibold capitalize tracking-wider">confirm</button>
        </form>
    )
}

export default CreationForm