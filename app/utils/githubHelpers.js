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
		//fetch data from github
	}
}

module.exports = helpers