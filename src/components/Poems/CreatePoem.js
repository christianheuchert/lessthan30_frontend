/* eslint-disable indent */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { createPoem } from '../../api/poem'
import { withRouter } from 'react-router-dom'


class CreatePoem extends Component {
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
			<h4>Create Poem</h4>
			<Form onSubmit={this.handleSubmit}>
				<Form.Group controlId='title'>
					<Form.Label >New Poem: We Recommend You Put your Pen Name on the end!</Form.Label>
					<Form.Control
						required
						name='title'
						value={this.state.title}
						placeholder='New Poem Title + By Pen Name '
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

export default withRouter(CreatePoem)
