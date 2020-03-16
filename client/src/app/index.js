import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { CollabsList, CollabsInsert, CollabsUpdate, HomePage } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/homepage" exact component={HomePage} />
                <Route path="/collabs/list" exact component={CollabsList} />
                <Route path="/collabs/create" exact component={CollabsInsert} />
                <Route path="/collabs/update/:id" exact component={CollabsUpdate} />
            </Switch>
        </Router>
    )
}

export default App
