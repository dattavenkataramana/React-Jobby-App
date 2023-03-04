import {Switch, Route} from 'react-router-dom'

import LoginSection from './Components/LoginSection'
import Home from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute'
import Jobs from './Components/Jobs'
import NotFound from './Components/NotFound'
import JobDetails from './Components/JobDetails'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginSection} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
