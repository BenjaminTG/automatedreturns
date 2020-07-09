import React from 'react';
import SignInForm from '../components/signinForm.js'
import OrderDetails from '../components/orderDetails'
import Instruction from '../components/instructions'
import Steps from '../components/steps'
import { connect } from 'react-redux';



class IndexRoute extends React.Component {

    render() {
        return (
            <div>
                <Instruction />
                <Steps />
                <SignInForm />
            </div>
        )
    }

}


export default connect()(IndexRoute)