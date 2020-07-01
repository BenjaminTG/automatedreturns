import React from 'react';

function render () {
    return (
        <div className="containerBorder">
        <div className="uk-grid">
            <div className="uk-width-1-3">
                <div className="stepsBlock">
                    <p className="stepsBlips">1</p>
                    <p>Enter your details online</p>
                </div>
            </div>
            <div className="uk-width-1-3">
                <div className="stepsBlock">
                  <p className="stepsBlips">2</p>
                  <p>Select which items you wish to return</p>
                </div>
            </div>
            <div className="uk-width-1-3">
                <div className="stepsBlock">
                   <p className="stepsBlips">3</p>
                   <p>We'll send a return slip to you</p>
                </div>
            </div>
        </div>

        </div>
    )
}

export default render;