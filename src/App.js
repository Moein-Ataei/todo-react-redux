import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import { Wrapper } from "./styledcomponents/styles";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper wrapper>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo />
                  <Todos />
                  <Footer />
                </React.Fragment>
              )}
            />
            <Route exact path="/edit/:id" component={EditTodo} />
            <Route path="/about" component={About} />
          </Switch>
        </Wrapper>
      </Router>
    </Provider>
  );
}

export default App;
