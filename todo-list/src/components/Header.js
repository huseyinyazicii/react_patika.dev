import React, { useState } from 'react';

const Header = ({list, setList}) => {
    const [item, setItem] = useState("");
    
    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(item.length > 0){
            setList([...list, {name:item, completed:false, id:list.length}]);
            setItem("");
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    className="new-todo" 
                    value={item} 
                    placeholder="What needs to be done?" 
                    autoFocus 
                    onChange={handleChange} 
                />
            </form>
        </header>
    );
}

export default Header;