const React = require('react')
const Header = require('./Header')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

const { object } = React.PropTypes

App.propTypes = {
  children: object.isRequired
}

module.exports = App
