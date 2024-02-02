import React, { PureComponent } from 'react'
import Loader from '../components_films/Loader'
import Movies from '../components_films/Movies'
import Search from '../components_films/Search'

class Main extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			movies: [],
			loading: true,
			filter: 'all',
		}
	}

	loadInitialMovies = () => {
		const { filter } = this.state;
		let url;
		
		if (filter === 'all') {
			url = 'https://www.omdbapi.com/?apikey=ce7a93f7&s=random';
		} else {
			url = `https://www.omdbapi.com/?apikey=ce7a93f7&s=random&type=${filter}`;
		}

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					movies: data.Search || [],
					loading: false,
			});
		})
			.catch((error) => console.error('Error:', error));
	};

		componentDidMount() {
			this.loadInitialMovies();
	}

	searchMovies= (str,filter) => {

		let url;
		if (filter === 'all') {
			url = `https://www.omdbapi.com/?apikey=ce7a93f7&s=${str}`;
		} else {
			url = `https://www.omdbapi.com/?apikey=ce7a93f7&s=${str}&type=${filter}`;
		}

		this.setState({loading:true})

		fetch(url)
         .then((response) => response.json())
         .then((data) => this.setState({ 
									movies: data.Search || [], 
									loading: false,
									filter: filter,
								}))
         .catch((error) => console.error("Error:", error));
}

handleFilterChange = (e) => {
	const newFilter = e.target.value;
	this.setState({ filter: newFilter });
	this.loadInitialMovies();
};

	render() {
		const {movies,loading,filter} = this.state
		return (
			<main>
				<Search 
					searchMovies={this.searchMovies} currentFilter={filter} handleFilterChange={this.handleFilterChange}
					/>
				{loading ? <Loader /> : <Movies movies={movies} />}
			</main>
		)
	}
}

export default Main