const React = require('react')
const { Route, IndexRoute } = require('react-router')
const App = require('./components/App')
const HomePage = require('./components/home/HomePage')
const CatsPage = require('./components/cats/CatsPage')
const CatPage = require('./components/cats/CatPage')

const myRoutes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/cats" component={CatsPage} />
  </Route>
)
