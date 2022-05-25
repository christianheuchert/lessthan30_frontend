import React, { Component } from 'react'
import { showPoem } from '../../api/poem'
import { withRouter } from 'react-router-dom'
import PoemWords from './PoemWords'

class OnePoem extends Component {
  constructor (props) {
    super(props)

    this.state = {
        id: null,
        title: "",
        owner: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showPoem(match.params.id, user)
      .then((res) => this.setState({
        title: res.data.poem.title,
        id: res.data.poem.id,
        owner: res.data.poem.owner
      }))
      .then(() => {
        msgAlert({
          heading: 'Viewing Poem',
          message: 'Woot success',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'View failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }


render () {
  const { user, msgAlert } = this.props
  if (this.state.post === null) {
    return 'Loading...'
  }

  return (
    <>
      <div>
        <h3>Viewing Poem:</h3>
        <h4>{this.state.title}</h4>
        <ul>
          <PoemWords msgAlert={msgAlert} user={user} />
        </ul>
      </div>
    </>
  )
}
}

export default withRouter(OnePoem)
