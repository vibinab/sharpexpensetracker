import logo from './logo.svg';
import './App.css';
import { Signup } from './component/Auth/Signup';
import { Login } from './component/Auth/Login';
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
    <Switch>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/">
    <Signup />
    </Route>
    </Switch>
    
      
    </div>
  );
}

export default App;
