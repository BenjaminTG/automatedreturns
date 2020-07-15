import { UPDATE_RETURN_EXCHANGE_DETAILS } from '../actionTypes'

const initialState = {
    quantityToReturn: 0,
    quantityToExchange: 0,
    keepRefundExchange: null,
    refundReason: null,
    exchangeReason: null,
    exchangeToSize: null,
    itemComments: null
}


export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_RETURN_EXCHANGE_DETAILS:
     //     window.alert(action.payload.quantityToReturn);
            const { quantityToReturn, quantityToExchange, keepRefundExchange, refundReason, exchangeReason, exchangeToSize, itemComments } = action.payload
            return {
                ...state,
                quantityToReturn,
                quantityToExchange,
                keepRefundExchange,
                refundReason,
                exchangeReason,
                exchangeToSize,
                itemComments
            }

        default:
            return {...state};

    }
}
