import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/" exact activeClassName="active">home</NavLink> &nbsp;&nbsp;
          <NavLink to="/about" activeClassName="active">about</NavLink>
        </div>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/page404" component={Page404}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout></Layout>
      </Router>
    )
  }
}

const Home = () => <div>home</div>
const About = () => <div>about</div>
const Search = () => <div>search</div>
const Page404 = () => <div>Not Found</div>

export default App
