// npm modules
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { routerMiddleware } from 'react-router-redux';
import { Provider, connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history)
import * as actions from './actions/'
console.log(actions);

// custom modules
import reducer from './reducers/'
import { UserType } from './types/'
const store = createStore(reducer, applyMiddleware(middleware, thunk))

// components
import Page from "./components/Page";

const mapDispatchToProps = (dispatch: () => {}) => {
  return bindActionCreators({}, dispatch)
}

const mapStateToProps = (state: { users: Array<UserType>}) => {
  return {
    users: state.users
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Page);
console.log(App, "app")

const route = (
    <Provider store={store}>
        <BrowserRouter history={history}>
          <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
  )

const app = document.getElementById("app");
ReactDOM.render(route, app)