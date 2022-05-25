import React, { Component } from 'react'
import { showPoem } from '../../api/poem'
import { withRouter } from 'react-router-dom'
import WordPanel from './WordPanel'
import { indexWords } from '../../api/poem'


// parent of WordPanel and PoemWords
class OnePoem extends Component {
  constructor (props) {
    super(props)

    this.handler = this.handler.bind(this)
    
    this.state = {
        id: null,
        title: "",
        owner: null,
        stateChanged: false,
        words:[]
    }
  }

  //   found from stck overflow: https://stackoverflow.com/questions/35537229/how-can-i-update-the-parents-state-in-react
  handler() {
        this.setState(prevState => ({
        stateChanged: !prevState.stateChanged
        }))
  }

  componentDidMount () {
        this.getPoemWords()
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

  getPoemWords () {
        const { match, user } = this.props

        indexWords(match.params.id, user)
        .then((res) => {
        //   console.log(res.data.words)
          for (let item in res.data.words) {
            this.setState({ words: [...this.state.words, (res.data.words[item])] }) //simple value
            // console.log(res.data.words[item])
          }
      })
  }


render () {
  const { user, msgAlert } = this.props
  const { words } = this.state

  if (words === null) {
    return 'Loading...'
  }
  let poemJSX 
  if (words[0] === undefined) {
    poemJSX = 'No words, add some!'
  } else {
      poemJSX = words.map((word, index) => (
          <div key={index}>
            <p>{word.word}</p>
          </div>
      ))
  }

  return (
    <>
      <div>
        <h3>Viewing Poem:</h3>
        <h4>{this.state.title}</h4>
        <ul>
          <ul>{poemJSX}</ul>
        </ul>
        <WordPanel user={user} msgAlert={msgAlert} poemid={this.state.id} handler={this.handler}/>
      </div>
    </>
  )
}
}

export default withRouter(OnePoem)
