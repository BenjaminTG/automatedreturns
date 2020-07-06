import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import IndexRoute from './routes/index'
import BeginReturnRoute from './routes/beginreturn'

export default function render() {
    return (
        <Switch>
            <Route path="/" exact>
                <IndexRoute />
            </Route>
            <Route path="/returns/begin">
                <BeginReturnRoute />
            </Route>
        </Switch> 
    )
}