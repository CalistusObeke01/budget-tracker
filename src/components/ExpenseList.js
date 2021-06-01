import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState([] || expenses);
	const [isLoading, setisLoading] = useState(true)

	useEffect(() => {
		setfilteredExpenses(expenses)

		setisLoading(false)
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.description.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul className='list-group mt-3 mb-3'>
				{ 
					isLoading ? (
						<div className='spinner-border text-primary' role='status'>
							{' '}
							<span className='sr-only'>Loading...</span>{' '}
						</div>
					) : (
						filteredExpenses.map((expense) => (
							<ExpenseItem
								key={expense.id }
								id={expense.id}
								description={expense.description}
								amount={expense.amount}
							/>
						))
					)
				}
			</ul>
		</>
	);
};

export default ExpenseList;