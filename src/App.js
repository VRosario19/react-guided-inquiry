import React from "react";
import "./App.css";
import Person from "./Basicinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { name: "Vanessay Rosario", age: 24, dob: "04/19/1997" },
        { name: "Anthony Zagada", age: 3, dob: "04/02/2017" },
        { name: "Jazmin Rosario", age: 17, dob: "01/16/2004" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
            dob={this.state.person[0].dob}
          />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            dob={this.state.person[1].dob}
          />
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
            dob={this.state.person[2].dob}
          />
        </div>
      </div>
    );
  }
}

export default App;
