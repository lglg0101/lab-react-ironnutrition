import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			calories: '',
			image: ''
		};
	}

	formSubmit = event => {
		event.preventDefault();
		this.props.addFood(this.state);
		this.setState({
			name: '',
			calories: '',
			image: ''
		});
	};

	nameInput = event => {
		this.setState({
			name: event.target.value
		});
	};

	caloriesInput = event => {
		this.setState({
			calories: event.target.value
		});
	};

	imageInput = event => {
		this.setState({
			image: event.target.value
		});
	};

	render() {
		return (
			<div className="media-body align-self-center">
				<div className="formCenter">
					<form onSubmit={this.formSubmit}>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={e => this.nameInput(e)}
						/>

						<label>Calories:</label>
						<input
							type="text"
							name="calories"
							value={this.state.calories}
							onChange={e => this.caloriesInput(e)}
						/>

						<label>Image:</label>
						<input
							type="text"
							name="image"
							value={this.state.image}
							onChange={e => this.imageInput(e)}
						/>

						<input
							className="btn btn-primary col-3"
							type="submit"
							value="Submit"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default Form;
