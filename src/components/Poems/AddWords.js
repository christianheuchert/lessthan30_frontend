/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { createPoem } from '../../api/poem'
import { withRouter } from 'react-router-dom'


class AddWords extends Component {
  constructor (props) {
    super(props)

    this.state = {
      word: '',
      place:''
    }
  }

	handleChange = (event) =>
    this.setState({
        [event.target.name]: event.target.value
	})

	handleSubmit = (event) => {
	event.preventDefault()

	const { user, msgAlert, history } = this.props

	createPoem(this.state, user)
		.then(() => history.push('/poems'))
		.then(() => {
			msgAlert({
				heading: 'New Poem Created',
				message: 'Woo Created',
				variant: 'success'
			})
		})
		.catch((error) => {
			msgAlert({
				heading: 'Poem Creation Fail',
				message: 'Poem error: ' + error.message,
				variant: 'danger'
			})
		})
    }

	render () {
	return (
		<>
			<h4>{this.props.user.username}</h4>
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId='title'>
					<Form.Label >New Poem</Form.Label>
					<Form.Control
						required
						name='title'
						value={this.state.title}
						placeholder='New Poem Title'
						onChange={this.handleChange}
					/>
				</Form.Group>
				<button type='submit' className='btn btn-secondary'>
					Submit
				</button>
			</Form>
		</>
	)
	}
}

export default withRouter(AddWords)
