import React from 'react';
import { goHome, goBack, goPrepare } from '../store/actions';
import { connect } from 'react-redux';

class ShippingCostsRoute extends React.Component {
/* Prevents default form submission behaviour*/
onCancelClicked(e) {
      e.preventDefault()
      this.props.goBack()
}    
render () {
    return (
        <div>
            <div className="bc-returns-header">
                <p className="uk-text-center bc-returns-header uk-padding-small">Shipping Costs</p>
                    <div className="uk-text-center">
                        <p className="uk-margin-remove">Please be made aware that customers may be asked to pay for <strong>postage</strong> depending on</p>
                        <p className="uk-margin-remove">their refund total<span className="uk-hidden"> and/or exchange request</span>.</p>
                        <p>If this is the case, postage will be paid upon delivery at your selected post office.</p>
                    </div>
                    <form>  
                    <div className="bc-selection-div uk-margin">
                        <button className="bc-returns-button" onClick={(e) => this.onCancelClicked(e)}>Cancel</button>
                        <button className="bc-returns-button uk-margin-left" onClick={() => this.props.goPrepare()}>Continue</button>
                    </div>
                </form>
        </div>
        </div>
    )
}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    goHome, goBack, goPrepare
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingCostsRoute);