import React from 'react';
import OrderDetails from '../components/orderDetails';
import { connect } from 'react-redux';
import { goHome, goShipping } from '../store/actions';

class BeginReturnRoute extends React.Component {

    render() {
        return (
            <div>
                <OrderDetails />
                <div className="uk-text-right"><button className="bc-returns-button" onClick={() => this.props.goShipping()}>Next</button></div>
                
                <button onClick={() => this.props.goHome()}>Go Home</button>
            

            </div>
        )
    }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    goHome, goShipping
}

export default connect(mapStateToProps, mapDispatchToProps)(BeginReturnRoute);
