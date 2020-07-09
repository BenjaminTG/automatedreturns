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
    START_RETURN__FAILURE,
    GET_RETURN_STATUS__REQUEST,
    GET_RETURN_STATUS__SUCCESS,
    GET_RETURN_STATUS__FAILURE,
    GO_HOME,
} from "./actionTypes"


// #region Start Return

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

// #endregion


// #region Get Return Status

export const getReturnStatusRequest = (orderId, emailAddress) => ({
    type: GET_RETURN_STATUS__REQUEST,
    payload: {
        orderId,
        emailAddress
    }
});

export const getReturnStatusSuccess = (exos) => ({
    type: GET_RETURN_STATUS__SUCCESS,
    payload: {
        exos
    }
});

export const getReturnStatusFailure = (e) => ({
    type: GET_RETURN_STATUS__FAILURE,
    payload: {
        e
    }
})

export const getReturnStatus = (orderId, emailAddress) => {
    return dispatch => {
        dispatch(getReturnStatusRequest(orderId, emailAddress))
        ApiService.getReturnStatus(orderId, emailAddress)
            .then(response => {
                dispatch(getReturnStatusSuccess(response.data.exos))
                /* When successful add /returns/begin to the nav history */
                history.push("/returns/status");
            })
            .catch(e => {
                dispatch(getReturnStatusFailure(e))
                /* Return error */
            })
    }
}

// #endregion


// #region Get Return Status

export const goHome = () => {
    return dispatch => {
        dispatch({type: GO_HOME})
        history.push("/")
    }
}

// #endregion
