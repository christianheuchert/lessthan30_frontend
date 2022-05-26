import React, { Component } from 'react'
import { showPoem, deletePoem, indexWords, deleteWord } from '../../api/poem'
import { withRouter } from 'react-router-dom'
import WordPanel from './WordPanel'
import Button from 'react-bootstrap/Button'

// parent of WordPanel
class OnePoem extends Component {
  constructor (props) {
    super(props)
    // funtion to pass to child
    this.handler = this.handler.bind(this)
    
    this.state = {
        id: null,
        title: "",
        owner: null,
        stateChanged: false,
        words:[]
    }
  }

  handler(word) {
    this.setState({words:[...this.state.words, word]})
  }

  componentDidMount () {
        const { match, user, msgAlert } = this.props
        this.getPoemWords(match.params.id, user)

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

  getPoemWords (id, user) {
        // const { match, user } = this.props

        indexWords(id, user)
        .then((res) => {
          for (let item in res.data.words) {
            this.setState({ words: [...this.state.words, (res.data.words[item])] }) //simple value
          }
      })
  }

deletePoemButton = () => {
  const { match, user, msgAlert, history } = this.props

  deletePoem(match.params.id, user)
    .then(() => history.push('/poems'))
    .then(() => {
      msgAlert({
        heading: 'Delete success',
        message: 'Poem deleted </3',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Delete fail',
        message: 'Delete error: ' + error.message,
        variant: 'danger'
      })
    })
}

deleteWordButton = (wordId, index) => {
  const { match, user, msgAlert } = this.props

  deleteWord(match.params.id, wordId, user)
    .then( () => {
        this.state.words.splice(index, 1);
    })
    .then(() => {
      msgAlert({
        heading: 'Delete success',
        message: 'Word deleted </3',
        variant: 'success'
      })
    })
    .catch((error) => {
      msgAlert({
        heading: 'Delete fail',
        message: 'Delete error: ' + error.message,
        variant: 'danger'
      })
    })
}



render () {
  const { user, msgAlert, match, history } = this.props
  const { words } = this.state

  if (words === null) {
    return 'Loading...'
  }
  let poemJSX 
  if (words[0] === undefined) {
    poemJSX = 'No words, add some!'
  } else {
      poemJSX = words.map((word, index) => (
          <div className="word" key={index}>
            <h5>{word.word}</h5>
            <Button onClick={() => this.deleteWordButton(word.id, index)} className="delete-button">X</Button>
          </div>
      ))
  }

  return (
    <>
    <h3>Viewing Poem:</h3>
      <div>
        <div className="poem-header">
            <h4 className="font-link">{this.state.title}</h4>
            <Button onClick={() => history.push(`/updatepoem/${match.params.id}/`)}>Update</Button>
            <Button onClick={this.deletePoemButton}>Delete</Button>
        </div>
        
        <div className="poem font-link">{poemJSX}</div>

        <WordPanel user={user} msgAlert={msgAlert} poemid={this.state.id} handler={this.handler} getPoemWords={this.getPoemWords}/>
      </div>
    </>
  )
}
}

export default withRouter(OnePoem)
