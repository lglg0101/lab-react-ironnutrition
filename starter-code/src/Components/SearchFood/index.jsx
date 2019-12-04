import React from 'react';

export default function SearchFood(props) {
	return (
		<input
			className="form-control"
			type="search"
			placeholder="Search for any food..."
			value={props.value}
			onChange={props.onChange}
		/>
	);
}
