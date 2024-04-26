import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import MealList from "./components/TestComponent/meal-list/MealList";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <p>test</p>
      </Route>
      <Route exact path="/meals">
        <MealList/>
      </Route>
      <Route exact path="/test-component">
        <TestComponent></TestComponent>
      </Route>
    </Router>
  );
}

export default App;
