const React = require('react')
const { Link, IndexLink } = require('react-router')

const Header = () => (
  <nav>
    <IndexLink="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/cats" activeClassName="active">Cats</Link>
  </nav>
)

module.exports = Header
