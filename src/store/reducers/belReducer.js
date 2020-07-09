import { DROPDOWN } from '../actionTypes'

const initialState = {
    quantityToReturn: 0,
    quantityToExchange: 0
}


export default function(state = initialState, action) {
    switch(action.type) {
        case DROPDOWN:
          window.alert(action.payload.quantityToReturn);
            const { quantityToReturn, quantityToExchange } = action.payload
            return {
                ...state,
                quantityToReturn,
                quantityToExchange,
                keepRefundExchange,
                refundReason,
                exchangeReason
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
