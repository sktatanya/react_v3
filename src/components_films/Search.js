import React, { PureComponent } from "react";
import classes from "./Movie.module.css";


class Search extends PureComponent {
	constructor(props) {
	super(props);

   this.state = {
      search: "",
		showError: false,
		filter: 'all',
   };
}

	change = (e) => {
		this.setState({
			search: e.target.value,
			showError: false,
   });
};

	handleKey = (e) => {
		if (e.key === "Enter") {
			this.handleFilter();
   }
};

	handleFilterChange = (e) => {	
		this.setState({
			filter: e.target.value,
	});
}

	handleFilter = () => {
		const { search, filter } = this.state;

	if (search.trim() !== '') {
		this.props.searchMovies(search, filter);
	} else {
		this.setState({ showError: true });
	}
};


// вынес общую логику в отдельный метод Search, который будет вызываться из обоих обработчиков событий.
// проверяю, что значение поля поиска после удаления начальных и конечных пробелов не является пустой строкой. Если поле не заполнено, поиск не будет выполняться.

	search = () => {
		if(this.state.search.trim() !== ''){
			this.props.searchMovies(this.state.search);
		} else {
			this.setState({showError: true});
		}
};

	render() {
		return (
		<div className={classes.search}>

			<input
				type="search"
				placeholder="search"
				value={this.state.search}
				onChange={this.change}
				onKeyDown={this.handleKey}
				/>

			<div className={classes.filter}>

				<label>
					<input type="radio"
							name="type"
							value="all"
							onChange={this.handleFilterChange}
							checked={this.state.filter === 'all'}/>
						<span>All</span>
				</label>
				<label>
					<input type="radio"
							name="type"
							value="movie"
							onChange={this.handleFilterChange}
							checked={this.state.filter === 'movie'}/>
						<span>Movies</span>
				</label>
				<label>
					<input type="radio"
							name="type"
							value="series"
							onChange={this.handleFilterChange}
							checked={this.state.filter === 'series'}/>
						<span>Series</span>
				</label>
				
			</div>

			<button onClick={this.handleFilter}>Search</button>

			{this.state.showError && <p className={classes.error}>Пожалуйста, заполните поле ввода.</p>}

   </div>
   );
}
}

export default Search;
