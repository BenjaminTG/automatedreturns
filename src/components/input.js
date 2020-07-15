import React from 'react';
import { connect } from "react-redux";
import { returnExchangeDetails } from '../store/actions'

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
        this.props.returnExchangeDetails(this.state.itemComments)
        console.log({...this.state})
     }
    render () {
        return (
               <div>
                   <input className="uk-input" onChange={this.itemCommentHandleChange} onBlur={() => this.updateCommentInput()} />
               </div> 
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    returnExchangeDetails
}
export default connect(mapStateToProps,mapDispatchToProps)(Input);
