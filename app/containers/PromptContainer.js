import React from 'react';
import Prompt from '../components/Prompt';

export default React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },

    getInitialState(){
        return {
            username: ''
        }
    },
    handleUpdateUser(e){
        this.setState({
            username: e.target.value
        })
    },

    handleSubmitUser(e){
        e.preventDefault()
        var username = this.state.username
        this.setState({
            username: ''
        })

        if (this.props.routeParams.playerOne) {
            //go to battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        }
        else{
            //go to player two
            this.context.router.push('/playerTwo/' + this.state.username)

        }

    },

    render() {
        // console.log(this)
        return (
            <Prompt
                onSubmitUser = { this.handleSubmitUser }
                onUpdateUser = { this.handleUpdateUser }
                header = { this.props.route.header }
                username = { this.state.username }
            />
        );
    }
})
