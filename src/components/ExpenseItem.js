//Import AppContext and useContext Hook
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

//Import TiDelete
import { TiDelete } from 'react-icons/ti';

//Create Arrow Function Method
const ExpenseItem = (props) => {
  //Use dispatch element from the AppContext AppReducer
  const { dispatch, currency } = useContext(AppContext);

  //Creates a delete method using dispatch
  const handleDeleteExpense = () => {
    //Identifies dispatch type and payload to identify event change
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  //Creates a method to increase expenses with expense.name property
  const increaseAllocation = (name) => {
    //Identifies expense department name and declared cost increase value
    const expense = {
      name: name,
      cost: 10,
    };

    //Dispatches the increase and declares the type
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name,
      cost: 10,
    };
    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
  };

  //Returns expense name, cost
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td className="text-center">
        <AiFillPlusCircle
          size="2.25em"
          color="green"
          onClick={(event) => increaseAllocation(props.name)}
          style={{ cursor: 'pointer' }}
        />
      </td>
      <td className="text-center">
        <AiFillMinusCircle
          size="2.25em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name)}
          style={{ cursor: 'pointer' }}
        />
      </td>
      <td className="text-center">
        <TiDelete
          size="1.5em"
          onClick={handleDeleteExpense}
          style={{ cursor: 'pointer' }}
        ></TiDelete>
      </td>
    </tr>
  );
};

//Allow other files to access ExpenseList.js
export default ExpenseItem;
