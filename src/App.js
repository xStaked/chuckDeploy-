import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chuck from './assets/IMG_20220615_214302.png';
import Categories from './components/Categories/Categories';
import Joke from './components/Joke/Joke';
import chuckIcon from "./assets/Chuck-Norris-No-Background.png"

import './App.scss';

function App() {
  return (
    <section className='App'>
      <h1 className='principal-title'>Chuck Norris Jokes <img src={chuckIcon} alt="chuck-norris-icon" width="70px" height="70px" /></h1>
      <div className='main'>
        <div className='container-data'>
          <img src={Chuck} alt='chuc-norris-img' width="400px" height="300px" />
          <Categories />
        </div>
        <Routes>
          {[ '/','/random', '/random/'].map((path) => (
            <Route
              key={path}
              path={path}
              render={(props) => <Joke key={props.location.key} />}
            />
          ))}
        </Routes>
      </div>
    </section>
  );
}

export default App;
