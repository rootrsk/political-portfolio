import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './component/Homepage';
import Panel from './component/Panel/Panel';
import './css/main.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="">
          <Switch>
            <Route path='/' component={Homepage} exact/>
            <Route path='/panel' component={Panel} />
          </Switch>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
