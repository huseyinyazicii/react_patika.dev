import React from 'react';

const Footer = ({setFilter, filter, list, setList}) => {

    const handleClick = (e) => {
        e.preventDefault();
        setFilter(e.target.name);
    }

    const handleButton = (e) => {
        setList(list.filter((item) => item.completed === false));
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{list.filter((item) => item.completed === false).length} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="/#" name="All" className={filter === "All" ? "selected" : null} onClick={handleClick}>All</a>
                </li>
                <li>
                    <a href="/#" name="Active" className={filter === "Active" ? "selected" : null} onClick={handleClick}>Active</a>
                </li>
                <li>
                    <a href="/#" name="Completed" className={filter === "Completed" ? "selected" : null} onClick={handleClick}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={handleButton}>
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;