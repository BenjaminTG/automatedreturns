import React from 'react';
import { connect } from 'react-redux';
import { goHome } from '../store/actions';
import ExchangeDetails from '../components/exchangeDetails'

class ReturnStatusRoute extends React.Component {

    constructor(props) {
        super(props)
    }

    // getExoCount() {
    //     return this.props.exos.length;
    // }

    render() {
        return (
            <div>
                <ExchangeDetails/>
                
                <button onClick={() => this.props.goHome()}>Go Home</button>

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
    goHome
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturnStatusRoute);
