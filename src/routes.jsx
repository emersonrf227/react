import React from 'react'; 
import {Switch, Route} from 'react-router-dom';  

import Search from './pages/Search'
import Produtos from './pages/Produtos'

const path = window.location.hostname !== 'localhost' ? '/react/' : '/'; 

const Routes = () => ( 
    <Switch>
        <Route
        exact
        path={ path }
        component={Search}
        />
        
        <Route
        exact
        path={ `${path}produtos/:id`}
        component={Produtos}
        />

        <Route
        component={() => (
            <div> Page not found </div> 
        )}
        />
    </Switch>

);

export default Routes; 


