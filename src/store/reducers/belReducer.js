import { SHOW_POPUP } from '../actionTypes'

const initialState = {
    quantityToReturn: 0,
    quantityToExchange: 0
}


export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_POPUP:
          window.alert(action.payload.quantityToReturn + " " + action.payload.quantityToExchange);
            const { quantityToReturn, quantityToExchange } = action.payload
            return {
                ...state,
                quantityToReturn,
                quantityToExchange
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
