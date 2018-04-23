import React, {Component} from 'react'
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
          <NavLink to="/list" activeClassName="active">list</NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list" component={List}></Route>
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
const Page404 = () => <div>Not Found page</div>

class List extends Component {
  constructor(props) {
    super(props)
  }

  gotoDetail() {
    const {history, location} = this.props
    console.log(this.props);
    // history.push('/list/3')
    location.hash = '#/list/5'
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Link to={`${match.url}/0`}>item1</Link><br/>
        <Link to={`${match.url}/1`}>item2</Link><br/>
        <Link to={`${match.url}/2`}>item3</Link>
        <button onClick={() => this.gotoDetail()}>GO</button>
        <Route path={`${match.path}/:id`} component={Detail}></Route>
      </div>
    )
  }
}

class Detail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { match } = this.props
    return (
      <div>{match.params.id}</div>
    )
  }
}

export default App
