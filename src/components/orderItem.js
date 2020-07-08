import React from 'react';
import { connect } from "react-redux";
import FlavorForm from './dropdown'

class Dropdown extends React.Component {   
    render() {
        return (
          <option value={ this.props.value }>{ this.props.value }</option>
        );
    }
}

class OrderItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qtyReturning: 0
        }
        this.qtyToReturn = this.qtyToReturn.bind(this)     ;                                 
    }
      qtyToReturn(e) {
          this.setState ({
            qtyReturning : e.target.value
          });
          e.preventDefault();
      }

    render() {
        var allowedQty = [this.props.item.quantity_return_allowed];
        var elements = [];
        for(var i = 0; i <= allowedQty; i ++){
            elements.push(<Dropdown id= { i } value={ i } />);
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
                                  <form>
                                      <select value={this.state.selectValue} onChange={this.qtyToReturn} className={"uk-select " + ((this.props.item.quantity_return_allowed = 0) ? 'uk-disabled' : '')}>
                                    {elements}
                                </select>
                                </form>
                             
                            </div>
                              }
                              {this.props.item.quantity_return_allowed == 0 &&
                                <p>
                                    {!!(this.props.item.validation_errors) ? this.props.item.validation_errors : "" }
                                    <p>{this.state.qtyReturning}</p>
                                </p>
                              }
                        </div>
                        <div className="uk-width-1-3">
                            <FlavorForm/>
                        {this.props.item.quantity_return_allowed > 0 &&
                            <FlavorForm/>
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
