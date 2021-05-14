import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    const loading = true;
    const showName = true;

    return (
      // 'showName && name' is equivalent to 'showName ? name : null'
      <div className='App'>
        {loading ? <h1>Hello {showName && name}</h1> : <h4>Loading....</h4>}
      </div>
      // Fragment is used to not show the parent div in the HTML
      // <Fragment>
      //   <h1>Hello from react v2</h1>
      // </Fragment>
    );
  }
}

export default App;
