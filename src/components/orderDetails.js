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
                           <p className="uk-text-right">Have a question? Contact Us</p>
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
                    <ul>
                        {this.props.order.items.map(i =>
                            <OrderItem key={i.level_code} item={i} />
                        )}
                    </ul>
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
                {this.errorInfo()}
                {this.orderJson()}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    loading: state.createReturn.loading,
    error: state.createReturn.error,
    order: state.createReturn.order,
})

export default connect(mapStateToProps)(OrderDetails);
