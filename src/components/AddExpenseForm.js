import React, {useState, useContext} from 'react'
import Button from './Button'
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';


const AddExpenseForm = () => {

	const { dispatch } = useContext(AppContext);

    const [description, setDescription] = useState('')
	const [amount, setAmount] = useState('')


	const onSubmit = (event) => {
		event.preventDefault();

		const expense = {
			id: uuidv4(),
			description: description.charAt(0).toUpperCase() + description.slice(1).toLowerCase(),
			amount: parseInt(amount)
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		})

		// Clear form after submitting
        setDescription('')
        setAmount('')
	};


	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='description'>Description</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='description'
                        value={description}
						onChange={(event) => setDescription(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label htmlFor='amount'>Amount</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='amount'
                        value={amount}
						onChange={(event) => setAmount(event.target.value)}
					></input>
				</div>
			</div>

            <div className='row'>
            	<div className='col-sm'>
					<Button 
						type='submit'
						className='btn btn-primary mt-3 mb-4'
						disabled={!description || !amount}
					></Button>
				</div>
            </div>
		</form>
	);
};

export default AddExpenseForm;