import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, history, Switch } from 'react-router-dom';
import store from './store/store';

import App from "./App";

ReactDOM.render(
    <Provider store={store} >
        <Router history={history} >
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById("root") as HTMLElement);