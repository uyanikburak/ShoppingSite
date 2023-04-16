import './App.css';
import RouteDefinitions from './app/RouteDefinitions';
import { useEffect, useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/configureStore';
import SkeletonPage from './app/SkeletonPage';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <SkeletonPage/>
      </header>
    </div>
    </Provider>

  );
}

export default App;
