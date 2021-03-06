import {
    START_RETURN__REQUEST,
    START_RETURN__SUCCESS,
    START_RETURN__FAILURE,
    GO_HOME,
} from "../actionTypes"

const initialState = {
    loading: false,
    error: null,
    orderId: null,
    emailAddress: null,
    order: null,
    exchange: null,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case START_RETURN__REQUEST:
            const { orderId, emailAddress } = action.payload
            return {
                ...state,
                loading: true,
                error: null,
                orderId,
                emailAddress
            }

        case START_RETURN__SUCCESS:
            const { order } = action.payload
            /* When successful add /returns/begin to the nav history */
            /* TODO fix (split out to actions.js) */
            
            //    console.log(history)
            //    history.push("/returns/begin");
            //    console.log("Pigs ears")

            return {
                ...state,
                loading: false,
                error: null,
                order
            }

        case START_RETURN__FAILURE:
            const { e } = action.payload
            return {
                ...state,
                loading: false,
                error: e
            }

        case GO_HOME:
            return {
                ...state,
                order: null,
            }

        default:
            return {...state};
    }
}