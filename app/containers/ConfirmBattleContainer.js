import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

export default React.createClass({
	contextTypes: {
	  router: React.PropTypes.object.isRequired
	},

	getInitialState(){
		console.log("get initial state")
		return{
			isLoading: true,
			playerInfo: []
		}
	},

	componentWillMount(){
		console.log("will mount")
	},

	componentDidMount(){
		console.log("did mount")
		var query = this.props.location.query
		//console.log('Query: ', query)
		//fetch info from github then update the state
	},

	componentWillReceiveProps(nextProps, nextContext){
		console.log("will receive props")
	},

	componentWillUnmount(){
		console.log("will ummount")
	},

	render() {
		return (
			<ConfirmBattle
				isLoading = { this.state.isLoading }
				playersInfo = { this.state.playersInfo }
			/>
		);
	}
});
