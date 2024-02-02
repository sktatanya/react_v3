import React from 'react'

function User(props) {
	return (

		<div className="user">

			<h2>{props.user.name}</h2>
			<h3>{props.user.age}</h3>
			<p>{props.user.group}</p>
			
		</div>
		
	)
}

export default User
