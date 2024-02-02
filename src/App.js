import React from 'react'
// import Navigation from './components/Navigation'
// import Price from './components/Price'
// import About from './components/About'
// import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// import Timer from './components3/Timer'
// import Button from './components3/Button'
// import Counter1 from './components3/Counter1'
import Music from './HW_Dishes&Music/Music'
// import Shop from './components_shop/Shop'
import Database from './components_shop/Database'
// import Header from './components_films/Header'
// import Main from './components_films/Main'
// import Footer from './components_films/Footer'
// import ToDoApp from './components5/ToDoList/ToDoApp'
// import Postsfetch from './components3/Postsfetch'
// import ElementsForm from './components5/elementsForm'
// import TextEditor from './components3/TextEditor'
// import Timer2 from './components3/Timer2'
// import Counter2 from './components3/Counter2'


function App() {
	return (
		<Router>
			<header>
				{/* <Timer /> */}
				{/* <Timer2 /> */}
				{/* <Button /> */}
				{/* <Counter1 /> */}
				{/* <Counter2 /> */}
				{/* <TextEditor /> */}
				{/* <Postsfetch /> */}
				{/* <Navigation /> */}
				{/* <ElementsForm /> */}
				{/* <ToDoApp /> */}


				{/* <Header /> */}
				{/* <Main /> */}
				{/* <Footer /> */}

				<br />
				<hr/>

				{/* <Shop /> */}

				<Database />

			</header>
			<Routes>
				{/* <Route path='/Price' element={<Price />} /> */}
				{/* <Route path='/About' element={<About />} /> */}
				{/* <Route path='/Contact' element={<Contact />} /> */}
				
				<Route path='/Music' element={<Music />} />

			</Routes>
		</Router>
	)
}

export default App
