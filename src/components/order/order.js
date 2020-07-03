import React from 'react';
import OrderHeader from './orderHeader.js'

function render () {
    return (
      <div>
         <div className="containerBorder">
            <div className="uk-grid uk-margin-small-right uk-margin-small-left">
                <div className="uk-width-1-2">
                    <p>Order Number: XXXX</p>
                    <p>Date Order Placed: XXXXXX</p>
                </div>
                <div className="uk-width-1-2">
                    <p className="uk-text-right">Have a question? Contact Us</p>
                </div>
            </div>
        <div className="containerOrderBorder">
        <OrderHeader/>
        </div>

         </div>
      </div>
    
        )
}




export default render;