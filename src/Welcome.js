//si li diamo un valore predefinito 
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name } = this.props;

    return (
      <p>Benvenuto, {name}!</p>
    );
  }
}

Welcome.defaultProps = {
  name: "Ospite" 
};

export default Welcome;
