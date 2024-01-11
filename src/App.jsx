import React from "react";
import "./App.css"
import { Provider } from "react-redux";
import store from "./store/store"
import TodoApp from "./pages/TodoApp";


const App = () => {
  return (
    <>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </>
  )
};

export default App;


