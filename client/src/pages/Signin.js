import React, {useState} from "react";
import axios from 'axios';
import ChatNavLayout from "../layouts/ChatNavLayout";
import { Form, Button } from 'react-bootstrap';
import { SERVER } from "../config";
import { useHistory } from "react-router-dom";

export default function Signin() {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassWord] = useState("");
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (!email || !password) {
			setError("please enter username and password!");
			return;
		}

		axios.post(`${SERVER}/signin`, {
			email: email,
			password: password
		}, {
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => {
				history.push('/chat');

			})
			.catch((error) => {
				if (error && error.response) {
					setError(error.response.data.message);
				}
			});
	}

	return (
		<>
			<ChatNavLayout />
			<Form className="my-5 mx-auto col-md-4 col-xs-6" onSubmit={(e) => handleSubmit(e)}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
    					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} value={password} required />
				</Form.Group>
				<p className="text-danger text-center">{error}</p>
				<Button variant="primary" type="submit" className="d-flex mx-auto">
					Submit
  					</Button>
			</Form>
		</>

	)
}