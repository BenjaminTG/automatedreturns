import React from 'react';
import { connect } from "react-redux";
import { goHome } from '../store/actions';
import ReturnsHeader from '../components/order/submittedHeader';

// function prettyDate(rawDate) {
//     let momentDate = moment.tz(rawDate);
//     let humanDate = momentDate.format("LLL");
//     return humanDate;
//   }

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

    exoRows() {
        if (this.hasExos()) {
            return (
                <div>
                    {this.props.exos.map(exo =>
                        <div className="uk-grid">
                            <div className="uk-width-1-4">

                            </div>
                            <div className="uk-width-1-2">
                                <img src=""></img>
                            </div>
                            <div className="uk-width-1-4">
                                <p>{exo.customer_message}</p>
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="uk-grid">
                <div className="uk-width-1-2"></div>
                <div className="uk-width-1-2">
                    <p className="uk-text-right">Have a question? <a href="/contact-us/">Contact Us</a></p>
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

                    {JSON.stringify(this.props.exos)}
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







