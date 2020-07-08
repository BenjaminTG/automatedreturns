import React from 'react';
import OrderDetails from '../components/orderDetails'

export default class IndexRoute extends React.Component {

    render() {
        return (
            <div>
                <OrderDetails />
                <p>Submitted</p>
            </div>
        )
    }

}