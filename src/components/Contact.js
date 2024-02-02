import React from 'react'
import User from './User'


function Contact() {
	const users = [
		{
			name: 'Alex',
			age: 35,
			group: 'f31',

		},
		{
			name: 'Kris',
			age: 32,
			group: 'f41',
			
		},
		{
			name: 'Max',
			age: 25,
			group: 'f41',
			
		}
		]

	let usersEls = users.map( item => <User user={item}/>
	)
	return (
		<div>
			<h1>Contact</h1>
			<h2>User List</h2>
			<div className="wrap">{usersEls}</div>
			</div>
	)
}

export default Contact
