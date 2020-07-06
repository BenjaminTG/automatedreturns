import React from 'react'
import { connect } from "react-redux";
import { startReturn } from "../store/actions"
import Popup from "reactjs-popup";

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
        console.log("Starting return", {...this.state})
        this.props.startReturn(this.state.orderId, this.state.emailAddress)
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
                        value={this.state.orderId}
                        onChange={(e) => this.handleOrderIdChange(e)} />
                        <label for="{this.state.emailAddress}">Email Address</label>
                    <input
                        type="email" className="inputBlocks"
                        placeholder="Email Address"
                        value={this.state.emailAddress}
                        onChange={(e) => this.handleEmailAddressChange(e)} />
                    <button type="submit">Start a New Return</button>
                    <button type="submit">View Return Status</button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    // No mappings yet
})

const mapDispatchToProps = {
    startReturn
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);


