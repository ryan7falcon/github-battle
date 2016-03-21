import React from 'react'
import styles from '../styles'
import { Link } from 'react-router'

export default React.createClass({

	render(){
		return(
			<div className="jumbotron col-sm-12 text-sm-center" style={styles.transparentBg}>
                <h1>Github Battle</h1>
                <p className="lead">Some fancy motto</p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-large btn-success">Get Started</button>
                </Link>
            </div>
		)
	}

});
