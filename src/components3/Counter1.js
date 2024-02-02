import React, { useState } from "react";

function Counter1() {
	const [count, setCount] = useState(0);

	function handleIncrement() {
   setCount(count + 1);
}

	function handleDecrement() {
   if (count > 0) {
      setCount(count - 1);
   }
}

	return (
   <>
      <button onClick={handleIncrement}>+</button>
      <MyButton count={count} />
      <button onClick={handleDecrement}>-</button>
   </>
);
}

// Дочерний компонент
function MyButton({ count }) {
	return (
   <>
      <h2>{count}</h2>
		<hr />
   </>
);
}

export default Counter1;
