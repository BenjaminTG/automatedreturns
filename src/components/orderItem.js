import React from 'react';
import { connect } from "react-redux";
import FlavorForm from './dropdown'

class OrderItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                                <form>
                                    <input type="number" id="returnQty" name="quantity" value="{this.props.item.quantity_return_allowed}"/>
                                </form>
                              }
                              {this.props.item.quantity_return_allowed == 0 &&
                                <p>
                                This item isn't returnable sorry
                                </p>
                              }
                        </div>
                        <div className="uk-width-1-3">
                        {this.props.item.quantity_return_allowed > 0 &&
                         <select>
                            <option value="" selected disabled hidden>Return for Refund</option>
                            <option value="incorrect">Incorrect item/colour received</option>
                            <option value="too">Too Big</option>
                            <option value="tooSmall">Too Small</option>
                            <option value="noLike">Doesn't suit/didn't like</option>
                            <option value="faulty">Faulty</option>
                            </select>
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

export default connect()(OrderItem);
