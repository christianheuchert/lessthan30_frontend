import React, { Component } from 'react'
import { indexPoems } from '../../api/poem'
import { Link } from 'react-router-dom'

class MyPoems extends Component {
  constructor (props) {
    super(props)

    this.state = {
      poems: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexPoems(user)
      .then((res) => this.setState({ poems: res.data.poems }))
      .then(() => {
        msgAlert({
          heading: 'Welcome to <30',
          message: 'Look at allll those Poems',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Index Failed',
          message: 'Index error:' + error.message,
          variant: 'danger'
        })
      })
  }


render () {
  const { poems } = this.state

  if (poems === null) {
    return 'Loading...'
  }

  let poemJSX
  if (poems.length === 0) {
    poemJSX = 'No poems, create some'
  } else {
    // eslint-disable-next-line array-callback-return
    poemJSX = poems.map((poem) => (
      <div key={poem.id} className='my-poem'>
        <h3>{poem.title}</h3>
          <Link to={`/poem/${poem.id}`}><button type="button" className="btn btn-dark">View Poem</button></Link>
      </div>
    ))
  }
  return (
    <>
      <h1>My Poems</h1>
      <div>{poemJSX}</div>

    </>
  )
}
}

export default MyPoems
