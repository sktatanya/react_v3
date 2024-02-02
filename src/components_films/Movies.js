import React, { PureComponent } from 'react'
import Movie from '../components_films/Movie'
import classes from "./Movie.module.css";

class Movies extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		const {movies = []} = this.props
		return (
			<div className={classes.films}>
				{movies.length ? movies.map( movie => 
										< Movie key ={movie.imdbID} {...movie}/>): 
									<h2>Not Found</h2>}
			</div>
		)
	}
}

export default Movies