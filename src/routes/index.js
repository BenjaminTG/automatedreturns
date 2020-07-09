import React from 'react';
import SignInForm from '../components/signinForm.js'
import OrderDetails from '../components/orderDetails'
import Instruction from '../components/instructions'
import Steps from '../components/steps'
import Options from '../components/options'
import { connect } from 'react-redux';
import { showPopup } from '../store/actions'



class IndexRoute extends React.Component {

    onFruitChosen(choice, e) {
        console.log("The user chose the fruit", choice);
        this.props.showPopup("Do you like " + choice + "?");
    }

    render() {
        return (
            <div>

                <Options
                    choices={[0, 1, 2, 3]}
                    onChoice={(choice) => this.onFruitChosen(choice)} />

                <Instruction />
                <Steps />
                <SignInForm />
            </div>
        )
    }

}


const stateMappings = state => ({})
const actionMappings = {
    showPopup
}

export default connect(stateMappings, actionMappings)(IndexRoute)