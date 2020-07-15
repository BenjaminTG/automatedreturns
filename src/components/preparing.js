import React from 'react';
import { goHome, goBack, goTerms } from '../store/actions';
import { connect } from 'react-redux';

class PreparingYourItemsRoute extends React.Component {
    /* Prevents default form submission behaviour*/
    onCancelClicked(e) {
        e.preventDefault()
        this.props.goBack()
    }
render () {
    return (
        <div>
            <div className="bc-returns-header">
                <p className="uk-text-center bc-returns-header uk-padding-small">Preparing your item(s)</p>
                    <div className="uk-text-center">
                        <p className="uk-margin-remove">Please ensure your items is <strong>unworn, original condition with tags</strong> attached</p>
                        <p className="uk-margin-remove">Any boxed or packed good must be returned with the packaging in original condition</p>
                        <p className="uk-margin-remove">and unmarked.</p>
                        <p className="uk-margin-remove-top">Otherwise, your item will not be deemed acceptable.</p>
                        <img className="uk-margin-bottom" src="https://www.fillmurray.com/160/100"/>
                        <img className="uk-margin-left uk-margin-bottom" src="https://www.fillmurray.com/160/100"/>
                    </div>
                    <form>  
                    <div className="bc-selection-div uk-margin">
                        <button className="bc-returns-button" onClick={(e) => this.onCancelClicked(e)}>Cancel</button>
                        <button className="bc-returns-button uk-margin-left" onClick={() => this.props.goTerms()}>Continue</button>
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
    goHome, goBack, goTerms
}

export default connect(mapStateToProps, mapDispatchToProps)(PreparingYourItemsRoute);