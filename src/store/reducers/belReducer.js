import { SHOW_POPUP } from '../actionTypes'

const initialState = {
    name: "Bel",
    age: 20,
    counter: 0,
    message: null
}


export default function(state = initialState, action) {
    switch(action.type) {

        case SHOW_POPUP:
            window.alert(action.payload.message)
            return {
                ...state,
                message: action.payload.message
            }

        default:

            // CAN ALSO DO THIS
            let newState = {
                name: state.name,
                age: state.age,
                cereal: state.cereal,
                counter: state.counter
            }

            newState.counter = newState.counter + 1

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
