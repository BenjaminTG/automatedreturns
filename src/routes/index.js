import React from 'react';
import SignInForm from '../components/signinForm.js'
import Instruction from '../components/instructions'
import Steps from '../components/steps'
import { connect } from 'react-redux';



class IndexRoute extends React.Component {

    isLoading() {
        return this.props.beginReturnLoading || this.props.getReturnStatusLoading;
        
        
    }



    render() {
        return (
            <div>
                <div>Is loading? {this.isLoading() ? "yes" : "no"}</div>
                <Instruction />
                <Steps />
                <SignInForm />
            </div>
        )
    }

}



const mapStateToProps = (state) => ({
    beginReturnLoading: state.createReturn.loading,
    beginReturnError: state.createReturn.error,
    getReturnStatusLoading: state.returnStatus.loading,
    getReturnStatusError: state.returnStatus.error,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(IndexRoute);
