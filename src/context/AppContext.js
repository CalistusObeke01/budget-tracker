import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			}
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			}
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )
            }
		default:
			return state;
	}
}


const initialState = {
	budget: 2000,
	expenses: [
		{ id: uuidv4(), description: 'Shopping', amount: 50},
		{ id: uuidv4(), description: 'Holiday', amount: 300},
		{ id: uuidv4(), description: 'Transportation', amount: 70},
		{ id: uuidv4(), description: 'Fuel', amount: 40},
		{ id: uuidv4(), description: 'Child Care', amount: 500},
	]
};



export const AppContext = React.createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = React.useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
