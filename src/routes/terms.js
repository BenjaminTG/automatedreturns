import React from 'react';
import Terms from '../components/terms';
import { connect } from 'react-redux';
import { goHome } from '../store/actions';

class ShippingCostsRoute extends React.Component {
    /* Prevents default form submission behaviour*/
    onCancelClicked(e) {
        e.preventDefault()
        this.props.goBack()
   }

    render() {
        return (
            <div>
                <Terms />

                <button onClick={() => this.props.goPrepare()}>Next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShippingCostsRoute);
