'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

        namer: '',
        phone: '',
        address: '',
        city: ''
    };
  }



  // const obj = {};
  // obj['namer'] = 'Steve';
  // this.setState(obj);
  //
  // const user = users.map(user) => {
  //   this.setState({
  //     namer: users.contact,
  //     phone: users.phone,
  //     city: users.city,
  //   })
  // };


  render() {
    console.log(this.state.namer);
    return (
      <div>{this.state.namer}</div>
      // <div>
      //   {this.users.map((user) => (
      //     <div>{user}</div>
      //   ))}
      //
      // </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('root'));
