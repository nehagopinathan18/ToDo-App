import React from 'react';
import './App.css';
import Header from './../Header/Header';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
      user: null
    }
  }
  render() {
    return (
      <div>
        <Header user={this.state.user}/>
          
      </div>
    );
  }
}

export default App;
