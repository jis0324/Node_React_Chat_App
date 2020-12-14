import React, {useState} from "react";
import axios from 'axios';
import ChatNavLayout from "../layouts/ChatNavLayout";
import {SERVER} from "../config";
import { Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Signup() {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassWord] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (!email || !password || !confirmPassword) {
			setError("please fill all blanks!");
			return;
		}

		if (password !== confirmPassword) {
			setError("please input right confirm password.");
			return;
		}

		axios.post(`${SERVER}/signup`, {
			email: email,
			password: password
		}, {
			headers: { 'Content-Type': 'application/json' }
		})
			.then((response) => {
				history.push('/signin');
			})
			.catch(error => {
				if (error && error.response) {
					setError(error.response.data.message);
				}
			});
	}

	return (
		<div>
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

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Confirm Password"  onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />
					</Form.Group>
					<p className="text-danger text-center">{error}</p>
					<Button variant="primary" type="submit" className="d-flex mx-auto">
						Submit
  					</Button>
				</Form>

		</div>
	);
}
