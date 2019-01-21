import React from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "mobx-react";
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';

import App   from "app"  ;
import Store from "store";

const rootElement = document.getElementById("root");
const store = new Store();
const browserHistory = window.browserHistory || createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store.router);

ReactDOM.render(
    <Provider {...store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , rootElement);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
    if (!window.store || !window.browserHistory) {
        window.browserHistory = browserHistory;
    }
}
