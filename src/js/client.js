import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
    /* jshint ignore:start */
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured} />
            <Route path="archives(/:article)" name="archives" component={Archives} />
            <Route path="settings" name="settings" component={Settings} />
        </Route>
    </Router>,
    app
    /* jshint ignore:end */
);
