import React, { PureComponent } from 'react'
import classes from "./Movie.module.css";

class Movie extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

	render() {
		const {Title: title,
			Year: year,
			imdbID: id,
			Type: type,
			Poster: poster} = this.props

		return (
			<div className={classes.movie} id={id}>
				<img 
					src={poster} 
					alt="id" 
					className={classes.poster} 
				/>
				<h2 className={classes.title}>{title}</h2>
				<p className={classes.type}>{type}</p>
				<p className={classes.year}>{year}</p>
			</div>
		)
	}
}

export default Movie