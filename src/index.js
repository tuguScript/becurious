import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Root from "./views/root";
import { browserHistory } from "react-router";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./core/reducers";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { createLogger } from "redux-logger";

const logger = createLogger();
let store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
  <Provider store={store}>
    <Root history={browserHistory} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
