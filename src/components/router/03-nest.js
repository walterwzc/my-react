import React, { Component } from 'react'
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
                    <NavLink to="/" exact activeClassName="active">
                        home
                    </NavLink>{' '}
                    &nbsp;&nbsp;
                    <NavLink to="/list/9" activeClassName="active">
                        list
                    </NavLink>
                </div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/list/:id" component={List} />
                    <Route path="/page404" component={Page404} />
                    <Redirect to="/" />
                </Switch>
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
class List extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { match } = this.props
        console.log(this.props)
        return (
            <div>
                <Link to={`${match.url}/detail`}>detail</Link>
                <Link to={`${match.url}/detail2`}>detail2</Link>
                <Route path={`${match.path}/detail`} component={Detail} />
                <Route path={`${match.path}/detail2`} component={Detail2} />
            </div>
        )
    }
}
const Detail = () => <div>detail page</div>
const Detail2 = () => <div>detail2 page</div>
const Page404 = () => <div>Not Found page</div>

export default App
