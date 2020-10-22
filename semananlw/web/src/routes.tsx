import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage/index';
import CreateOrphanage from './pages/CreateOrphanage/index';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanagesMap}/>

                <Route path="/orphanage" component={Orphanage}/>
                <Route path="/create" component={CreateOrphanage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
