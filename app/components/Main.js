import React, { Component } from 'react';

export default React.createClass({
	render() {
		return (
			<div className="main-container">
				{this.props.children}
			</div>
		);
	}
});

