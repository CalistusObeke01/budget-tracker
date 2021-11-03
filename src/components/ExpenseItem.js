import React, {useState, useContext} from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

const ExpenseItem = ({description, amount, id}) => {
	const { dispatch } = useContext(AppContext);
	const [dateTime] = useState(new Date());

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: id
		})
	}

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<div>
				{description} <br/> 
				<small className='dateColor'>
					{dateTime.toDateString()}, {dateTime.toLocaleTimeString()}
				</small>
			</div>
			<div>
				<span className='badge badge-primary badge-pill mr-3'>
					&#8358;{amount}
				</span>
				
				<TiDelete size='1.5em' onClick={handleDeleteExpense} style={{cursor: 'pointer'}}></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;