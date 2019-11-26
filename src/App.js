import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  //pre loader
  componentDidMount() {
    setTimeout(() => this.setState({ loading: true }), 2000);
  }

  render() {
    return (
      // rendering our pre loader while the App component didn't mounted yet
      this.state.loading && (
        <div className="App">
          <NavBar />
        </div>
      )
    );
  }
}

export default App;
