import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import store from './store';
import Tabs from './components/Tabs';
import Home from './routes/Home';
import Mine from './routes/Mine';
import Car from './routes/Car';
import history from './store/history';
import './assets/css/common.less';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <main className="main-container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/car" component={Car}/>
                    <Route path="/mine" component={Mine}/>
                    <Redirect to="/"></Redirect>
                </Switch>
            </main>
            <Tabs></Tabs>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
