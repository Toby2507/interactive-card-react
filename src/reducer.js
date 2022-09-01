const reducer = (state, action) => {
    switch (action.type) {
        case 'ALTER_NAME':
            return { ...state, name: action.payload };
        case 'ALTER_CARD_NUMBER':
            let { cardNumber } = action.payload;
            if (cardNumber.replaceAll(' ', '').length % 4 === 0 && cardNumber.replaceAll(' ', '').length < 16 && action.payload.key.toLowerCase() !== 'backspace') {
                cardNumber = `${cardNumber} `;
            }
            return { ...state, cardNumber };
        case 'ALTER_EXP_DATE_M':
            let { expDateM } = action.payload;
            if (expDateM.replace(/^0/, '').length < 2 && action.payload.key?.toLowerCase() !== 'backspace') {
                expDateM = `0${expDateM}`
            } else { expDateM = expDateM.replace(/^0/, '') }
            return { ...state, expDateM };
        case 'ALTER_EXP_DATE_Y':
            let { expDateY } = action.payload;
            if (expDateY < 22 && action.payload.key.toLowerCase() !== 'backspace') { expDateY = '22' }
            return { ...state, expDateY };
        case 'ALTER_CVC':
            let { cvc } = action.payload;
            if (cvc.match(/^00/)) { cvc = cvc.replace(/^00/, '') }
            if (cvc.match(/^0/)) { cvc = cvc.replace(/^0/, '') }
            if (cvc.length === 1 && action.payload.key.toLowerCase() !== 'backspace') {
                cvc = `00${cvc}`
            } else if (cvc.length === 2 && action.payload.key.toLowerCase() !== 'backspace') { cvc = `0${cvc}` }
            return { ...state, cvc };
        case 'HANDLE_SUBMIT':
            if (state.cardNumber.replaceAll(' ', '').length < 16 || state.cardNumber.match(/[a-z-A-Z]/)) {
                state = { ...state, isError: { show: true, types: [...state.isError.types, 'number'] } };
            }
            if (state.name.trim().length < 2 || state.name.match(/[0-9]/)) {
                state = { ...state, isError: { show: true, types: [...state.isError.types, 'name'] } };
            }
            if (!state.expDateM) {
                state = { ...state, isError: { show: true, types: [...state.isError.types, 'month'] } };
            }
            if (!state.expDateY) {
                state = { ...state, isError: { show: true, types: [...state.isError.types, 'year'] } };
            }
            if (state.cvc.length < 3 || state.cvc.match(/[a-z-A-Z]/)) {
                state = { ...state, isError: { show: true, types: [...state.isError.types, 'cvc'] } };
            }
            if (state.isError.types.length === 0) {
                state = { ...state, isError: { show: false, types: [] }, isValid: true };
            }
            return state
        case 'CLEAR_ERRORS':
            return { ...state, isError: { show: false, types: [] } };
        case 'RESET_APP':
            return { ...state, cardNumber: '0000 0000 0000 0000', name: 'Jane Appleseed', expDateM: '12', expDateY: '24', cvc: '123', key: null, isError: { show: false, types: [] }, isValid: false };
        default:
            throw new Error('No action type found');
    }
}

export default reducer