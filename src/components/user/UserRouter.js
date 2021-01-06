import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../templates/Header'
import Cart from './Cart'

function UserRouter() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/user/cart' component={Cart} />
            </Switch>
        </div>
    )
}

export default UserRouter
