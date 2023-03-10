import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023, 3, 10);
    const expenseTitle = 'Car Intsurance';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__description">
                <div>{expenseTitle}</div>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;