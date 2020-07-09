import React from 'react';


class OptionsComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    renderSelect(choice, e) {
        return (
            <select onChange={(e) => this.props.onChoice(e.target.value)}>
            {this.renderChoices()}
            </select>
        )
    }

    renderChoice(choice) {
        return (
            <option value={choice}>
                {choice}
            </option>
        )
    }

    renderChoices() {
        return this.props.choices.map(choice => this.renderChoice(choice))
    }

    render(choice) {
        return (
            <form>
                {this.renderSelect(choice)}
            </form>
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
