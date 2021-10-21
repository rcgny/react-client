import  HomePage  from "./pages/Home/HomePage";
import BirdListPage from "./pages/bird-list/BirdListPage"
import  NavBar  from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/BirdList" component={BirdListPage} />
      </Switch>
    </div>
  );
};

export default App;

 