import React from 'react';
import { connect } from "react-redux";
import Options from '../components/options'
import { returnExchangeDetails } from '../store/actions'

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: {
          keepRefundExchange: this.props.keepRefundExchange,
          refundReason: this.props.refundReason,
          exchangeReason: this.props.exchangeReason,
          exchangeToSize: this.props.exchangeToSize,
          itemComments: this.props.itemComments
      }
  };   

      this.handleChange = this.handleChange.bind(this);
    }

    returnExchangeStart(choice, e) {
      this.props.returnExchangeDetails(choice, 2, 3);
      return this.props.keepRefundExchange;
  }
  
    handleChange(event) {
      this.setState({value: event.target.value});  
    }
    render() {
      var choices = ["Keep Item", "Never Keen"]
      var choices2 = [{
        name: "Belen"
      },
      {
        name: "Georgina" 
      },
      {
        name: "Georgia"
      },
      {
        name: "Paloma"
      }]
      return (
        <form>
          <label>
                          <Options
                                choices={choices2}
                                onChoice={(choice) => this.returnExchangeStart(choice)} />
                                <p>{ this.state.choice }</p>
            {this.props.choice == "Keep Item" &&
            <div>
               <form>
                   <select className="uk-width-1-1 cl-second-dropdown">
                    <option value="" selected disabled hidden>Reason for Return...</option>
                    <option value="incorrect">Incorrect item/colour received</option>
                    <option value="tooBig">Too Big</option>
                    <option value="tooSmall">Too Small</option>
                    <option value="noLike">Doesn't suit/didn't like</option>
                    <option value="faulty">Faulty</option>
                    </select>
              </form>
              <textarea className="uk-width-1-1" name="comments"></textarea>

              </div>
            }
          </label>
        </form>


      );
    }
  }
  const mapStateToProps = (state) => ({
    keepRefundExchange: state.belReducer.keepRefundExchange,
    refundReason: state.belReducer.refundReason,
    exchangeReason: state.belReducer.exchangeReason,
    exchangeToSize: state.belReducer.exchangeToSize,
    itemComments: state.belReducer.itemComments
})


  const stateMappings = state => ({})
  const actionMappings = {
    returnExchangeDetails
  }

export default connect(stateMappings, actionMappings)(Dropdown);