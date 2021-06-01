import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { convertCurr } from './ConvertCurrency'

const ExpenseTotal = () => {
	const { expenses} = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.amount);
	}, 0);


	return (
		<div className='alert alert-primary'>
			<span>Spent so far: {convertCurr(totalExpenses)}</span>
		</div>
	);


};

export default ExpenseTotal;