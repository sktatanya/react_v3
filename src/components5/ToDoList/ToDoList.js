import React, { PureComponent } from 'react';
import classes from "./ToDo.module.css";


class ToDoList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editingItemId: null,
      editText: '', // Добавляю состояние для хранения редактируемого текста
    };
  }

  startEditing = (id, text) => {
    this.setState({
      editingItemId: id,
      editText: text,
    });
  };

  saveEdit = () => {
    this.props.editItem(this.state.editingItemId, this.state.editText);
    this.setState({
      editingItemId: null,
      editText: "",
    });
  };

  cancelEdit = () => {
    this.setState({
      editingItemId: null,
      editText: "",
    });
  };

// ...

render() {
  const { items, removeItem } = this.props;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id} className={this.state.editingItemId === item.id ? "editing" : ""}>
          {this.state.editingItemId === item.id ? (
            <>
              <input
                type="text"
                value={this.state.editText}
                onChange={(e) => this.setState({ editText: e.target.value })}
              />
              <button onClick={this.saveEdit}>Save</button>
              <button onClick={this.cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <div className={classes.tasktext}>{`${index + 1}. ${item.text}`}</div>
              <div className={classes.taskbuttons}>
                <span onClick={() => this.startEditing(item.id, item.text)}>✎ Edit</span>
                <span className="delete" onClick={() => removeItem(item.id)}>❌ Delete</span>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

// ...

}

export default ToDoList;
