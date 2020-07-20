import React from "react";

class OptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedReason: "",
    }
  }


  renderChoices() {
    let elements = [];
    let objMap = new Map(Object.entries(this.props.choices));
    objMap.forEach((item, key) => {
      elements.push(<option id={key}> {item} </option>);
    });
    return (
      <select
        className="uk-select"
        onChange={(e) => this.props.onChoice(e.target.value)}
      >
        {elements}
      </select>
    );
  }
  render() {
    return <form>{this.renderChoices()}</form>;
  }
}

export default OptionsComponent;
