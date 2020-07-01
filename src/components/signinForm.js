import React from 'react';
import Popup from "reactjs-popup";

//* Toll Tip Message *//

const TollTip = () => (
    <div className="card">
      <div className="content">
        Your order ID will be on your confirmation email.
      </div>
    </div>
);

function render () {
    return (
        <div className="containerBorder">
        <div className="formContainer">
        <form action="/action_page.php">
        <label className="inputLabels" for="orderId">Order ID
        <Popup trigger={<span className="signInHint">?</span>}
        position="right top"
        on="hover">
        <TollTip title="Right Top" />
        </Popup>
        </label>
        <input className="inputBlocks" type="text" id="orderId" name="orderId" value="" />
        <label className="inputLabels" for="eAddress">Email Address</label>
        <input className="inputBlocks" type="text" id="emailAddress" name="eAddress" value="" />
        <input type="submit" value="Start Returns Process" />
        <input type="submit" value="View Return Status" />
        </form>
        </div> 
        </div>
    )
}


export default render;