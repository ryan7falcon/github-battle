import React from 'react';
var PropTypes = React.PropTypes;
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

export default React.createClass({


	getInitialState(){
		return{
			isLoading: true,
			scores: []
		}
	},

	componentDidMount(){

		githubHelpers.battle(this.props.location.state.playersInfo)
		.then(function (scores) {
			this.setState({
				scores: scores,
				isLoading: false
			})
		}.bind(this))
	},

    render(){
    	return (
        	<Results
        		isLoading={this.state.isLoading}
        		scores={this.state.scores}
        		playersInfo={this.props.location.state.playersInfo}
        	/>
    	)
    }
});
