import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };
  render() {
    return (
      <>
        <Header />
        <Footer />
      </>
    )
  }
}

export default App
