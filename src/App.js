import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './components/register'
import Homepage from './components/homepage'
import Dashboard from './components/dashboard';
import NewStory from './components/newstory'
import Navbar from './components/navbar'
import PublicStories from './components/publicstories';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path = "/" exact component = {() => <Homepage />} />
          <Route path = "/register" exact component = {() => <Register />} />
          <Route path = "/dashboard" exact component = {() => <Dashboard />} />
          <Route path = "/newstory" exact component = {() => <NewStory />} />
          <Route path = "/publicstories" exact component = {() => <PublicStories />} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
