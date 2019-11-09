import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery.js';
import Photo from './components/Photo.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="Mainbar">
        <h2>LOREM IPSUM</h2>
      </div>
      <Switch>
        <Route path="/" component={Gallery} exact/>
        <Route path="/photo/:photo_id" component={Photo}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
