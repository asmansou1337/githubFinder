import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className='App'>
      //   <h1>Hello from react</h1>
      // </div>
      // Fragment is used to not show the parent div in the HTML
      <Fragment>
        <h1>Hello from react v2</h1>
      </Fragment>
    );
  }
}

export default App;
