import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App'
import Homepage from './components/homepage';
import Register from './components/register';
import Dashboard from './components/dashboard'
import NewStory from './components/newstory';
import PublicStories from './components/publicstories';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/newstory" component={NewStory} />
        <Route path="/publicstories" component={PublicStories} />
    </Route>
)