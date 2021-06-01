import React, { useState } from 'react';
import Button from './Button'

const EditBudget = ({budget, handleSaveClick}) => {
	const [value, setValue] = useState(budget);
	return (
		<>
			<input
				required='required'
				type='number'
				className='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<Button 
				onClick={() => handleSaveClick(value)}
			></Button>
		</>
	);
};

export default EditBudget;