import React from 'react';
import ShippingCosts from '../components/shippingCosts';
import { connect } from 'react-redux';
import { goHome, goTerms, goPrepare } from '../store/actions';

class ShippingCostsRoute extends React.Component {
    /* Prevents default form submission behaviour*/
    onCancelClicked(e) {
        e.preventDefault()
        this.props.goBack()
   }

    render() {
        return (
            <div>
                <ShippingCosts />

                <button onClick={() => this.props.goHome()}>Go Home</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    goHome, goTerms, goPrepare
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingCostsRoute);
