import React from 'react';
import styles from '../styles'

export default React.createClass({
	getInitialState(){
		this.originalText = 'Loading'
		return{
			text: this.originalText
		}
	},

	componentDidMount(){
		var stopper = this.originalText + '...'
		this.interval = setInterval(function (){
			if (this.state.text === stopper){
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}.bind(this), 300)
	},

	componentWillUnmount(){
		 window.clearInterval(this.interval)
	},

    render() {
        return (
            <div style={styles.container} styles>
	             <p style={styles.content}>
		             {this.state.text}
	             </p>
             </div>
        );
    }
})
