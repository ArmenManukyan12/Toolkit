import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

//Add button clicked => dispatch the todo action
const AddToDo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} >
			<input
				type='text'
				placeholder='Add a todo'
				value={value}
				onChange={(event) => setValue(event.target.value)}>
			</input>
			<button >
				Add
			</button>
		</form>
	);
};

export default AddToDo;

