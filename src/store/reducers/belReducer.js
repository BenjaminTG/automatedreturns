import { RETURN_EXCHANGE_DETAILS } from '../actionTypes'

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
        case RETURN_EXCHANGE_DETAILS:
          window.alert(action.payload.quantityToReturn + " " + action.payload.quantityToExchange);
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

            // CAN ALSO DO THIS
            let newState = {
                name: state.name,
                age: state.age,
                cereal: state.cereal,
                counter: state.counter
            }

          //  newState.counter = newState.counter + 1

            return newState;



            // CAN DO THIS
            return {
                ...state,
                counter: state.counter + 1
            }

            // DON'T DO THIS
            // state.counter = state.counter + 1;
            // return state;
    }
}
