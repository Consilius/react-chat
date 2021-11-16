import React, { FunctionComponent } from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initialState, State } from "../mockData";
import "./app.css";
import Sidebar from "./SideBar/Sidebar";
interface Person {
  id: string;
  name: string;
}

const rootReducer = (state: State, action: RootActions) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const isAlreadyInFavorites = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (isAlreadyInFavorites) return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

const App: FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact={true}>
          <Sidebar />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Provider>
  );
};

export default withRouter(hot(App));

type RootActions = ADD_TO_FAVORITES;

type ADD_TO_FAVORITES = ReturnType<typeof addToFavorites>;
export const addToFavorites = (item) => ({
  type: "ADD_TO_FAVORITES",
  payload: {
    id: `f${item.id[1]}`,
    name: item.name,
  },
});
