import React from 'react';
import { TiEdit } from 'react-icons/ti'
import { convertCurr } from './ConvertCurrency'
import Button from './Button'

const ViewBudget = ({budget, handleEditClick}) => {
	return (
		<>
			<span>Budget: {convertCurr(budget)}</span>
            <Button
                onClick={handleEditClick}
                text=''
            >
                <TiEdit></TiEdit>
            </Button>
		</>
	);
};

export default ViewBudget;