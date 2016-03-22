import React from 'react';

function puke(object){
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props){
    return (
		props.isLoading
			? <p> Loading! </p>
			: <div> Confirm Battle: {puke(props)} </div>
    )
}

ConfirmBattle.propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
    playersInfo: React.PropTypes.array.isRequired
}

module.exports = ConfirmBattle
