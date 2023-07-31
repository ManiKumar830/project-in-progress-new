import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import AdminDashboard from './components/AdminPage/AdminDashBoard'
import AdminAllTransactions from './components/AdminPage/AdminAllTransactions'

import UserDashBoard from './components/UserPage/UserDashBoard'
import UserAllTransactions from './components/UserPage/UserAllTransactions'
import ProfilePage from './components/ProfilePage'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route
        exact
        path="/admin/transactions"
        component={AdminAllTransactions}
      />

      <Route exact path="/user/:id" component={UserDashBoard} />
      <Route exact path="/transaction" component={UserAllTransactions} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
