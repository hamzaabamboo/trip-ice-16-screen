import React, { Component } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import posed, { PoseGroup } from 'react-pose';
class Home extends Component {
	state = {
		message: 'Loading...',
		position: 'left'
	};
	componentDidMount() {
		db.collection('message')
			.doc('current')
			.onSnapshot(doc => {
				this.setState({
					position: 'right'
				});
				this.setState({
					message: doc.data().message,
					position: 'center'
				});
			});
	}
	render() {
		return (
			<Background>
				<Content>
					<Title>ICE Trip 2018</Title>
					<PoseGroup
						enterPose="center"
						exitPose="right"
						preEnterPose="left"
					>
						<MessageBox key={this.state.message}>
							<Message>{this.state.message}</Message>
						</MessageBox>
					</PoseGroup>
				</Content>
			</Background>
		);
	}
}

export default Home;

const Background = styled.div`
	height: 100vh;
	width: 100vw;
	background: linear-gradient(216deg, #0000ff, #add8e6, #00ffff);
	background-size: 600% 600%;
	display: flex;
	flex-direction: row;
	justify-content: center;
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
	text-align: center;
	margin: 20px 0;
`;
const Content = styled.div`
	display: flex;
	max-width: 80%;
	flex-direction: column;
	justify-content: center;
`;
const Message = styled.p`
	font-size: 1.75em;
	margin: 0;
`;
const config = {
	transition: { type: 'spring' }
};
const MessageBox = styled(
	posed.div({
		left: {
			...config,
			x: '-200%',
			rotate: -180
		},
		center: { ...config, x: '0%', rotate: 0 },
		right: { ...config, x: '200%', rotate: 180 }
	})
)`
	text-align: center;
	border: 5px black solid;
	border-radius: 10px;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.3);
	min-height: 150px;
	min-width: 40%;
	white-space: pre-line;
`;
