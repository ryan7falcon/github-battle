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
			playersInfo: []
		}
	},

	componentWillMount(){
		console.log("will mount")
	},

	componentDidMount(){
		console.log("did mount")
		var query = this.props.location.query
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(
				function (players){
					this.setState({
						isLoading: false,
						playersInfo: [players[0], players[1]]
					})
				}.bind(this)
			)
	},

	componentWillReceiveProps(nextProps, nextContext){
		console.log("will receive props")
	},

	componentWillUnmount(){
		console.log("will ummount")
	},

	handleInitiateBattle(){

		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo
			}
		})

	},

	render() {
		return (
			<ConfirmBattle
				isLoading = { this.state.isLoading }
				playersInfo = { this.state.playersInfo }
				onInitiateBattle = {this.handleInitiateBattle}
			/>
		);
	}
});
