import React from 'react';
import SignIn from '../components/sign-in.js';
import Props from '../components/props.js';
import OrderPage from '../components/order/order.js';


var name = "Ben";
var info = {age: 30}
function hello () {
    console.log("Some message in there")
}


function render () {
    return (
        <div>
            <SignIn/>
            <OrderPage/>

            <Props name={name} 
                   info={info}
                   onDoStuff={()=> hello()}/>
        </div>
    )
}

export default render;