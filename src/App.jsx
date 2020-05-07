// App.jsx
import React, { Component } from 'react';

import Modal from './components/dialogs/Modal'; // container
import VideoReact from './components/VideoReact';   // component
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
            <VideoReact />
        </Modal>

      </div>
    );
  }
}

export default App;

// eof
