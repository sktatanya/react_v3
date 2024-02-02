import React, { PureComponent } from 'react'

class ElementsForm extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			userName: '',
			email: '',
			comments: '',
			lang_en: false,
			lang_ua: false,
			theme: 'light'
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	validateName = (e) => {
		if(this.state.userName.length < 10){
			console.log('ErrorName')
		}
	}

	validateEmail = (e) => {
		let reg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
		if(!reg.test(this.state.email)){
			console.log('ErrorEmail')
		}
	}

	check =(e) => {
		this.setState({
			[e.target.name] : e.target.checked
		})
	}

	render() {
		const {userName, email, comments, city, lang_en, lang_ua, theme} = this.state;
		return (
			<div>
				<input type="text" 
						name="userName"
						value={userName}
						placeholder="userName"
						onChange={this.handleChange}
						onBlur={this.validateName}
						/>
				<h2>{this.state.userName}</h2>
			<br/>

				<input type="email" 
						name="email"
						value={email}
						placeholder="Email"
						onChange={this.handleChange}
						onBlur={this.validateEmail}
				/>
				<h2>{email}</h2>
				<br/>

				<textarea name="comments"
							value={comments}
							onChange={this.handleChange}>
							</textarea>
				<h2>{this.state.comments}</h2>

				<select name="city"
							value={city}
							onChange={this.handleChange}>
					<option value="" disabled>Select city</option>
					<option value="1">Odessa</option>
					<option value="2">Kyiv</option>
					<option value="3">Lviv</option>
				</select>
				<br/>

				<input type="checkbox" 
						id="lang_en"
						name="lang_en"
						checked={lang_en}
						onChange={this.check}/>
				<label htmlFor="lang_en">EN</label>
				<br/>

				<input type="checkbox" 
						id="lang_ua"
						name="lang_ua"
						checked={lang_ua}
						onChange={this.check}/>
				<label htmlFor="lang_ua">UA</label>
				<br />

				<input type="radio"
							name="theme"
							value="dark"
							onChange={this.handleChange}
							checked={theme==="dark"}
							/>Dark
				<br/>

				<input type="radio"
							name="theme"
							value="light"
							onChange={this.handleChange}
							checked={theme==="light"} />Light
				<br/>
			</div>
		);
	};
};

export default ElementsForm