import React from 'react';
import { connect } from "react-redux";
import Options from '../components/options'
import { dropDown } from '../store/actions'

class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }

    returnExchangeStart(choice, e) {
      this.props.dropDown(choice)
  }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      
    }
  

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          <Options
                                choices={["Keep Item", "Return for Exchange", "Return for Refund"]}
                                onChoice={(choice) => this.returnExchangeStart(choice)} />
            {this.state.value !== "" &&
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

  const stateMappings = state => ({})
  const actionMappings = {
      dropDown
  }

export default connect(stateMappings, actionMappings)(FlavorForm);