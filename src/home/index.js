import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(216deg, #0000ff, #add8e6, #00ffff);
	background-size: 600% 600%;

	-webkit-animation: AnimationName 26s ease infinite;
	-moz-animation: AnimationName 26s ease infinite;
	animation: AnimationName 26s ease infinite;

	@-webkit-keyframes AnimationName {
		0% {
			background-position: 87% 0%;
		}
		50% {
			background-position: 14% 100%;
		}
		100% {
			background-position: 87% 0%;
		}
	}
	@-moz-keyframes AnimationName {
		0% {
			background-position: 87% 0%;
		}
		50% {
			background-position: 14% 100%;
		}
		100% {
			background-position: 87% 0%;
		}
	}
	@keyframes AnimationName {
		0% {
			background-position: 87% 0%;
		}
		50% {
			background-position: 14% 100%;
		}
		100% {
			background-position: 87% 0%;
		}
	}
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
	border: 5px black solid;
	border-radius: 10px;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.5);
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
						<Message>React Rocks !</Message>
					</MessageBox>
				</Content>
			</Background>
		);
	}
}

export default Home;
