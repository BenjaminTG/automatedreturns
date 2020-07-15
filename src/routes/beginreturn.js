import React from 'react';
import OrderDetails from '../components/orderDetails';
import { connect } from 'react-redux';
import { goHome } from '../store/actions';

class BeginReturnRoute extends React.Component {

    render() {
        return (
            <div>
                <OrderDetails />
                
                <button onClick={() => this.props.goHome()}>Go Home</button>
            

            </div>
        )
    }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    goHome
}

export default connect(mapStateToProps, mapDispatchToProps)(BeginReturnRoute);
