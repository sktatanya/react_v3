import React from 'react'
import Welcome from './Welcome'

function About() {
	return (
		<div>
			<h1>About</h1>
			<p className="title">Description</p>
			<Welcome name="Vladymyr" surname="Shelkov"/>
			<Welcome name="Alisa" surname="Shelkova"/>
			<Welcome name="Eva" surname="Shelkova"/>
		</div>
	)
}

export default About
