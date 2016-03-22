import React from 'react';

function UserDetailsWrapper(props){
    return (
        <div className="col-sm-6">
        	<p className="lead">{props.header}</p>
        	{props.children}
        </div>
    )
}

UserDetailsWrapper.propTypes = {

}

module.exports = UserDetailsWrapper
