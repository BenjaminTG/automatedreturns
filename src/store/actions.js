import {
    useHistory
} from "react-router-dom";
import {
    ApiService
} from '../services'
import history from './history'

import {
    START_RETURN__REQUEST,
    START_RETURN__SUCCESS,
    START_RETURN__FAILURE
} from "./actionTypes"

export const startReturnRequest = (orderId, emailAddress) => ({
    type: START_RETURN__REQUEST,
    payload: {
        orderId,
        emailAddress
    }
});

export const startReturnSuccess = (order) => ({
    type: START_RETURN__SUCCESS,
    payload: {
        order
    }
});

export const startReturnFailure = (e) => ({
    type: START_RETURN__FAILURE,
    payload: {
        e
    }
})

export const startReturn = (orderId, emailAddress) => {
    return dispatch => {
        dispatch(startReturnRequest(orderId, emailAddress))
        ApiService.getOrderForReturn(orderId, emailAddress)
            .then(response => {
                dispatch(startReturnSuccess(response.data))
                /* When successful add /returns/begin to the nav history */
                history.push("/returns/begin");
            })
            .catch(e => {
                dispatch(startReturnFailure(e))
                /* Return error */
            })
    }
}