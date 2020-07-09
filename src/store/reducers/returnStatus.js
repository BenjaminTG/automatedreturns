import {
    GET_RETURN_STATUS__REQUEST,
    GET_RETURN_STATUS__SUCCESS,
    GET_RETURN_STATUS__FAILURE,
    GO_HOME,
} from '../actionTypes'

const initialState = {
    exos: null,
    loading: false,
    error: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RETURN_STATUS__REQUEST:
            return {
                ...state,
                exos: null,
                loading: true,
                error: null,
            }

        case GET_RETURN_STATUS__SUCCESS:
            const {exos} = action.payload
            return {
                ...state,
                exos,
                loading: false,
                error: null,
            }

        case GET_RETURN_STATUS__FAILURE:
            const {e} = action.payload
            return {
                ...state,
                exos: null,
                loading: false,
                error: e
            }
            
        case GO_HOME:
            return {
                ...state,
                exos: null,
            }

        default:
            return {...state}
    }
}