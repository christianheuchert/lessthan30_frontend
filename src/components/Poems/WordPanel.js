import React, { Component } from 'react'
import { createWord, getWordList } from '../../api/poem'

// style blocks
const panel = {
  position: 'absolute',
  top: '100px',
  right: '10px',
  width: '200px',
  height: '970px',
  border: '1px solid #000',
  padding: '2px'
}
// const position = {
//     position: 'absolute',
//     right: '50px',
//     top: '100px'
// }

class WordPanel extends Component {
    constructor (props) {
        super(props)

        this.state = {
        wordList: null,
        words: []
        }
    }

    componentDidMount () {
        const { user, msgAlert } = this.props

        getWordList(user)
            .then((res) => this.setState({wordList: res.data}))
            .then(() => {
                msgAlert({
                    heading: 'Word List Generated',
                    message: 'Woo Created',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Get Words Fail',
                    message: 'Poem error: ' + error.message,
                    variant: 'danger'
                })
            })
    }

    addWord (data) {
        const {user, msgAlert, poemid} = this.props
        // create data to pass to create word api call
        data = {
            word: data,
            xcoordinate: 0, 
            ycoordinate: 0
        }
        console.log(poemid)
        createWord(data, poemid, user)
        .then((res) => this.props.handler(res.data.word))
        // .then((res) => this.setState({
        // title: res.data.poem.title,
        // id: res.data.poem.id,
        // owner: res.data.poem.owner
        // }))
        .then(() => {
        msgAlert({
          heading: 'Word Added to Poem',
          message: 'Woot success',
          variant: 'success'
        })
        })
        .catch((error) => {
        msgAlert({
          heading: 'Word to Poem Failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
        })
    }

    render () {
    // variable to hold the state
    const { wordList } = this.state

    let wordListJSX
    if (wordList === null) {
        return 'Loading...'
    }else{
        wordListJSX = wordList.map((word, index) => (
            <div className="word-panel" key={index}>
                    <li onClick={ () => this.addWord(word)}>{word}</li>
            </div>
        ))
    }
    return (
        <>
            <div style={panel}>
                <ul>{wordListJSX}</ul>
            </div>
        </>
    )
    }
}

export default WordPanel
