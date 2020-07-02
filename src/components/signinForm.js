import React from 'react'
import { connect } from "react-redux";
import { startReturn } from "../store/actions"

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
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder="Order ID"
                        value={this.state.orderId}
                        onChange={(e) => this.handleOrderIdChange(e)} />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={this.state.emailAddress}
                        onChange={(e) => this.handleEmailAddressChange(e)} />
                    <button type="submit">Start a New Return</button>
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
