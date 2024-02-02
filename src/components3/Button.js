import React from 'react'

function Button() {

	function sendClick(){
		console.log('Send');
	}
	return (
		<button onClick={sendClick}>Click Me</button>
	)
}

export default Button
