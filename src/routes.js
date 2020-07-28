import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';

const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;