import React from 'react';
import { connect } from "react-redux";


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
                        <div className="uk-width-1-3">
                            <p>{this.props.item.color} {this.props.item.name}</p>
                            <p>(Size {this.props.item.size})</p>
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
                                No items Returnable sorry
                                </p>
                              }
                        </div>
                        <div className="uk-width-1-3">
                        {this.props.item.quantity_return_allowed > 0 &&
                         <select>
                            <option value="" selected disabled hidden>Return for Refund</option>
                            <option value="grapefruit">Incorrect item/colour received</option>
                            <option value="too">Too Big</option>
                            <option value="tooSmall">Too Small</option>
                            <option value="noLike">Doesn't suit/didn't like</option>
                            <option value="faulty">Faulty</option>
                            </select>
                             }
                        </div>
                        <div className="uk-width-1-3">
                            {this.props.item.quantity_return_allowed > 0 &&
                                <p>Images</p>
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
