import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import User from './components/User'
import AllTransactions from './components/AllTransactions'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/transactions" component={AllTransactions} />
      <Route exact path="/user/:id" component={User} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
