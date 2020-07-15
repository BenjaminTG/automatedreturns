import React from 'react';
import { connect } from "react-redux";
import OrderItem from "./orderItem";
import Order from '../components/order/order'
import moment from 'moment-timezone'

function prettyDate(rawDate) {
    let momentDate = moment.tz(rawDate);
    let humanDate = momentDate.format("LLL");
    return humanDate;
  }


class OrderDetails extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            quantityToReturn: 0,
            quantityToExchange: 0,
        }
    }

    dropDownCallBack = (choice) => {
        this.setState({quantityToReturn: choice})
          console.log(this.state.quantityToReturn);
          console.log(this.props)
      }

    hasOrder() {
        return (
            typeof(this.props.order) !== 'undefined'
            && this.props.order !== null
        );
    }

    loadingStatus() {
        if(this.props.loading) {
            return <div>Status: Loading Order Details</div>;
        } else {
            return <div>Status: Idle</div>;
        }
    }

    orderInfo() {
        if(this.hasOrder()) {
            return (
                <div>
                   <div className="uk-grid uk-margin-small-right uk-margin-small-left">
                       <div className="uk-width-1-2">
                           <p>Order Number: {this.props.order.order_id}</p>
                           <p>Date Order Placed: {prettyDate(this.props.order_created_at)}</p>
                       </div>
                       <div className="uk-width-1-2">
                           <p className="uk-text-right">Have a question? <a href="/contact-us/">Contact Us</a></p>
                       </div>
                   </div>
             </div>

            );
        }
    }

    orderItems() {
        if(this.hasOrder())
        {
            return (
                <div>
                  
                    <Order/>
                    <ul className="bc-return-item-list">
                        {this.props.order.items.map(i =>
                            <OrderItem key={i.level_code} item={i} onItemUpdated={(item) => this.updateItem(item)} qtyResponses = {this.dropDownCallBack}/>
                        )}
                    </ul>
                </div>
            );
        }
    }

    refundReturnTotal () {
        if(this.hasOrder())
        {
            return (
                <div className="uk-width-1-1 uk-grid" uk-grid>
                    <div className="uk-width-1-1">
                        <p className="uk-text-bold uk-margin-remove">*Shipping will need to be paid for if total refund is under $60</p>
                    </div>
                    <div className="uk-width-1-2">
                        <p className="uk-margin-remove uk-text-bold">Total Refunded</p>
                        {this.state.quantityToExchange > 0 ? <p className="uk-margin-remove uk-text-bold">Total Exchange</p> : ''}
                    </div>
                    <div className="uk-width-1-2">
                        <div>
                           {this.state.quantityToReturn > 0 ? <RefundTotal qty={this.state.quantityToReturn} /> : '$0.00'}    
                        </div>
                        <div>
                            {this.state.quantityToExchange > 0 ? <ExchangeTotal/> : ''} 
                        </div>
                    </div>
                    
                    
                </div>
            );
        }
    }

    errorInfo() {
        if(this.props.error) {
            return (
                <div>
                    <pre>
                        {JSON.stringify(this.props.error, null, 2)}
                    </pre>
                </div>
            )
        }
    }

    orderJson() {
        if(this.hasOrder()) {
            return (
                <div>
                    <pre>
                        {JSON.stringify(this.props.order, null, 2)}
                    </pre>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                
                {this.loadingStatus()}
                {this.orderInfo()}
                {this.orderItems()}
                <hr />
                {this.refundReturnTotal()}
                {this.errorInfo()}
                {this.orderJson()}
            </div>
        )
    }

}

class ExchangeTotal extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <p>{this.props.count}</p>
            </div>
        )
    }
}


class RefundTotal extends React.Component {
  constructor(props) {
      super(props)
  }
  calRefundTotal(){
    const qty = this.props.qty;
    const price = 100;
    const result = price * qty;
    return result;
  }
  render () {
      return ( 
          <div>${this.calRefundTotal()}</div>
      )
  }
}

/* pulls in returns info from create-returns.js */

const mapStateToProps = (state) => ({
    loading: state.createReturn.loading,
    error: state.createReturn.error,
    order: state.createReturn.order,
    quantityToReturn: state.updateReturnExchange.quantityToReturn,
    quantityToExchange: state.updateReturnExchange.quantityToExchange,
    keepRefundExchange: state.updateReturnExchange.keepRefundExchange,
    refundReason: state.updateReturnExchange.refundReason,
    exchangeReason: state.updateReturnExchange.exchangeReason,
    exchangeToSize: state.updateReturnExchange.exchangeToSize,
    itemComments: state.updateReturnExchange.itemComments
    
})

export default connect(mapStateToProps)(OrderDetails);
