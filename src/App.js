import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./list";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: [],text:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            value: [...this.state.value, this.state.text],
            text: ''
        });
        event.preventDefault();
    }

    handleDelete(index){
        //alert('delete');
        this.setState({
            value: this.state.value.filter((list, listIndex) => {
                return listIndex !== index;
            })
        });
    }

  render() {
    return (
      <div className="App">

          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
          </header>

          <form style={{marginTop: 100 + 'px'}}>
              <label>
                  <input type="text" value={this.state.text} onChange={this.handleChange}/>
              </label>
              <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
          <List todolist={this.state.value} delete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
