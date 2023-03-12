import './Card.css';

// 컴포지션 :children prop
const Card = (props) => {
    const classes = 'card ' + props.className; // 하위 속성들에 자동으로 card 클래스 부여 

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;