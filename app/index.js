/*
    Focused
    Independent
    Reusable
    Small
    Testable
*/

var React = require('react');
var ReactDom = require('react-dom');

var USER_DATA = {
    name: "Ryan West",
    username: "ryanwest91",
    image: "https://avatars0.githubusercontent.com/u/9437586?v=3&s=460"

}

var GetProfilePic = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired
    },

    render: function getProfilePic(props){
        return (
            <div>
                <img src={this.props.image} alt="user image"/>
            </div>
        )
    }

});

var GetProfileLink = React.createClass({

    propTypes: {
        username: React.PropTypes.string.isRequired
    },

    render: function getProfileLink(props){
        return (
            <div>
                <a href={"https://github.com/" + this.props.username}>{this.props.username}</a>
            </div>
        )
    }


});


var GetProfileName = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    render: function getProfileLink(props){
        return (

            <p>{"Hello, " + this.props.name}</p>

        )
    }

});

var GetAvatar = React.createClass({
    propTypes: {
        user: React.PropTypes.object.isRequired
    },

    render: function getAvatar(props){
        return (
            <div>
                <GetProfilePic image={this.props.user.image}/>
                <GetProfileLink username={this.props.user.username}/>
                <GetProfileName name={this.props.user.name}/>
            </div>
        )
    }
})

ReactDom.render(

    <GetAvatar user={USER_DATA}/>,
    document.getElementById('app')

);