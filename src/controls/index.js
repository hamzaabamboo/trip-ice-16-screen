import React, { Component } from 'react';
import { auth, provider } from '../firebase.js';
import { db } from '../firebase';
import Textarea from 'react-textarea-autosize';
import styled from 'styled-components';

class Controls extends Component {
	state = {
		user: null,
		status: null,
		message: ''
	};

	login = () => {
		auth()
			.signInWithPopup(provider)
			.then(({ user }) => {
				this.setState({ user });
			});
	};

	logout = () => {
		auth()
			.signOut()
			.then(() => {
				this.setState({ user: null, status: null });
			});
	};

	send = () => {
		db.collection('message')
			.doc('current')
			.set({
				message: this.state.message
			})
			.then(doc => {
				this.setState({
					message: '',
					status: {
						error: false,
						message: 'Message set !'
					}
				});
			})
			.catch(e =>
				this.setState({
					status: {
						error: true,
						message: "You don't have the permission to do this !"
					}
				})
			);
	};

	componentDidMount() {
		auth().onAuthStateChanged(user => this.setState({ user }));
	}

	handleChange = e => {
		this.setState({ message: e.target.value });
	};

	render() {
		return (
			<Background>
				{!this.state.user ? (
					<Content>
						<Button onClick={this.login}>
							Login with Facebook
						</Button>
					</Content>
				) : (
					<Content>
						<TextField
							onChange={this.handleChange}
							value={this.state.message}
						/>
						<ButtonsBox>
							<Button onClick={this.send}>Send message</Button>
							<Button onClick={this.logout}>Logout</Button>
						</ButtonsBox>

						{this.state.status &&
							(!this.state.status.error ? (
								<Success>{this.state.status.message}</Success>
							) : (
								<Failed>{this.state.status.message}</Failed>
							))}
					</Content>
				)}
			</Background>
		);
	}
}
const Success = styled.div`
	color: green;
	margin: 5px;
	background-color: #81c784;
	display: inline-block;
	border-radius: 10px;
	border: 1px green solid;
	padding: 20px;
	text-align: center;
`;
const Failed = styled.div`
	color: red;
	margin: 5px;
	background-color: #e57373;
	display: inline-block;
	border-radius: 10px;
	border: 1px red solid;
	padding: 20px;
	text-align: center;
`;
const Background = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(to right, #0000ff, #00ffff);
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const Content = styled.div`
	flex-direction: column;
	display: flex;
	justify-content: center;
	max-width: 80%;
	width: 80%;
`;

const ButtonsBox = styled.div`
	display: flex;
	justify-content: center;
`;
const Button = styled.button`
	padding: 10px;
	border-radius: 10px;
	background-color: blue;
	font-size: 1.5em;
	color: white;
	border: none;
	margin: 5px 10px;
	:focus {
		outline: 0;
	}
	cursor: pointer;
`;
const TextField = styled(Textarea)`
	padding: 10px;
	border: 5px black solid;
	text-align: center;
	border-radius: 10px;
	font-size: 1.3rem;
	background-color: rgba(0, 0, 0, 0.1);
	min-height: 200px;
	margin-bottom: 15px;
	overflow: hidden;
	:focus {
		outline: 0;
	}
`;

export default Controls;
