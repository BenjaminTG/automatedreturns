import React from 'react';
import { connect } from "react-redux";
import OrderItem from "./orderItem";




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
                    Order Info:
                    <ul>
                        <li>ID: {this.props.order.id}</li>
                        <li>Created At: {this.props.order.created_at}</li>
                    </ul>
                </div>
            );
        }
    }

    orderItems() {
        if(this.hasOrder())
        {
            return (
                <div>
                    Order Items:
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
