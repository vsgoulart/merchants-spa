import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Merchants from "../containers/Merchants";
import Merchant from "../containers/Merchant";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Merchants} />
            <Route exact path="/merchants/" component={Merchants} />
            <Route exact path="/merchants/:id" component={Merchant} />
            <Route path="/merchants/:id/edit" render={() => <p>tek</p>} />
            <Route path="/merchants/new" render={() => <p>tek</p>} />
            <Route render={() => <p>Not found</p>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
