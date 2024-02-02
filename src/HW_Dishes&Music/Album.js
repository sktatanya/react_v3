import React from 'react'

function Album(props) {
	return (
		<div>
			<h2>{props.album.name}</h2>
			<h3>{props.album.artist}</h3>
			<p>{props.album.year}</p>
		</div>
	)
}

export default Album
