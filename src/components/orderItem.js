import React from 'react';
import { connect } from "react-redux";
import OrderContents from './order/orderContent.js'

class OrderItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <OrderContents/>
                {this.props.item.name} {this.props.item.color} (Size {this.props.item.size})
                <img src={this.props.item.image} width="10em" height="10em" />
            </div>
        )
    }
}

export default connect()(OrderItem);
