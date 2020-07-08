import React from 'react';
import SignInForm from '../components/signinForm.js'
import OrderDetails from '../components/orderDetails'
import Instruction from '../components/instructions'
import Steps from '../components/steps'
import Options from '../components/options'
import { connect } from 'react-redux';
import { showPopup } from '../store/actions'



class IndexRoute extends React.Component {

    onItemChosen(choice) {
        console.log("The user chose item", choice);
    }

    onFruitChosen(choice) {
        console.log("The user chose the fruit", choice);
        this.props.showPopup("Do you like " + choice + "?");
    }

    render() {
        return (
            <div>

                <Options
                    choices={["1 item", "2 items", "3 items", "4 items"]}
                    onChoice={(choice) => this.onItemChosen(choice)} />

                <Options
                    choices={["apple", "banana", "avacado", "lime", "persimmon", "kiwi fruit"]}
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