import React from 'react';

function puke(object){
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Results(props){
    return (
        <div>Results: {puke(props)}</div>
    )
}

Results
.propTypes = {
	isLoading: React.PropTypes.bool.isRequired,
	scores: React.PropTypes.array.isRequired,
	playersInfo: React.PropTypes.array.isRequired
}

module.exports = Results
