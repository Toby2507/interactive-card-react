import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = { cardNumber: '0000 0000 0000 0000', name: 'Jane Appleseed', expDateM: '12', expDateY: '24', cvc: '123', key: null, isError: { show: false, types: [] }, isValid: false };

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const alterName = name => dispatch({ type: 'ALTER_NAME', payload: name });
    const alterCardNumber = (cardNumber, key) => dispatch({ type: 'ALTER_CARD_NUMBER', payload: { cardNumber, key } });
    const alterExpDateM = (expDateM, key) => dispatch({ type: 'ALTER_EXP_DATE_M', payload: { expDateM, key } });
    const alterExpDateY = (expDateY, key) => dispatch({ type: 'ALTER_EXP_DATE_Y', payload: { expDateY, key } });
    const alterCvc = (cvc, key) => dispatch({ type: 'ALTER_CVC', payload: { cvc, key } });
    const submitAction = () => { dispatch({ type: 'HANDLE_SUBMIT' }) }
    const resetAction = () => { dispatch({ type: 'RESET_APP' }) }
    useEffect(() => {
        const errorTimeout = setTimeout(() => dispatch({ type: 'CLEAR_ERRORS' }), 5000)
        return () => clearTimeout(errorTimeout)
    }, [state.isError])

    return <AppContext.Provider value={{ ...state, alterCardNumber, alterName, alterExpDateM, alterExpDateY, alterCvc, submitAction, resetAction }}>{children}</AppContext.Provider>
}

export const useGlobal = () => useContext(AppContext)