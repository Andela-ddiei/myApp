// npm modules
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { routerMiddleware } from 'react-router-redux';
import { Provider, connect, ActionCreator } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history)
import * as actions from './actions/'
import axios from 'axios';

const actionCreatorsMapObject = {
  getUsers () {
    const endpoint : string = "https://api.github.com/users"
    return (dispatch) => {
      dispatch({
        type: "GETTING_USERS"
      });
      axios.get(endpoint).then((users) => {
        console.log(users, "users")
        dispatch({
          type: "GOTTEN_USERS",
          data: users.data
        })
      })
    }
  },
  getUser (username:string) {
    const endpoint : string = `https://api.github.com/users/${username}`
    return (dispatch) => {
      axios.get(endpoint).then((user) => {
        console.log("user==========>", user)
        // dispatch({
        //   type: "GOTTEN_USER",
        //   data: user.data
        // })
      })
    }
  }
}

// custom modules
import reducer from './reducers/'
import { UserType } from './types/'
const store = createStore(reducer, applyMiddleware(middleware, thunk))

// components
import Page from "./components/Page";
import SingleUser from "./components/SingleUser"

const mapDispatchToProps = (dispatch: () => {}) => {
  return bindActionCreators(actionCreatorsMapObject, dispatch)
}

const mapStateToProps = (state: { users: Array<UserType>}) => {
  return {
    users: state.users
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Page);

const route = (
    <Provider store={store}>
        <BrowserRouter history={history}>
          <div>
            <Route path="/" component={App} />
            <Route path="/users/:username" component={SingleUser} />
          </div>
        </BrowserRouter>
    </Provider>
  )

const app = document.getElementById("app");
ReactDOM.render(route, app)