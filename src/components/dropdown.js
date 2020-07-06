import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      
    }
  

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select className="uk-width-1-1" value={this.state.value} onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Keep Item</option>
                    <option value="exchange">Return For Exchange</option>
                    <option value="refund">Return for Refund</option>
            </select>
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


export default FlavorForm;