import React from 'react'
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import {
    startReturn,
    getReturnStatus,
} from "../store/actions"

const Card = ({title}) => (
    <div className="card">
      <div className="content">
        Your order ID will be on your confirmation value.
      </div>
    </div>
  ); 

class SignInForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            orderId: "",
            emailAddress: "",
        }
    }

    handleOrderIdChange(e) {
        this.setState({orderId: e.target.value})

    }

    handleEmailAddressChange(e) {
        this.setState({emailAddress: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    startNewReturn(e) {
        e.preventDefault();
        console.log("Starting return", {...this.state})
        this.props.startReturn(this.state.orderId, this.state.emailAddress)
    }

    getReturnStatus(e) {
        e.preventDefault();
        console.log("Getting return status", {...this.state})
        this.props.getReturnStatus(this.state.orderId, this.state.emailAddress)
    }

    render() {
        return (
            <div>
                <form className="formContainer" onSubmit={(e) => this.handleSubmit(e)}>
                        <Popup trigger={<p className="signInHint">?</p>} position="right top" on="hover">
                        <Card title="signInHintPopup"/>
                        </Popup>
                        
                    <label for="{this.state.orderId}">Order ID</label>
                    <input className="inputBlocks"
                        type="text"
                        placeholder="Order ID"
                        pattern="^\d[\d\s]*$"
                        title="Please enter valid order number. Your order ID will be on your confirmation value"
                        value={this.state.orderId}
                        onChange={(e) => this.handleOrderIdChange(e)} />
                        <label for="{this.state.emailAddress}">Email Address</label>
                    <input
                        type="email" className="inputBlocks"
                        placeholder="Email Address"
                        value={this.state.emailAddress}
                        onChange={(e) => this.handleEmailAddressChange(e)} />
                    <button type="submit" onClick={(e) => this.startNewReturn(e)}>Start a New Return</button>
                    <button type="submit" onClick={(e) => this.getReturnStatus(e)}>View Return Status</button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    // No mappings yet
})

const mapDispatchToProps = {
    startReturn,
    getReturnStatus,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);


