import React from 'react'
import { Link } from 'gatsby'

import './style.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    header = (
      <nav>
        <h1><Link to={'/'} >Jeff Hilnbrand</Link></h1>
        <Link to={'/'} ><h1>About ▾</h1></Link>
      </nav>
    )
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

export default Template
