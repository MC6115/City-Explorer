import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import CitySearch from './CitySearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };
  render() {
    return (
      <>
        <Header />
        <CitySearch />
        <Footer />
      </>
    )
  }
}

export default App
