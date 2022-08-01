import logo from './logo.svg';
import './App.css';
import { Signup } from './component/Auth/Signup';
import { Login } from './component/Auth/Login';
import {Route,Switch} from "react-router-dom";
import { Expense } from './component/Expensetracker/Expense';
import AuthContext from './store/auth-context';
import { useContext } from 'react';

function App() {

  const authctx=useContext(AuthContext)
  const isloggendin=authctx.isLoggedIn;
  console.log("user", isloggendin)
  return (
    <div>
    <Switch>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/" exact>
    <Signup />
    </Route>
    { isloggendin && (<Route path="/expense">
      <Expense />
    </Route>)
    }
    
    </Switch>
    
      
    </div>
  );
}

export default App;
