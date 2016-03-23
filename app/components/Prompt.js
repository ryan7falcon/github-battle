import React from 'react';
import styles from '../styles'
import MainContainer from '../containers/MainContainer'

function Prompt(props){

    return (
            <MainContainer>
                <h1>{props.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={props.onSubmitUser}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="github UserName"
                                onChange={props.onUpdateUser}
                                value={props.username}
                            />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button
                                className="btn btn-success"
                                type="submit"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </MainContainer>
        )
}

Prompt.propTypes = {
        header: React.PropTypes.string.isRequired,
        onUpdateUser: React.PropTypes.func.isRequired,
        onSubmitUser: React.PropTypes.func.isRequired,
        username: React.PropTypes.string.isRequired
}

export default Prompt
