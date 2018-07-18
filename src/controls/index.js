import React, { Component } from 'react';
import { auth, provider } from '../firebase.js';
import styled from 'styled-components';
class Controls extends Component {
	state = {
		user: null
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
				this.setState({ user: null });
			});
	};

	componentDidMount() {}

	render() {
		return !this.state.user ? (
			<Button onClick={this.login}>Login</Button>
		) : (
			<Button onClick={this.logout}>Logout</Button>
		);
	}
}

const Button = styled.button``;

export default Controls;
