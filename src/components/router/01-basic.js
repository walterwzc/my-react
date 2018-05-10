import React from 'react'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom'

class Layout extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink to="/" exact activeClassName="active">
                        home
                    </NavLink>{' '}
                    &nbsp;&nbsp;
                    <NavLink to="/about" activeClassName="active">
                        about
                    </NavLink>
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                {/*<Route path="/about" component={Search}></Route>*/}
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout />
            </Router>
        )
    }
}

const Home = () => <div>home</div>
const About = () => <div>about</div>
const Search = () => <div>search</div>

export default App
