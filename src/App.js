import React from 'react';
import './App.css';
import BackgroundImagePage from './components/Background/background.js';
import Card from './components/Card/card.js';
import { fetchData } from './api/index.js';

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }

  render() {
    return (
      <BackgroundImagePage />
    );
  }
}

export default App;
