/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { updatePoem } from '../../api/poem'
import { withRouter } from 'react-router-dom'


class UpdatePoem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
  }

	handleChange = (event) =>
    this.setState({
        [event.target.name]: event.target.value
	})

	handleSubmit = (event) => {
	event.preventDefault()

	const { user, msgAlert, history, match } = this.props

	updatePoem(this.state, match.params.id ,  user)
		.then(() => history.push('/poems'))
		.then(() => {
			msgAlert({
				heading: 'Poem Updated',
				message: 'Change Saved',
				variant: 'success'
			})
		})
		.catch((error) => {
			msgAlert({
				heading: 'Poem Update Fail',
				message: 'Poem error: ' + error.message,
				variant: 'danger'
			})
		})
    }

	render () {
	return (
		<>
			<h4>Update Poem</h4>
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId='title'>
					<Form.Label >Update Poem</Form.Label>
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

export default withRouter(UpdatePoem)
