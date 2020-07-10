import React from 'react';
import { connect } from "react-redux";
import { goHome } from '../store/actions';
import ReturnsHeader from '../components/order/submittedHeader';
import moment from 'moment-timezone'
import t from '../services/i18n'


function prettyDate(rawDate) {
    let momentDate = moment.tz(rawDate);
    let humanDate = momentDate.format("LLL");
    return humanDate;
  }

class ReturnStatusRoute extends React.Component {

    constructor(props) {
        super(props)
    }

    // getExoCount() {
    //     return this.props.exos.length;
    // }

    hasExos() {
        return (
            typeof (this.props.exos) !== 'undefined'
            && this.props.exos !== null
        );
    }

    loadingStatus() {
        if (this.props.loading) {
            return <div>Status: Loading Order Details</div>;
        } else {
            return <div>Status: Idle</div>;
        }
    }

    // orderInfo() {
    //     if(this.hasOrder()) {
    //         return (
    //             <div>
    //                <div className="uk-grid uk-margin-small-right uk-margin-small-left">
    //                    <div className="uk-width-1-2">
    //                        <p>Order Number: {this.props.exos.reference_id}</p>
    //                    </div>

    //                </div>
    //          </div>

    //         );
    //     }
    // }


exoRowItem(item) {
    return (
        <img className="uk-margin-small-left" src={item.image_url} width="60em" height="60em" />
    )
}

    exoRow(exo) {
        return (
            <div className="uk-grid">
                <div className="uk-width-1-4 uk-margin-small-top uk-margin-small-bottom">
                    <p className="uk-margin-small-left uk-margin-remove-bottom">{exo.order_id}</p>
                    <p className="uk-margin-small-left uk-margin-remove-top">{prettyDate(exo.created_at)}</p>
                </div>
                <div className="uk-width-1-2 uk-margin-small-top uk-margin-small-bottom">
                    {exo.items.map(item =>
                        this.exoRowItem(item)
                    )}
                </div>
                <div className="uk-width-1-4 uk-margin-small-top uk-margin-small-bottom">
                    <p>{t(`${exo.customer_message}.message`)}</p>
                </div>
            </div>
        )
    }

    exoRows() {
        if (this.hasExos()) {
            return (
                <div>
                    {this.props.exos.map(exo =>
                        this.exoRow(exo)
                    )}
                </div>
            );
        }
    }


    exoOrderNum() {
        if (this.hasExos()) {
            return (
                <div>
                    Order number: {this.props.exos[0].order_id} 
                </div>
            );
        } else {
            return (
                <div>
                    <p>Not a valid order number.</p>
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                <div>
                  <p className="uk-text-center bc-returns-header uk-padding-small">{this.exoOrderNum()}</p>
                </div>

                 <div className="bc-submitted-header">
                    <p className="uk-text-center uk-text-bold">Submitted Refund/Exchange message</p>
                    <p className="uk-text-center">please allow up to 14 business days for receiving and processing of your parcel at our warehouse.</p>
                </div>
                <div className="uk-grid">
                    <div className="uk-width-1-2"></div>
                    <div className="uk-width-1-2">
                        <p className="uk-text-right uk-margin-top uk-margin-bottom">Have a question? <a href="/contact-us/">Contact Us</a></p>
                    </div>
                </div>
                <ReturnsHeader />
                <div>
                    <div>
                        <div className="bc-returns-header">
                            <div className="uk-grid">
                                <div className="uk-width-1-1">
                                    {this.exoRows()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/* There are {getExoCount()} exchange orders! */}

                    {/* {JSON.stringify(this.props.exos)} */}
                </div>

                <div>
                    {JSON.stringify(this.props.loading)}
                </div>

                <div>
                    {JSON.stringify(this.props.error)}
                </div>




                {this.loadingStatus()}
                {/* {this.orderInfo()} */}
                {/* {this.orderItems()} */}
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







