import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Merchants from "../containers/Merchants";
import Merchant from "../containers/Merchant";
import MerchantForm from "../containers/MerchantForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Merchants} />
            <Route exact path="/merchants/:id" component={Merchant} />
            <Route path="/merchants/:id/edit" component={MerchantForm} />
            <Route path="/merchants/new" component={MerchantForm} />
            <Route exact path="/:page" component={Merchants} />
            <Route render={() => <p>Not found</p>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
