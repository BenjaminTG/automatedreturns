import React from 'react';
import { goHome } from '../store/actions';
import { connect } from 'react-redux';

class BeginReturnRoute extends React.Component {
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
                        <button className="bc-returns-button" onClick={() => this.props.goHome()}>Cancel</button>
                        <button className="bc-returns-button uk-margin-left" onclick="if(!this.form.checkbox.checked){alert('You must agree to the terms first.');return false}">Continue</button>
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
    goHome
}

export default connect(mapStateToProps, mapDispatchToProps)(BeginReturnRoute);