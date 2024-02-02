import React, { PureComponent } from 'react'
import classes from "./Movie.module.css";
import loadingGif from './loader.gif';



class Loader extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		return (
			<img src={loadingGif} alt="Loading..." className={classes.loader}/>
		)
	}
}

export default Loader