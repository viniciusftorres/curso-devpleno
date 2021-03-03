import React, {useState} from 'react';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  const Home = () => {
    return (<h1>Home</h1>);
  }

  const Generos = () => {
    return (<h1>Gêneros</h1>);
  }

  return (
    <Router>      
      <div className="App">
        <Header/>      
        <Route path="/" exact component={Home}></Route>
        <Route path="/generos" exact component={Generos}></Route>
      </div>
    </Router>
  );
}

export default App;
