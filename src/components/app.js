import React, { useState } from 'react';
import "../styles/app.css"

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
    return(
        <BrowserRouter>
        
        <Switch>
            <Route path ="/dashboard" >
                <Dashboard/>
            </Route >    
        </Switch>
        </BrowserRouter>
    )
}

export default App;
