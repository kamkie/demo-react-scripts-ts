import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Link, Route, Switch} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {EnthusiasmAction} from './actions';
import App from './App';
import './index.css';
import {enthusiasm} from './reducers';
import * as serviceWorker from './serviceWorker';
import {StoreState} from './types';

const history = createBrowserHistory();

const store = createStore<StoreState, EnthusiasmAction, any, any>(
    connectRouter(history)(enthusiasm),
    {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    },
    compose(
        applyMiddleware(
            routerMiddleware(history) // for dispatching history actions
            // ... other middlewares ...
        ),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path="/">
                    <div>
                        <App />
                        <Link to="/table"> Table </Link>
                    </div>
                </Route>
                <Route>
                    <div>
                        <App />
                        <Link to="/"> Table </Link>
                        <div>Miss</div>
                    </div>
                </Route>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
