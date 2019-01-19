import React from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "mobx-react";
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';

import App   from "app"  ;
import stores from "stores";

const rootElement = document.getElementById("root");
const browserHistory = window.browserHistory || createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.router);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , rootElement);

    
if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
    if (!window.stores || !window.browserHistory) {
        window.browserHistory = browserHistory;
        window.stores = stores;
    }
}