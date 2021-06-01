import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { convertCurr } from './ConvertCurrency'


const Remaining = ({check}) => {
	const { budget, expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.amount);
	}, 0);

	const amountLeft = budget - totalExpenses

	if (totalExpenses > budget) {
		check = <p>You don't have sufficient balance</p>
	}



	return (
		<div className={check ? 'alert alert-danger' : 'alert alert-success'}>
			<span>Remaining: {convertCurr(amountLeft)}</span> {check}
		</div>
	)
}

export default Remaining