import React from 'react';


class OptionsComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    renderChoice(choice) {
        return (
            <button onClick={() => this.props.onChoice(choice)}>
                {choice}
            </button>
        )
    }

    renderChoices() {
        return this.props.choices.map(choice => this.renderChoice(choice))
    }

    render() {
        return (
            <div>
                {this.renderChoices()}
            </div>
        )
    }

}


export default OptionsComponent



// import OptionsComponent from './components/options.js';
// import { render } from 'react-dom';
// ...
// render() {
//     ...
//         <OptionsComponent
//             onChoice={(choice) => {console.log("You chose the option", choice)}} />
//     ...
// }
