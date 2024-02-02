import React, { Component } from "react";

class Counter2 extends Component {
	constructor() {
   super();
   this.state = {
      count: 0,
   };
}

	handleIncrement = () => {
   this.setState((prevState) => ({
      count: prevState.count + 1,
   }));
};

	handleDecrement = () => {
   if (this.state.count > 0) {
      this.setState((prevState) => ({
		count: prevState.count - 1,
      }));
   }
};

	render() {
		return (
      <>
			<button onClick={this.handleIncrement}>+</button>
			<MyButton count={this.state.count} />
			<button onClick={this.handleDecrement}>-</button>
      </>
   );
}
}

// Дочерний компонент
function MyButton({ count }) {
	return (
   <>
      <h2>{count}</h2>
   </>
	);
}

export default Counter2;
