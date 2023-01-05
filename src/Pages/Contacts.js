import React, { Component } from 'react'
import { Container, Form, Button} from 'react-bootstrap'

export default class Contacts extends Component {
	render() {
		return (
			<Container style={{width: '500px'}}>
				<h1 className="text-center m-3">Contacts us</h1>
				<form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email"/>
						<Form.Text>
							We'll never share your email with anyone else
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control as="textarea" rows="3"/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check className="mt-3 mb-3" type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">Submit</Button>
				</form>
			</Container>
		)
	}
}

