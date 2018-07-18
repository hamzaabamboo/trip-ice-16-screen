import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Controls from '../controls';
import Privacy from '../privacy';
import Home from '../home';

export default class Router extends Component {
	render() {
		return (
			<Switch>
				<Route path="/controls" component={Controls} />
				<Route path="/privacy" component={Privacy} />
				<Route path="/" component={Home} />
			</Switch>
		);
	}
}
