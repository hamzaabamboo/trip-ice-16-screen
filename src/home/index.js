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
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	-webkit-animation: Gradient 20s ease infinite;
	-moz-animation: Gradient 20s ease infinite;
	animation: Gradient 20s ease infinite;

	@-webkit-keyframes Gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@-moz-keyframes Gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes Gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;
const Title = styled.h1`
	text-align: center;
	font-size: 4em;
	background: linear-gradient(
		to right,
		#01579b 20%,
		#29b6f6 40%,
		#29b6f6 60%,
		#01579b 80%
	);
	background-size: 200% auto;

	color: #000;
	background-clip: text;
	text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	animation: shine 10s linear infinite;
	@keyframes shine {
		to {
			background-position: 200% center;
		}
	}
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
			x: '-180%',
			rotate: -180
		},
		center: { ...config, x: '0%', rotate: 0 },
		right: { ...config, x: '180%', rotate: 180 }
	})
)`
	text-align: center;
	border: 5px black solid;
	overflow-wrap: break-word;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 20px;
	background-color: rgba(0, 0, 0, 0.3);
	min-height: 150px;
	min-width: 40%;
	white-space: pre-line;
`;
