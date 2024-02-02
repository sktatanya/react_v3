import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/Price">
						Price
					</NavLink>
				</li>
				<li>
					<NavLink to="/About">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/Contact">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
