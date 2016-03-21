import axios from 'axios'

 var id = process.env.GH_BASIC_CLIENT_ID
 var sec =  process.env.GH_BASIC_SECRET_ID
 //console.log(id, ' ', sec)
var param = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo(username){
	return axios.get('http://api.github.com/users/' + username + param)
}

var helpers = {
	getPlayersInfo(players){
		return (
			axios.all(
				players.map(function(username){
					return getUserInfo(username)
				})
			).then(
				function (info){
					return info.map(
						function (user){
							return user.data
						}
					)
				}
			).catch(
				function(err){
					console.warn('Error in getPlayersInfo', err)
				}
			)
		)
	}
}

module.exports = helpers