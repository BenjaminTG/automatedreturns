import React from 'react';


class OptionsComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    renderSelect(choice, e) {
        return (
            <select className="uk-select" onChange={(e) => this.props.onChoice(e.target.value)}>
            {this.renderChoices()}
            </select>
        )
    }

    renderChoice(choice, index) {
        { console.log(this.props.choices[0].name) }
        return (
            <option id = {choice}>
                {this.props.choices[0].age}
            </option>
        )
    }

    renderChoices() {
      //
    return this.props.choices.map((item, index) => this.renderChoice(index))
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
