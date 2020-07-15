import React from 'react';
import { connect } from "react-redux";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemComments: "",
        }
    }
    itemCommentHandleChange = (e) => {
        this.setState({itemComments: e.target.value});
      }

      updateCommentInput(){
        this.setState({itemComments: this.state.itemComments});
        this.props.itemComment(this.state.itemComments);
     }
    render () {
        return (
               <div>
                   <input className="uk-input" onChange={this.itemCommentHandleChange} onBlur={() => this.updateCommentInput()} />
               </div> 
        )
    }
}

export default Input;
