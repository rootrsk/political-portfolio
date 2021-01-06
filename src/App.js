import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from './components/templates/Auth';
import Homepage from './components/templates/Homepage';
import Menu from './components/templates/Menu';
import Offers from './components/templates/Offers';
import store from './store/store'
import './css/main.css'
import UserRouter from './components/user/UserRouter';
import EmployRouter from './components/employ/EmployRouter';
import AdminRouter from './components/admin/AdminRouter'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/menu' component={Menu}  />
          <Route path='/login' component={Auth} />
          <Route path='/offers' component={Offers} />
          <Route path='/user' component ={UserRouter} />
          <Route path='/employ' component ={EmployRouter} />
          <Route path='/admin' component ={AdminRouter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
