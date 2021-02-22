import React from 'react';
import { Route, Switch } from 'react-router';
import ErrorPage from './app/employee/ErrorPage';
import Search from './app/employee/Search';
import SearchDetail from './app/employee/Search-Details';

const ReactRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Search />} />
            <Route path="/:id" component={() => <SearchDetail />} exact />
            <Route path="/error" component={() => <ErrorPage />} />
        </Switch>

    )
}
export default ReactRouter;