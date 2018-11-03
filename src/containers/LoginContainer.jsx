import React, { Component } from 'react';

class LoginContainer extends Component {

  render() {
    return (
      <form>
        <input type="text" placeholder='email'/>
        <button>Login</button>
      </form>
    )
  }
}

export default LoginContainer;