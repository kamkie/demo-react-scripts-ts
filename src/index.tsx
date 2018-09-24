import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from 'redux';
import {EnthusiasmAction} from "./actions";
import App from "./App";
import './index.css';
import {enthusiasm} from './reducers';
import registerServiceWorker from './registerServiceWorker';
import {IStoreState} from './types';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
}, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
