import React, { Component } from 'react'
import { indexWords } from '../../api/poem'
import { withRouter } from 'react-router-dom'

class PoemWords extends Component {
  constructor (props) {
    super(props)

    this.state = {
        words:[]
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    indexWords(match.params.id, user)
      .then((res) => {
        //   console.log(res.data.words)
          for (let item in res.data.words) {
            this.setState({ words: [...this.state.words, (res.data.words[item])] }) //simple value
            // console.log(res.data.words[item])
          }
      })

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
  const { words } = this.state
  if (words === null) {
    return 'Loading...'
  }
  let poemJSX 
  if (words[0] === undefined) {
    poemJSX = 'No words, add some!'
  } else {
      poemJSX = words.map((word) => (
          <div key={word.id}>
          <p>{word.word}</p>
          </div>
      ))
  }
  
  return (
    <>
        <ul>{poemJSX}</ul>
    </>
  )
}
}

export default withRouter(PoemWords)
