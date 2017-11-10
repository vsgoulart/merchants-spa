import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import App from "./components/App";
import configureStore from "./stores/configureStore";
import registerServiceWorker from "./utils/registerServiceWorker";
import { fetchMerchants } from "./actions/merchants";

const store = configureStore();

store.dispatch(fetchMerchants());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
