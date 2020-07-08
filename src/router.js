import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import IndexRoute from './routes/index'
import BeginReturnRoute from './routes/beginreturn'
import SubmittedReturnRoute from './routes/submittedreturns'

export default function render() {
    return (
        <Switch>
            <Route path="/" exact>
                <IndexRoute />
            </Route>
            <Route path="/returns/begin">
                <BeginReturnRoute />
            </Route>
            <Route path="/returns/submitted">
                <SubmittedReturnRoute />
            </Route>
        </Switch> 
    )
}