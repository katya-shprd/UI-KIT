import React, { Component } from 'react';

import HomeScreen from './components/HomeScreen';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <HomeScreen />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  }
}
export default App;
