import React from 'react';
import { connect } from "react-redux";
import Options from '../components/options'
import { returnExchangeDetails } from '../store/actions'

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
          this.state = {
                keepRefundExchange: "",
                refundReason: "",
                exchangeReason: "",
                exchangeToSize: "",
      };   
    }

    toReturnExchange(choice) {
      this.setState({
        keepRefundExchange: choice
      })
    }
      returnExchangeDetails(choice) {
        this.setState({
          exchangeReason: choice
        })
    }

    render() { 
      // lift state up
      console.log(this.state.exchangeReason + " " + this.state.keepRefundExchange)
      let initalChoices = ["Keep Item", "Return for Exchange", "Return for Refund"];
      let choices = {
        "FAULTY": "The product has a fault or defect",
        "SIZE_TOO_SMALL": "The product is too small for me to wear",
        "WRONG_ITEM": "The wrong product was in the box"
    };
      return (
        <div>
        <form>
          <label>
                          <Options
                                choices={initalChoices}
                                onChoice={(choice) => this.toReturnExchange((choice))} />


           {this.state.keepRefundExchange === "Keep Item" || !!(this.state.keepRefundExchange) &&
                         <Options
                                choices={choices}
                                onChoice={(choice) => this.returnExchangeDetails((choice))} />
          }              
        </label>
        </form>
        </div>
      );
    }
  }

  const stateMappings = state => ({})
  const actionMappings = {
    returnExchangeDetails
  }

export default connect(stateMappings, actionMappings)(Dropdown);