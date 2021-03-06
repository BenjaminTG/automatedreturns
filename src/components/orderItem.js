import React from 'react';
import { connect } from "react-redux";
import Dropdown from './dropdown'
import Options from '../components/options'
import Input from './input'
import { returnExchangeDetails } from '../store/actions'

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityToReturn: 0,
      quantityToExchange: 0,
      keepRefundExchange: "",
      itemComments: ""
    }
  }
  itemCommentCallBack = (itemComments) => {
    this.setState({itemComments: itemComments})
  }
  dropDownCallBack = (choice) => {
    this.setState({keepRefundExchange: choice})
  }
  returnExchangeDetails(choice) {
    this.setState({quantityToReturn: choice})
    this.props.qtyResponses(this.state.quantityToReturn)

  }
  render() {
    var allowedQty = this.props.item.quantity_return_allowed;
    var elements = [];
    for(var i = 0; i <= allowedQty; i ++){
      elements.push(i);
    }
        return (
            <div>
     <div>
         <div>
             <div>
            <div className="uk-grid">
                <div className="uk-width-1-2">
                    <div className="uk-grid">
                        <div className="uk-width-1-3">
                            <img src={this.props.item.image} width="30em" height="30em" />
                        </div>
                        <div className="uk-width-1-3 uk-margin-small">
                            <p class="uk-margin-remove">{this.props.item.color} {this.props.item.name}</p>
                            <p class="uk-margin-remove">(Size {this.props.item.size})</p>
                        </div>
                        <div className="uk-width-1-3">
                            <p>{this.props.item.unit_price}</p>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2">
                    <div className="uk-grid">
                        <div className="uk-width-1-3"> 
                             {this.props.item.quantity_return_allowed > 0 &&
                              <div>
                                   <Options
                                choices={elements}
                                onChoice={(choice) => this.returnExchangeDetails(choice)} />
                                <p>{this.props.item.validation_errors}</p>
                            </div>
                              }
                              {this.props.item.quantity_return_allowed == 0 &&
                                <p>
                                    {!!(this.props.item.validation_errors) ? this.props.item.validation_errors : "" }
                                </p>
                              }
                        </div>
                        <div className="uk-width-1-3">
                        {this.props.item.quantity_return_allowed > 0 &&
                            <Dropdown dropDownResponses = {this.dropDownCallBack}/>
                          } 
                          {!!(this.state.keepRefundExchange) &&
                              <Input itemComment = {this.itemCommentCallBack}/>  
                          } 
                        </div>
                        <div className="uk-width-1-3">
                            {this.props.item.quantity_return_allowed > 0 &&
                                <p><img className="bc-img-upload-icon" src="https://cdn11.bigcommerce.com/s-b972phpqg5/product_images/uploaded_images/camera.png"/></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
         </div>
      </div>
                     
            </div>
        )
    }
}

export default OrderItem;
