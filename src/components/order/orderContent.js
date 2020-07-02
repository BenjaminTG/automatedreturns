import React from 'react';

function render () {
    return (
      <div>
         <div>
             <div>
            <div className="uk-grid">
                <div className="uk-width-1-2">
                    <div className="uk-grid">
                        <div className="uk-width-1-3">
                            <img alt="alt-text" src="http://lorempixel.com/100/100"/>
                        </div>
                        <div className="uk-width-1-3">
                            <p>White canvas Shoes</p>
                            <p>Size: 12E</p>
                        </div>
                        <div className="uk-width-1-3">
                            <p>$59.99</p>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2">
                    <div className="uk-grid">
                        <div className="uk-width-1-3">
                            <form><input type="number" id="returnQty" name="quantity" min="1" max="5"/></form>
                        </div>
                        <div className="uk-width-1-3">
                         <select>
                            <option value="" selected disabled hidden>Return for Refund</option>
                            <option value="incorrect">Incorrect item/colour received</option>
                            <option value="tooBig">Too Big</option>
                            <option value="tooSmall">Too Small</option>
                            <option value="noLike">Doesn't suit/didn't like</option>
                            <option value="faulty">Faulty</option>
                            </select>
                        </div>
                        <div className="uk-width-1-3">
                            <p>Images</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
         </div>
      </div>
    
        )
}

export default render;