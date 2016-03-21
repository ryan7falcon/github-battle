import React from 'react';

function ConfirmBattle(props){
    return (
		props.isLoading
			? <p> Loading! </p>
			: <p> Confirm Battle </p>
    )
}

module.exports = ConfirmBattle
