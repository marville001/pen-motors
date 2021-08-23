import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CarDetails from './pages/CarDetails'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/details" component={CarDetails}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </div>
    )
}

export default App
