import React from 'react';

class Props extends React.Component {
    render() {
        return(
            <div>
            <p>Hello World! {this.props.name} {this.props.info.age}
            </p>

            <button className="uk-margin" onClick={() => this.props.onDoStuff()}>I'm a button</button>

            </div>
            
            
        )    
    }
}

export default Props