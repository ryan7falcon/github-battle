import React from 'react';

export default React.createClass({
	render() {
		return (
			<div className="main-container">
				Hello from Main
				{this.props.children}
			</div>
		);
	}
});

