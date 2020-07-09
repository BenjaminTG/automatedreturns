import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import IndexRoute from './routes/index'
import BeginReturnRoute from './routes/beginreturn'
import ReturnStatusRoute from './routes/returnstatus'

export default function render() {
    return (
        <Switch>
            <Route path="/" exact>
                <IndexRoute />
            </Route>
            <Route path="/returns/begin">
                <BeginReturnRoute />
            </Route>
            <Route path="/returns/status">
                <ReturnStatusRoute />
            </Route>
        </Switch> 
    )
}