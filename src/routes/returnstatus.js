import React from 'react';
import OrderDetails from '../components/orderDetails'
import { connect } from 'react-redux';

class IndexRoute extends React.Component {

    constructor(props) {
        super(props)
    }

    // getExoCount() {
    //     return this.props.exos.length;
    // }

    render() {
        return (
            <div>
                <OrderDetails />
                <p>Submitted</p>

                <div>
                    {/* There are {getExoCount()} exchange orders! */}

                    {JSON.stringify(this.props.exos)}
                </div>

                <div>
                    {JSON.stringify(this.props.loading)}
                </div>

                <div>
                    {JSON.stringify(this.props.error)}
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    exos: state.returnStatus.exos,
    loading: state.returnStatus.loading,
    error: state.returnStatus.error
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(IndexRoute);