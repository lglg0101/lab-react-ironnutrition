import React, { Component } from 'react';
import './App.scss';
import FoodBox from './Components/FoodBox';
import Form from './Components/Form';
import foods from './foods.json';
import SearchFood from './Components/SearchFood';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			foods: foods,
			showForm: false,
			searchQuery: ''
		};

		this.toggleForm = this.toggleForm.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	toggleForm() {
		this.setState({
			showForm: !this.state.showForm
		});
		console.log(this.state.showForm);
	}

	addFoodToList = food => {
		const foodsCopy = [...this.state.foods];

		foodsCopy.push(food);

		this.setState({
			foods: foodsCopy
		});
	};

	handleSearch(event) {
		const query = event.target.value;
		this.setState({
			SearchQuery: query
		});
	}

	get filteredFoodList() {
		const list = this.state.foods;
		const query = this.state.searchQuery;
		const filteredList = list.filter(food => {
			return food.name.toLowerCase().includes(query.toLowerCase());
		});
		return filteredList;
	}

	render() {
		return (
			<div className="App">
				<SearchFood
					value={this.state.searchQuery}
					onChange={this.handleSearch}
				/>
				{this.filteredFoodList.map(food => {
					return <FoodBox food={food} key={food.name} />;
				})}
				<div className="formButton">
					<button className="btn btn-primary col-3" onClick={this.toggleForm}>
						Show Form To Add Food
					</button>
					{this.state.showForm && <Form addFood={this.addFoodToList} />}
				</div>

				{this.state.foods.map((food, index) => (
					<FoodBox
						key={index}
						name={food.name}
						calories={food.calories}
						image={food.image}
						quantity={food.quantity}
					/>
				))}
			</div>
		);
	}
}

export default App;
