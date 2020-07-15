import React from 'react';
import Preparing from '../components/preparing';
import { connect } from 'react-redux';
import { goHome, goTerms } from '../store/actions';

class ShippingCostsRoute extends React.Component {
    /* Prevents default form submission behaviour*/
    onCancelClicked(e) {
        e.preventDefault()
        this.props.goBack()
   }

    render() {
        return (
            <div>
                <Preparing />

                <button onClick={() => this.props.goHome()}>Go Home</button>
                <div className="uk-text-right"><button className="bc-returns-button" onClick={() => this.props.goTerms()}>Terms</button></div>
            

            </div>
        )
    }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    goHome, goTerms
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingCostsRoute);
