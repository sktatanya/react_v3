import React, { PureComponent } from "react";
import ToDoList from "./ToDoList";
import classes from "./ToDo.module.css";


class ToDoApp extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
			items: [],
			editingItemId: null, // Добавляю состояние для отслеживания элемента в режиме редактирования
		};
	}

	change = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.text.length) return;

		const newItem = {
			text: this.state.text,
			id: Date.now(),
			status: "new",
		};

		this.setState((state) => ({
			items: state.items.concat(newItem),
			text: "",
		}));
	};

	removeItem = (id) => {
		this.setState((state) => ({
			items: state.items.filter((item) => item.id !== id),
		}));
	};

	// Начинаю редактирование элемента
	startEditing = (id) => {
		this.setState({ editingItemId: id });
	};

	// Завершаю редактирование элемента
	finishEditing = () => {
		this.setState({ editingItemId: null });
	};

	// Сохраняю изменения после редактирования
	saveChanges = (id, newText) => {
		this.setState((state) => ({
			items: state.items.map((item) =>
				item.id === id ? { ...item, text: newText } : item
			),
		}));
		this.finishEditing();
	};

	editItem = (id, newText) => {
		this.setState((state) => ({
			items: state.items.map((item) =>
				item.id === id ? { ...item, text: newText } : item
			),
		}));
	};

	render() {
		return (
			<div className={classes.container}>

				<h1>ToDoApp</h1>

				<form
					onSubmit={this.handleSubmit}
				>
					<label className={classes.add}>Add Task &#8594;</label>
					<input type="text"
						value={this.state.text}
						onChange={this.change}
					/>
					<button
						type="submit"
					>
						Add
					</button>
				</form>

				<ToDoList
					items={this.state.items}
					removeItem={this.removeItem}
					startEditing={this.startEditing}
					editingItemId={this.state.editingItemId}
					finishEditing={this.finishEditing}
					saveChanges={this.saveChanges}
					editItem={this.editItem}
				/>
			</div>
		);
	}
}

export default ToDoApp;
