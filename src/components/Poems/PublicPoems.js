import React, { Component } from 'react'
import { indexPublicPoems, indexPublicWords } from '../../api/poem'

class PublicPoems extends Component {
  constructor (props) {
    super(props)

    this.state = {
      poems: [],
      words: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexPublicPoems(user)
      .then((res) => this.setState({ poems: res.data.poems }))
      .then(() => {
        msgAlert({
          heading: 'See all <30 Poems',
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
    indexPublicWords(user)
      .then((res) => this.setState({ words: res.data.words }))
  }

wordsForPoem (poemid) {
    const { words } = this.state
    let poemwords = words.filter((word) => word.poem === poemid)
    let wordsJSX = poemwords.map((word) => (
        <div key={word.id} className='public-words'>{word.word}</div>
    ))
    return wordsJSX
}


render () {
  const { poems } = this.state
  if (poems === null) {
    return 'Loading...'
  }

  let poemJSX
  if (poems.length === 0) {
    poemJSX = 'No poems created yet!'
  } else {
    // eslint-disable-next-line array-callback-return
    poemJSX = poems.map((poem) => (
      <div key={poem.id} >
        <h3>{poem.title} </h3>
        <div className='public-poems'>
            {this.wordsForPoem(poem.id)}
        </div>
      </div>
    )).reverse()
        //.reverse to most recently created at the tops
  }
  return (
    <>
      <h1>Public Poems</h1>
      <p></p>
      <div className="font-link">{poemJSX}</div>

    </>
  )
}
}

export default PublicPoems
