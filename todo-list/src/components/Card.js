import React from 'react';

const Card = ({item, setList, list}) => {

    const handleChange = (e) => {
        item.completed = !item.completed;
        setList([...list]);
    }

    const handleClick = (e) => {
        setList(list.filter((element) => element.id !== item.id))
    }

    return (
        <li className={item.completed ? "completed" : null}>
            <div className="view">  
                <input className="toggle" type="checkbox" checked={item.completed} onChange={handleChange} />
                <label>{item.name}</label>
                <button className="destroy" onClick={handleClick}></button>
            </div>
        </li>
    );
}

export default Card;