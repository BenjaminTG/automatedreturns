import React from 'react';
import t from '../services/i18n'
import { goHome } from '../store/actions';
import { connect } from 'react-redux';

class BeginReturnRoute extends React.Component {
render () {
    return (
        <div>
            <div className="bc-returns-header">
                <p className="uk-text-center bc-returns-header uk-padding-small">Terms & Conditions</p>
                <form className="bc-terms-field">
                    <p>{t(`TERMS-GENERIC.generic`)}</p>
                </form>
                <button onClick={() => this.props.goHome()}>CANCEL</button>
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