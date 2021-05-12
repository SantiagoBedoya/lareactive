import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { startChecking } from '../redux/actions/auth';
import { routes } from './route-list';
import { LoaderPage } from '../components/shared/loader-page'

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { authUser, checking } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, []);

    if (checking) {
        return <LoaderPage />
    }

    return (
        <Router>
            <div>
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                            key={i}
                            {...route}
                        />
                    ))}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
