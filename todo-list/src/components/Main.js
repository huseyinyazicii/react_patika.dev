import React from 'react';
import Card from './Card';

const Main = ({list, setList, filter}) => {

    let filteredList = list;

    if(filter === "Completed"){
        filteredList = list.filter((item) => item.completed === true)
    }
    else if(filter === "Active"){
        filteredList = list.filter((item) => item.completed === false)
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    filteredList.map((item,index) => <Card item={item} list={list} setList={setList}  key={index} />)
                }
            </ul>
        </section>
    );
}

export default Main;