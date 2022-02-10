import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import  {HomePage, BirdListPage } from "./pages"; 
import  {NavBar}  from "./components"; 

export const App = () => {
  return (
    <div>    
     <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/BirdList" component={BirdListPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

 