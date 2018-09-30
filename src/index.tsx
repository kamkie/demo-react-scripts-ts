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
import registerServiceWorker from './registerServiceWorker';
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
registerServiceWorker();
