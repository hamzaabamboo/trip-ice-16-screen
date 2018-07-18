import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
	height: 100vh;
	width: 100vw;
`;
const Title = styled.h1`
	font-size: 4em;
	margin-top: 0;
	margin-bottom: 50px;
`;
const Content = styled.div`
	text-align: center;
	padding-top: 20vh;
`;
const Message = styled.p`
	font-size: 2em;
`;
const MessageBox = styled.div`
	border: 1px black solid;
	border-radius: 10px;
	padding: 20px;
	background-color: grey;
	display: inline-block;
	text-align: center;
	min-height: 150px;
	min-width: 40%;
`;

class Home extends Component {
	render() {
		return (
			<Background>
				<Content>
					<Title>ICE Trip #16</Title>
					<MessageBox>
						<Message>I like pizza</Message>
					</MessageBox>
				</Content>
			</Background>
		);
	}
}

export default Home;
