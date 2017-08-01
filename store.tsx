import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers"

const initialState = {
  users: {}
}

const store = createStore(reducer, initialState);