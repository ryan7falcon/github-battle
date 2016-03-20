import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'


var routes = (
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
		</Route>
	);

module.exports = routes;
