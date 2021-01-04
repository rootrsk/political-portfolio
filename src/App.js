import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './components/templates/Auth';
import Homepage from './components/templates/Homepage';
import Menu from './components/templates/Menu';
import './css/main.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/menu' component={Menu}  />
          <Route path='/login' component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
