import React, { Component } from "react";
import Dashboard from "./containers/dashboard";
import { store } from "./helpers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
