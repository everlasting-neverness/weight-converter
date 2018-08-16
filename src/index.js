import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./Form/Form.js";
import Card from "./Card/Card.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      input: "",
      grams: null,
      kg: null,
      ounces: null
    };
  }

  handleUserInput(e) {
    console.log(e.target.value);
    let value = e.target.value;
    this.setState({
      grams: value / 0.0022046,
      kg: value / 2.2046,
      ounces: value * 16
    });
  }

  render() {
    return (
      <div>
        <h1 className="header-title">Weight Converter</h1>
        <div className="header-explanasion">Enter a value</div>
        <Form handleUserInput={this.handleUserInput} />
        <Card header="Grams:" value={this.state.grams} />
        <Card header="Kilograms:" value={this.state.kg} />
        <Card header="Ounces:" value={this.state.ounces} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
