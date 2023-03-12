import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // let title = props.title;    //일반 변수는 컴포넌트 재랜더링을 해주는 트리거역할을 해주지 못하게 됨
    const [title, setTitle] = useState(props.title);   // 구조분해할당?

    const clickHandler = ()=>{
        setTitle('Updated!');
        console.log(title);
        // useState는 비동기임. 그래서 title을 변경 후 콘솔에 출력하면 아직 바뀌지 전 값이 나옴
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;