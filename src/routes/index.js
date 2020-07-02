import React from 'react';
import SignInForm from '../components/signInForm.js'
import OrderDetails from '../components/orderDetails'
import Instruction from '../components/instructions'
import Steps from '../components/steps'



export default class IndexRoute extends React.Component {

    render() {
        return (
            <div>
                <Instruction />
                <Steps />
                <SignInForm />
                <OrderDetails />
            </div>
        )
    }

}