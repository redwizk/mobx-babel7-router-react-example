import React from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "mobx-react";
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'mobx-react-router';

import App   from "app"  ;
import stores from "stores";

const rootElement = document.getElementById("root");
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.router);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , rootElement);

if (module.hot) {
    module.hot.accept();
}
