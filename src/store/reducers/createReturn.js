import {
    START_RETURN__REQUEST,
    START_RETURN__SUCCESS,
    START_RETURN__FAILURE
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

        default:
            return state;
    }
}