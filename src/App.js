import React, { Component } from 'react';
import LikesCounter from './components/LikesCounter';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LikesCounter initialLikes="0" />
     </div>
    );
  }
}

export default App;
