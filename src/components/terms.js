import React from 'react';
import t from '../services/i18n'
import { goHome, goBack } from '../store/actions';
import { connect } from 'react-redux';

class BeginReturnRoute extends React.Component {
    state = { checked: false }
    handleCheckboxChange = event => this.setState({ checked: event.target.checked })
    oncheckedChanged(e){
        let value = e.target.checked
        this.setState ({
            checked : value
        })
    }

/* Prevents default form submission behaviour*/
    onCancelClicked(e) {
         e.preventDefault()
         this.props.goBack()
    }
render () {
    return (
        <div>
            <div className="bc-returns-header">
                <p className="uk-text-center bc-returns-header uk-padding-small">Terms & Conditions</p>
                <form>
                    <div className="bc-terms-field">
                        <p>{t(`TERMS-GENERIC.generic`)}</p>
                    </div>
                    <div className="uk-text-center uk-margin-top">
                        <label>
                            <input type="checkbox" name="agreeterms" value="check" onClick={(e)=> this.oncheckedChanged(e)} checked={this.state.checked}/> I agree to the Terms and Conditions
                        </label>
                    </div>
                    <div className="bc-selection-div uk-margin">
                        <button className="bc-returns-button" onClick={(e) => this.onCancelClicked(e)}>Cancel</button>
                        <button className="bc-returns-button uk-margin-left" disabled={!this.state.checked}>Continue</button>
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
    goHome, goBack
}

export default connect(mapStateToProps, mapDispatchToProps)(BeginReturnRoute);