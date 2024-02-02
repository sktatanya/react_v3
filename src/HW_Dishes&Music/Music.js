import React from 'react'
import Album from './Album'

function Music() {

	const albums = [
		{
			name: 'Buster Keaton',
			artist : 'MiyaGi',
			year: 2019,
			imageUrl : 'https://i.ytimg.com/vi/USPUsh4IT1k/maxresdefault.jpg'
		},
		{
			name: '5NIZZA',
			artist : '5NIZZA',
			year: 2003,
			imageUrl :'https://upload.wikimedia.org/wikipedia/ru/c/cf/%D0%9F%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D0%B0%28%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%29.jpg',
		},
		{
			name: 'Меломанія',
			artist : 'Бумбокс',
			year: 2005,
			imageUrl: 'https://www.zvuki.ru/images/photo/44/44648.jpg',
		}
	]

	let albumsEls = albums.map( item => <Album album={item}/>)

	return (
		<div>
			<div>{albumsEls}</div>
		</div>
	)
}

export default Music
