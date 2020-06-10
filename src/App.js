import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import ProjectState from "./context/projects/projectState";
import TasksState from "./context/tasks/tasksState";
import AlertState from "./context/alerts/AlertState";
import AuthState from "./context/auth/authState";
import tokenAuth from "./config/tokenAuth"
import PrivateRoute from './components/routes/PrivateRoute'

//revisar si hay token
const token = localStorage.getItem('token')
if(token){
  tokenAuth(token)
}
function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    
    <ProjectState>
      <TasksState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TasksState>
    </ProjectState>
  );
}

export default App;
