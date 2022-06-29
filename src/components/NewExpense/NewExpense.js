import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const displayExpenseFormHandler = () => setDisplayExpenseForm(true);
  const hideExpenseFormHandler = () => setDisplayExpenseForm(false);

  const addNewExpenseButton = (
    <button onClick={displayExpenseFormHandler}>Add New Expense</button>
  );

  return (
    <div className='new-expense'>
      {!displayExpenseForm && addNewExpenseButton}
      {displayExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideExpenseForm={hideExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
