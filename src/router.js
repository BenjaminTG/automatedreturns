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
import ShippingCostsRoute from './routes/shippingCosts'
import PrepareRoute from './routes/preparingyouritems'
import TermsRoute from './routes/terms'

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
            <Route path="/returns/shippingCosts">
                <ShippingCostsRoute />
            </Route>
            <Route path="/returns/preparingyouritems">
                <PrepareRoute />
            </Route>
            <Route path="/returns/terms">
                <TermsRoute />
            </Route>
        </Switch> 
    )
}