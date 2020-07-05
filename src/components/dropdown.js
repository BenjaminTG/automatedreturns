import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      alert('Your favorite flavor is: ' + this.state.value);
      
    }
  

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Return for Refund</option>
                    <option value="incorrect">Incorrect item/colour received</option>
                    <option value="too Big">Too Big</option>
                    <option value="tooSmall">Too Small</option>
                    <option value="noLike">Doesn't suit/didn't like</option>
                    <option value="faulty">Faulty</option>
            </select>
          </label>
        </form>
      );
    }
  }


export default FlavorForm;