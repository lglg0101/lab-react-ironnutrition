import React, { Component } from 'react';
import './App.scss';
import FoodBox from './Components/FoodBox';
import foods from './foods.json';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			food: foods,
			name: this.props.name,
			calories: this.props.calories,
			image: this.props.image
			// newFood: []
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.addFoodToList = this.addFoodToList.bind(this);
	}

	handleInputChange(event) {
		const image = event.target.valueimage;
		const name = event.target.valuename;
		const calories = event.target.valuecalories;
		this.setState({
			name: name,
			calories: calories,
			image: image
		});
	}

	addFoodToList(event) {
		event.preventDefault();
		const added = {
			name: this.state.name,
			calories: this.state.calories,
			image: this.state.image
		};
		// const name = this.state.name;
		// const calories = this.state.calories;
		// const images = this.state.image;

		this.setState({
			food: [...this.state.food, added]
		});
	}

	render() {
		console.log(this.state.name);

		return (
			<div className="App">
				<form onSubmit={this.addFoodToList}>
					<input
						type="text"
						valuename={this.state.name}
						onChange={this.handleInputChange}
						placeholder="name"
					/>

					<input
						type="number"
						valuecalories={this.state.calories}
						onChange={this.handleInputChange}
						placeholder="calories"
					/>

					<input
						type="text"
						value={this.state.image}
						onChange={this.handleInputChange}
						placeholder="imageURL"
					/>

					<button> Add Food To List </button>
				</form>

				{this.state.food.map(food => {
					return <FoodBox Key={food.name} {...food} />;
				})}

				{/* {newFood.map(food => {
					return <FoodBox Key={food.name} {...food} />;
				})} */}
			</div>
		);
	}
}

export default App;
